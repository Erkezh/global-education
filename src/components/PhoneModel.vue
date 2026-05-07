<template>
  <div class="relative w-full h-full" ref="container">
    <div v-if="!isLoaded && !errorMessage" class="absolute inset-0 flex items-center justify-center">
      <div class="w-8 h-8 border-4 border-gray-200 border-t-green-500 rounded-full animate-spin"></div>
    </div>
    <div v-if="errorMessage" class="absolute inset-0 flex items-center justify-center text-red-500 font-bold bg-white/90 z-50 p-8 text-center border border-red-200 rounded-2xl">
      Error loading 3D Model: {{ errorMessage }}
    </div>
    <canvas ref="canvas" class="w-full h-full block touch-none transition-opacity duration-1000" :class="isLoaded ? 'opacity-100' : 'opacity-0'"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, shallowRef } from 'vue';
import * as THREE from 'three';
import { GLTFLoader } from 'three-stdlib';
import { DRACOLoader } from 'three-stdlib';
import { HorizontalBlurShader, VerticalBlurShader } from 'three-stdlib';
import { gsap } from 'gsap';
import iphoneModelUrl from '@/assets/iphone17promax.glb?url';
import screen1Url from '@/assets/screens/screen_1.png';
import screen2Url from '@/assets/screens/screen_2.png';

const container = ref<HTMLElement | null>(null);
const canvas = ref<HTMLCanvasElement | null>(null);
const errorMessage = ref('');
const isLoaded = ref(false);

const renderer = shallowRef<THREE.WebGLRenderer | null>(null);
const camera = shallowRef<THREE.PerspectiveCamera | null>(null);
const scene = shallowRef<THREE.Scene | null>(null);
const modelGroup = shallowRef<THREE.Group | null>(null);

// Shadow references
const shadowGroup = shallowRef<THREE.Group | null>(null);
const renderTarget = shallowRef<THREE.WebGLRenderTarget | null>(null);
const renderTargetBlur = shallowRef<THREE.WebGLRenderTarget | null>(null);
const shadowCamera = shallowRef<THREE.OrthographicCamera | null>(null);
const depthMaterial = shallowRef<THREE.MeshDepthMaterial | null>(null);
const horizontalBlurMaterial = shallowRef<THREE.ShaderMaterial | null>(null);
const verticalBlurMaterial = shallowRef<THREE.ShaderMaterial | null>(null);
const plane = shallowRef<THREE.Mesh | null>(null);
const blurPlane = shallowRef<THREE.Mesh | null>(null);
const fillPlane = shallowRef<THREE.Mesh | null>(null);

const rotation = { x: 0, y: 0 };

const blurShadow = (amount: number) => {
  if (!renderer.value || !blurPlane.value || !horizontalBlurMaterial.value || !verticalBlurMaterial.value || !renderTarget.value || !renderTargetBlur.value || !shadowCamera.value) return;

  blurPlane.value.visible = true;

  // Blur horizontally
  blurPlane.value.material = horizontalBlurMaterial.value;
  (blurPlane.value.material as any).uniforms.tDiffuse.value = renderTarget.value.texture;
  horizontalBlurMaterial.value.uniforms.h.value = amount * (1 / 256);

  renderer.value.setRenderTarget(renderTargetBlur.value);
  renderer.value.render(blurPlane.value, shadowCamera.value);

  // Blur vertically
  blurPlane.value.material = verticalBlurMaterial.value;
  (blurPlane.value.material as any).uniforms.tDiffuse.value = renderTargetBlur.value.texture;
  verticalBlurMaterial.value.uniforms.v.value = amount * (1 / 256);

  renderer.value.setRenderTarget(renderTarget.value);
  renderer.value.render(blurPlane.value, shadowCamera.value);

  blurPlane.value.visible = false;
};

const renderFrame = () => {
  if (!renderer.value || !scene.value || !camera.value || !modelGroup.value) return;

  // Update rotation
  modelGroup.value.rotation.x = rotation.x;
  modelGroup.value.rotation.y = rotation.y;

  // Render the authentic portfolio ContactShadows
  if (shadowCamera.value && depthMaterial.value && renderTarget.value && shadowGroup.value) {
    const blurAmount = 5;

    const initialBackground = scene.value.background;
    scene.value.background = null;

    // Hide shadow planes to avoid rendering them into the depth map
    shadowGroup.value.visible = false;

    // Render depth of the phones
    scene.value.overrideMaterial = depthMaterial.value;
    renderer.value.setRenderTarget(renderTarget.value);
    renderer.value.render(scene.value, shadowCamera.value);
    scene.value.overrideMaterial = null;

    shadowGroup.value.visible = true;

    // Apply double blur passes just like the portfolio
    blurShadow(blurAmount);
    blurShadow(blurAmount * 0.4);

    renderer.value.setRenderTarget(null);
    scene.value.background = initialBackground;
  }

  renderer.value.render(scene.value, camera.value);
};

