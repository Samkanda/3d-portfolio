import { useState, useRef, useEffect } from 'react'
import './App.css'
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

import { BotBar } from './components/BotBar';
function App() {
const canvasRef = useRef(null);
const [cameraState, setCamera] = useState()
useEffect(() => {
//Scene
  const scene = new THREE.Scene({});
  scene.background = new THREE.Color( 'skyblue' );

var rgbeLoader = new RGBELoader();

// rgbeLoader.load("./lilienstein_4k.hdr", envMap => {
//   scene.environment = envMap;
//   envMap.mapping = THREE.EquirectangularReflectionMapping;

//   // scene.background = envMap;
//   scene.environment = envMap;
// }, undefined, error => {
//   console.error("Failed to load envMap.", error);
// });

//Light
  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
  hemiLight.position.set(20, 20, 10);
  scene.add(hemiLight);
  const light = new THREE.DirectionalLight(0xFFFFFF, 1.3)
  light.position.set(-10, 20, 6);
  light.lookAt(0,0,0)
  light.castShadow = true;
  light.receiveShadow = true;
  light.shadow.camera.top = 200;
  light.shadow.camera.bottom = -200;
  light.shadow.camera.left = - 200;
  light.shadow.camera.right = 200;
  light.shadow.camera.near = 0.1;
  light.shadow.camera.far = 500;
  scene.add(light);
  scene.add(light.target);

//Camera
    const camera=  new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 0.01, 1000 );
    setCamera(camera)
    camera.position.z = 120;
    camera.position.y = 40;
    scene.add(camera)

//Renderer
    const canvas = document.querySelector('.webgl');
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setSize(window.innerWidth , window.innerHeight)
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
    renderer.gammaOutput = true;
    renderer.gammaFactor = 2.2;
    renderer.render(scene, camera)

    
//Controls
    const controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true
    
    const loader = new GLTFLoader();
let mixer;
loader.load(
    './medieval_fantasy_book/untitled.glb',
    function (gltf) {
        scene.add(gltf.scene);
        console.log(gltf)
        gltf.scene.rotation.y = 0; // Rotate 180 degrees around the Y-axis
        const model = gltf.scene
        model.traverse(function(node) {
            if(node.isMesh)
            {
                node.castShadow = true
                node.receiveShadow = true;
            }
        })
        mixer = new THREE.AnimationMixer(model)
        const clips = gltf.animations;
        const clip = THREE.AnimationClip.findByName(clips, "The Life");
        const action = mixer.clipAction(clip);
        action.play();
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
    },
    function (error) {
      console.error('Error loading GLTF model', error);
    }
  );
  
const clock = new THREE.Clock()
function animate() {
    if(mixer){
        mixer.update(clock.getDelta());
    }
    renderer.render(scene, camera);
  }

  renderer.setAnimationLoop(animate)

  window.addEventListener('resize', function(){
    camera.aspect = window.innerWidth/ window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  })

}, []);

  return (
    <> <canvas  id= "stuff" className="webgl" ref={canvasRef} />; 
    <BotBar camera = {cameraState}/>
    </>
  )
}

export default App
