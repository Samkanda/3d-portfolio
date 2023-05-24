// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
// import "./style.css"

// //Scene
// const scene = new THREE.Scene({});
// scene.background = new THREE.Color( 'skyblue' );

// //Light
//     const ambientLight = new THREE.AmbientLight( 0x999999 );
//     scene.add( ambientLight );

//     const spotLight = new THREE.SpotLight( 0xffffff );
//     scene.add( spotLight );
//     spotLight.position.set( 10, 18, 14 );
//     spotLight.intensity = 1.2;
//     spotLight.angle = 135
//     spotLight.penumbra = 0.3
//     spotLight.castShadow = true
//     spotLight.shadow.mapSize.width = 1024
//     spotLight.shadow.mapSize.height = 1024
//     spotLight.shadow.camera.near = 5;
//     spotLight.shadow.camera.far = 10


// //Camera
//     const camera= new THREE.PerspectiveCamera(50,800/600)
//     camera.position.z = 120;
//     camera.position.y = 40;
//     scene.add(camera)

// //Renderer
//     const canvas = document.querySelector('.webgl');
//     const renderer = new THREE.WebGL1Renderer({canvas})
//     renderer.setSize(window.innerWidth, window.innerHeight)
//     renderer.render(scene, camera)

// //Controls
//     const controls = new OrbitControls(camera, canvas)
//     controls.enableDamping = true

// const loader = new GLTFLoader();
// let mixer;
// loader.load(
//     './medieval_fantasy_book/untitled.glb',
//     function (gltf) {
//         scene.add(gltf.scene);
//         gltf.scene.rotation.y = 0; // Rotate 180 degrees around the Y-axis
//         const model = gltf.scene
//         model.traverse(function(node) {
//             if(node.isMesh)
//             {
//                 node.castShadow = true
//                 node.receiveShadow = true;
//             }
//         })
//         mixer = new THREE.AnimationMixer(model)
//         const clips = gltf.animations;
//         const clip = THREE.AnimationClip.findByName(clips, "The Life");
//         const action = mixer.clipAction(clip);
//         action.play();
//     },
//     function (xhr) {
//       console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
//     },
//     function (error) {
//       console.error('Error loading GLTF model', error);
//     }
//   );
  
// const clock = new THREE.Clock()
// function animate() {
//     if(mixer){
//         mixer.update(clock.getDelta());
//     }
//     renderer.render(scene, camera);
//   }

//   renderer.setAnimationLoop(animate)

//   window.addEventListener('resize', function(){
//     camera.aspect = window.innerWidth/ window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//   })