let resizeObserver: ResizeObserver | null = null;
let xTo: any;
let yTo: any;

const handleMouseMove = (event: MouseEvent) => {
  const { innerWidth, innerHeight } = window;
  const position = {
    x: (event.clientX - innerWidth / 2) / innerWidth,
    y: (event.clientY - innerHeight / 2) / innerHeight,
  };

  if (xTo && yTo) {
    xTo(position.y / 2);
    yTo(position.x / 2);
  }
};

onMounted(async () => {
  if (!container.value || !canvas.value) return;

  const { clientWidth, clientHeight } = container.value;

  renderer.value = new THREE.WebGLRenderer({
    canvas: canvas.value,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance',
  });

  renderer.value.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.value.setSize(clientWidth, clientHeight);
  renderer.value.outputColorSpace = THREE.SRGBColorSpace;

  camera.value = new THREE.PerspectiveCamera(36, clientWidth / clientHeight, 0.1, 100);
  camera.value.position.set(0, 0, 10);
  scene.value = new THREE.Scene();

  modelGroup.value = new THREE.Group();
  scene.value.add(modelGroup.value);

  // Setup Dynamic Shadow Environment (Authentic Portfolio implementation)
  const floorY = -1.8; // Exactly underneath the phones
  
  shadowGroup.value = new THREE.Group();
  shadowGroup.value.position.set(0, floorY, 0); 
  scene.value.add(shadowGroup.value);

  const renderTargetSize = 512;
  const planeWidth = 16;
  const planeHeight = 16;
  const cameraHeight = 10; // Large enough far-plane to capture the large 26-scale phones
  const shadowOpacity = 0.9;
  const shadowDarkness = 3;

  renderTarget.value = new THREE.WebGLRenderTarget(renderTargetSize, renderTargetSize);
  renderTarget.value.texture.generateMipmaps = false;

  renderTargetBlur.value = new THREE.WebGLRenderTarget(renderTargetSize, renderTargetSize);
  renderTargetBlur.value.texture.generateMipmaps = false;

  const planeGeometry = new THREE.PlaneGeometry(planeWidth, planeHeight);
  planeGeometry.rotateX(-Math.PI / 2); // MUST face UP to be visible!

  const planeMaterial = new THREE.MeshBasicMaterial({
    map: renderTarget.value.texture,
    opacity: shadowOpacity,
    transparent: true,
  });

  plane.value = new THREE.Mesh(planeGeometry, planeMaterial);
  shadowGroup.value.add(plane.value);

  blurPlane.value = new THREE.Mesh(planeGeometry);
  blurPlane.value.visible = false;
  shadowGroup.value.add(blurPlane.value);

  const fillMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, opacity: 0, transparent: true });
  fillPlane.value = new THREE.Mesh(planeGeometry, fillMaterial);
  shadowGroup.value.add(fillPlane.value);

  // The shadow camera is added to the scene directly so it doesn't get hidden when shadowGroup is hidden
  shadowCamera.value = new THREE.OrthographicCamera(-planeWidth / 2, planeWidth / 2, planeHeight / 2, -planeHeight / 2, 0, cameraHeight);
  shadowCamera.value.position.set(0, floorY, 0);
  shadowCamera.value.rotation.x = Math.PI / 2; // Look straight up from the floor
  scene.value.add(shadowCamera.value);

  depthMaterial.value = new THREE.MeshDepthMaterial();
  depthMaterial.value.userData.darkness = { value: shadowDarkness };
  depthMaterial.value.onBeforeCompile = (shader) => {
    shader.uniforms.darkness = depthMaterial.value!.userData.darkness;
    shader.fragmentShader = `
      uniform float darkness;
      ${shader.fragmentShader.replace(
        'gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );',
        'gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * darkness );'
      )}
    `;
  };
  depthMaterial.value.depthTest = false;
  depthMaterial.value.depthWrite = false;

  horizontalBlurMaterial.value = new THREE.ShaderMaterial(HorizontalBlurShader);
  horizontalBlurMaterial.value.depthTest = false;

  verticalBlurMaterial.value = new THREE.ShaderMaterial(VerticalBlurShader);
  verticalBlurMaterial.value.depthTest = false;

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
  const keyLight = new THREE.DirectionalLight(0xffffff, 1.1);
  const fillLight = new THREE.DirectionalLight(0xffffff, 0.8);

  fillLight.position.set(-6, 2, 2);
  keyLight.position.set(0.5, 0, 0.866);
  scene.value.add(ambientLight, keyLight, fillLight);

  xTo = gsap.quickTo(rotation, "x", { duration: 1.2, ease: "power3.out", onUpdate: renderFrame });
  yTo = gsap.quickTo(rotation, "y", { duration: 1.2, ease: "power3.out", onUpdate: renderFrame });

  const textureLoader = new THREE.TextureLoader();
  let tex1, tex2;
  try {
    tex1 = await textureLoader.loadAsync(screen1Url);
    tex2 = await textureLoader.loadAsync(screen2Url);
    
    [tex1, tex2].forEach(tex => {
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.flipY = false;
      if (renderer.value) {
        tex.anisotropy = renderer.value.capabilities.getMaxAnisotropy();
      }
      tex.generateMipmaps = true;
      tex.minFilter = THREE.LinearMipmapLinearFilter;
    });
  } catch (err: any) {
    errorMessage.value = "Failed to load textures: " + err.message;
    return;
  }

  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath('/draco/');
  const gltfLoader = new GLTFLoader();
  gltfLoader.setDRACOLoader(dracoLoader);

  gltfLoader.load(iphoneModelUrl, (gltf) => {
    gltf.scene.scale.set(26, 26, 26);
    
    gltf.scene.traverse((node: any) => {
      if (node.isMesh) {
        node.castShadow = false;
        node.receiveShadow = false;
        
        let isScreenShape = false;
        const name = node.name.toLowerCase();
        const matName = node.material?.name?.toLowerCase() || '';

        if (name.includes('screen') || matName.includes('screen')) {
          isScreenShape = true;
        } else {
          node.geometry.computeBoundingBox();
          const box = node.geometry.boundingBox;
          if (box) {
            const size = new THREE.Vector3();
            box.getSize(size);
            const aspect = size.y / size.x;
            isScreenShape = aspect > 1.9 && aspect < 2.3 && size.z < (size.x * 0.1);
          }
        }
        
        if (isScreenShape) {
          node.material = new THREE.MeshBasicMaterial({
            map: tex1,
            color: new THREE.Color(0xffffff)
          });
        } else {
          node.material = new THREE.MeshStandardMaterial({ 
            color: 0x151515,
            roughness: 0.8,
            metalness: 0.2
          });
        }
      }
    });

    const phone1 = gltf.scene;
    const phone2 = phone1.clone();

    phone2.traverse((node: any) => {
      if (node.isMesh && node.material && node.material.map === tex1) {
        node.material = new THREE.MeshBasicMaterial({
          map: tex2,
          color: new THREE.Color(0xffffff)
        });
      }
    });

    phone1.position.set(-1.1, -1.8, 0);
    phone1.rotation.y = -Math.PI / 12;
    phone2.position.set(1.1, -1.8, 0);
    phone2.rotation.y = Math.PI / 12;

    modelGroup.value!.add(phone1);
    modelGroup.value!.add(phone2);

    renderer.value!.render(scene.value!, camera.value!);

    setTimeout(() => {
      isLoaded.value = true;
      
      gsap.to(phone1.position, {
        y: -0.1,
        duration: 2.0,
        ease: "power3.out",
        onUpdate: renderFrame
      });

      gsap.to(phone2.position, {
        y: 0.2,
        duration: 2.0,
        delay: 0.3,
        ease: "power3.out",
        onUpdate: renderFrame
      });
    }, 150);

    renderFrame();
  }, undefined, (error: any) => {
    console.error(error);
    errorMessage.value = "GLTF Load Error: " + (error.message || error);
  });

  resizeObserver = new ResizeObserver(() => {
    if (!container.value || !renderer.value || !camera.value) return;
    const w = container.value.clientWidth;
    const h = container.value.clientHeight;
    renderer.value.setSize(w, h);
    camera.value.aspect = w / h;
    camera.value.updateProjectionMatrix();
    renderFrame();
  });
  resizeObserver.observe(container.value);

  window.addEventListener('mousemove', handleMouseMove);
  renderFrame();
});

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove);
  if (resizeObserver) resizeObserver.disconnect();
  
  if (renderer.value) {
    renderer.value.dispose();
  }
});
</script>
