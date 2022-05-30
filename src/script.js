//mimport * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import * as images from './images.js';
// import data from './data.js';
const loader = new THREE.TextureLoader();

const tapeCount = data.length;
const basePath = (window.location.hostname == 'lukew3.github.io') ? '/beautifulvhs/' : '/';

// Populate select field
let selectElem = document.getElementById("selectTape");
for (let i = 1; i < tapeCount+1; i++){
  let element = document.createElement("option");
  element.value = i;
  element.innerText = "Tape " + i;
  selectElem.append(element);
}

const params = new URLSearchParams(window.location.search);
let tapeNum = params.get("tape");
if (tapeNum == null) {
  tapeNum = Math.floor((Math.random() * tapeCount) + 1);
  window.history.pushState(tapeNum, 'Title', `${basePath}?tape=${tapeNum}`);
}
document.querySelector("#selectTape").value = tapeNum;
document.getElementById("tapeName").text = data[tapeNum-1].title;
document.getElementById("tapeName").href = data[tapeNum-1].source;

document.querySelector('#selectTape').addEventListener("change", function() {
  tapeNum = this.value;
  updateTexture();
});

document.getElementById("selectRandom").addEventListener('click', function() {
  tapeNum = Math.floor((Math.random() * tapeCount) + 1);
  document.querySelector("#selectTape").value = tapeNum;
  updateTexture();
})

const updateTexture = (pushState=true) => {
  document.getElementById("tapeName").text = data[tapeNum-1].title;
  document.getElementById("tapeName").href = data[tapeNum-1].source;
  setMaterials();
  box.material = materials;
  if (pushState === true)
    window.history.pushState(tapeNum, 'Title', `${basePath}?tape=${tapeNum}`);
}

window.onpopstate = (e) => {
  if (e.state) {
    tapeNum = e.state;
  } else if (params.get("tape") != null) {
    tapeNum = params.get("tape");
  } else {
    tapeNum = 1;
  }
  document.querySelector("#selectTape").value = tapeNum;
  updateTexture(false);
}

function setMaterials() {
  materials = [
    new THREE.MeshBasicMaterial({ map: loader.load(`./textures/${tapeNum}/spine.jpg`)}),
    new THREE.MeshBasicMaterial({ map: loader.load('./textures/tape.png')}),
    new THREE.MeshBasicMaterial({ map: loader.load(`./textures/${tapeNum}/top.jpg`)}),
    new THREE.MeshBasicMaterial({ map: loader.load(`./textures/${tapeNum}/bottom.jpg`)}),
    new THREE.MeshBasicMaterial({ map: loader.load(`./textures/${tapeNum}/back.jpg`)}),
    new THREE.MeshBasicMaterial({ map: loader.load(`./textures/${tapeNum}/front.jpg`)}),
  ]
}

let canvas, scene, geometry, materials, box, pointLight, sizes, camera, renderer;

function init() {
  // Canvas
  canvas = document.querySelector('canvas.webgl')
  scene = new THREE.Scene()
  geometry = new THREE.BoxGeometry( 10.2, 18.7, 2.5 );

  // Materials
  setMaterials();

  // Mesh
  box = new THREE.Mesh(geometry,materials)
  scene.add(box)

  // Lights
  pointLight = new THREE.PointLight(0xffffff, 0.1)
  pointLight.position.set(2, 3, 4);
  scene.add(pointLight)

  // Sizes
  sizes = {
      width: window.innerWidth,
      height: window.innerHeight
  }

  window.addEventListener('resize', () => {
      // Update sizes
      sizes.width = window.innerWidth
      sizes.height = window.innerHeight

      // Update camera
      camera.aspect = sizes.width / sizes.height
      camera.updateProjectionMatrix()

      // Update renderer
      renderer.setSize(sizes.width, sizes.height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  })

  // Base camera
  camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
  camera.position.set(0,0,30);
  scene.add(camera)

  // Controls
  /*
  const controls = new THREE.OrbitControls(camera, canvas)
  controls.enableDamping = true
  controls.dampingFactor = 0.05;
  controls.screenSpacePanning = false;
  controls.minDistance = 100;
  controls.maxDistance = 500;
  controls.maxPolarAngle = Math.PI / 2;
  controls.addEventListener( 'change', ()=>{console.log("CONTROLS UPDATED")} );
  */

  // Renderer
  renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: canvas
  })
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
}

// Animate
const clock = new THREE.Clock()

const tick = () => {
  const elapsedTime = clock.getElapsedTime()

  // Update objects
  box.rotation.y = .5 * elapsedTime

  // Update Orbital Controls
  // controls.update()

  // Render
  renderer.render(scene, camera)

  // Call tick again on the next frame
  window.requestAnimationFrame(tick)
}

init()
tick()
