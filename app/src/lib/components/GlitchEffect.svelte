<script lang="ts">
  import { onMount } from "svelte";
  import * as THREE from "three";
  import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
  import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
  import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass.js';

  export let width = window.innerWidth;
  export let height = window.innerHeight;

  let container: HTMLDivElement;
  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;
  let renderer: THREE.WebGLRenderer;
  let composer: EffectComposer;

  let object: any;

  onMount(() => {
    init();
    animate();

    return () => {
        // Cleanup
        scene.clear()
        renderer.dispose()
    }
  });

  function init() {
    // Scene setup
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000,
    );
    camera.position.z = 5;

    // Renderer setup
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    
    // Random objects
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

    // Post processing 
    composer = new EffectComposer(renderer);
    
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const glitchPass = new GlitchPass();
    composer.addPass(glitchPass);
  };

  // Animation loop
  function animate() {
      requestAnimationFrame(animate);
      if(object) {
        object.rotation.y += 0.005;
      }
      composer.render();
    };

    // Handle window resize
  function onWindowResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      
      renderer.setSize(width, height);composer.setSize(width, height);
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
