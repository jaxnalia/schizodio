<script lang="ts">
  import { onMount } from "svelte";
  import * as THREE from "three";
  import {
    EffectComposer,
    RenderPass,
    GlitchEffect as PostGlitchEffect,
    EffectPass,
    BlendFunction,
  } from "postprocessing";

  export let intensity: number = 1;
  export let wild: boolean = false;

  let container: HTMLDivElement;
  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;
  let renderer: THREE.WebGLRenderer;
  let composer: EffectComposer;
  let glitchEffect: PostGlitchEffect;

  let object: any;
  let light: any;

  onMount(() => {

    // Scene setup
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000,
    );
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    object = new THREE.Object3D();
    scene.add(object);

    const geometry = new THREE.SphereGeometry(1, 4, 4);

    for (let i = 0; i < 100; i++) {
      const material = new THREE.MeshPhongMaterial({
        color: 0xffffff * Math.random(),
        flatShading: true,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position
        .set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5)
        .normalize();
      mesh.position.multiplyScalar(Math.random() * 400);
      mesh.rotation.set(
        Math.random() * 2,
        Math.random() * 2,
        Math.random() * 2,
      );
      mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 50;
      object.add(mesh);
    }

    scene.add( new THREE.AmbientLight( 0xcccccc ) );

				light = new THREE.DirectionalLight( 0xffffff, 3 );
				light.position.set( 1, 1, 1 );
				scene.add( light );

    camera.position.z = 5;

    // Post processing setup
    composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    glitchEffect = new PostGlitchEffect({
      blendFunction: BlendFunction.NORMAL,
      chromaticAberrationOffset: new THREE.Vector2(0.01, 0.01),
      delay: new THREE.Vector2(1.5, 3.5),
      duration: new THREE.Vector2(0.6, 1.0),
      strength: new THREE.Vector2(0.3, 1.0),
      ratio: 0.85,
    });

    const effectPass = new EffectPass(camera, glitchEffect);
    composer.addPass(effectPass);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      object.rotation.x += 0.005;
      object.rotation.y += 0.01;
      composer.render();
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
      composer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeChild(renderer.domElement);
    };
  });

  $: if (glitchEffect) {
    if (wild) {
      glitchEffect.strength = new THREE.Vector2(3, 9);
      glitchEffect.ratio = 0.95;
      glitchEffect.chromaticAberrationOffset = new THREE.Vector2(0.1, 0.1);
      glitchEffect.delay = new THREE.Vector2(0.1, 0.3);
      glitchEffect.duration = new THREE.Vector2(0.2, 0.4);
    } else {
      // Normal intensity-based effect
      const strengthValue = intensity * 0.3;
      glitchEffect.strength = new THREE.Vector2(strengthValue, strengthValue * 3);
      glitchEffect.ratio = 0.85 + intensity * 0.15;
      glitchEffect.chromaticAberrationOffset = new THREE.Vector2(
        0.01 + intensity * 0.02,
        0.01 + intensity * 0.02,
      );
      glitchEffect.delay = new THREE.Vector2(1.5, 3.5);
      glitchEffect.duration = new THREE.Vector2(0.6, 1.0);
    }
  }
</script>

<div
  bind:this={container}
  class="w-full h-full min-h-[200px] win95-border"
></div>

<style>
  div {
    border-width: 2px;
    border-style: solid;
  }
</style>
