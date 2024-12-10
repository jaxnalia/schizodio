<script lang="ts">
    import { onMount } from "svelte";
    import * as THREE from "three";
    import { OrbitControls } from "three/addons/controls/OrbitControls.js";
    import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
    import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
    import { GlitchPass } from "three/examples/jsm/postprocessing/GlitchPass.js";
    import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
    import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
    import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

    export let goWild: boolean = false;

    let width: number;
    let height: number;

    let container: HTMLDivElement;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let composer: EffectComposer;
    let glitchPass: GlitchPass;

    let object: any;

    const GLB_PATH = "./static/models/logo.glb";
    export let wildGlitch = false;
    const params = {
				threshold: 4,
				strength: 2,
				radius: 0,
				exposure: 3
			};

    onMount(() => {
        // Get initial dimensions from container
        width = container.clientWidth;
        height = container.clientHeight;

        init();
        animate();

        // Add window resize listener
        window.addEventListener("resize", onWindowResize);

        return () => {
            window.removeEventListener("resize", onWindowResize);
            scene?.clear();
            renderer?.dispose();
        };
    });

    $: if (wildGlitch) {
        glitchPass.goWild = true;
    }

    async function init() {
        // Scene setup
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 5;
        camera.position.y = -3;

        // Renderer setup
        renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });
        renderer.setSize(width, height);
        renderer.toneMapping = THREE.ReinhardToneMapping;
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(1, 1, 1);
        scene.add(directionalLight);

        // Logo
        const loader = new GLTFLoader();
        loader.load(
            GLB_PATH,
            function (gltf) {
                const model = gltf.scene;
                model.scale.set(0.5, 0.5, 0.5);
                model.position.set(0, 20, -0.1); // Position at top of viewport
                // Apply random material to each mesh in the model
                model.traverse((child) => {
                    if (child instanceof THREE.Mesh) {
                        child.material = new THREE.MeshPhongMaterial({
                            color: 0xffffff * Math.random(),
                            flatShading: true,
                            depthTest: false, // Disable depth testing
                        });
                        child.renderOrder = 999; // Ensure it renders last (on top)
                    }
                });
                scene.add(model);

                // Add floating animation
                const floatAnimation = () => {
                    const time = Date.now() * 0.001; // Convert to seconds
                    model.position.y = Math.sin(time) * 0.2; // Gentle floating motion
                    requestAnimationFrame(floatAnimation);
                };
                floatAnimation();
            },
            undefined,
            function (error) {
                console.error("Error loading model:", error);
            },
        );

        // Random objects
        object = new THREE.Object3D();
        scene.add(object);
        const geometry = new THREE.SphereGeometry(1, 1, 1);
        for (let i = 0; i < 100; i++) {
            const material = new THREE.MeshPhongMaterial({
                color: 0xffffff * Math.random(),
                flatShading: true,
            });

            const mesh = new THREE.Mesh(geometry, material);
            mesh.position
                .set(
                    Math.random() - 0.5,
                    Math.random() - 0.5,
                    Math.random() - 0.5,
                )
                .normalize();
            mesh.position.multiplyScalar(Math.random() * 400);
            mesh.rotation.set(
                Math.random() * 6,
                Math.random() * 6,
                Math.random() * 6,
            );
            mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 50;
            object.add(mesh);
        }

        // Post processing
        composer = new EffectComposer(renderer);
        
        const bloomPass = new UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 );
        bloomPass.threshold = params.threshold;
		bloomPass.strength = params.strength;
		bloomPass.radius = params.radius;
        composer.addPass(bloomPass)

        const outputPass = new OutputPass();
        composer.addPass(outputPass)

        const renderPass = new RenderPass(scene, camera);
        composer.addPass(renderPass);

        glitchPass = new GlitchPass();
        $: if(glitchPass){
            glitchPass.goWild = wildGlitch
        }
        composer.addPass(glitchPass);
    }

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        if (object) {
            object.rotation.y += 0.005;
        }
        composer.render();
    }

    // Handle window resize
    function onWindowResize() {
        // Get new dimensions from container
        width = container.clientWidth;
        height = container.clientHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
        composer.setSize(width, height);
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
