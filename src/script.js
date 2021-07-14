import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'dat.gui';
import * as images from './images.js';
import data from './data.js';
const loader = new THREE.TextureLoader();

const tapeCount = 55;

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
if (tapeNum == null) tapeNum = 1;
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

const updateTexture = () => {
  document.getElementById("tapeName").text = data[tapeNum-1].title;
  document.getElementById("tapeName").href = data[tapeNum-1].source;
  materials = [
    new THREE.MeshBasicMaterial({ map: loader.load(images["spine" + tapeNum])}),
    new THREE.MeshBasicMaterial({ map: loader.load(images["tape"])}),
    new THREE.MeshBasicMaterial({ map: loader.load(images["top" + tapeNum])}),
    new THREE.MeshBasicMaterial({ map: loader.load(images["bottom" + tapeNum])}),
    new THREE.MeshBasicMaterial({ map: loader.load(images["back" + tapeNum])}),
    new THREE.MeshBasicMaterial({ map: loader.load(images["front" + tapeNum])}),
  ]
  box.material = materials;
  window.history.pushState(tapeNum, 'Title', `/beautifulvhs/?tape=${tapeNum}`);
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
  materials = [
    new THREE.MeshBasicMaterial({ map: loader.load(images["spine" + tapeNum])}),
    new THREE.MeshBasicMaterial({ map: loader.load(images["tape"])}),
    new THREE.MeshBasicMaterial({ map: loader.load(images["top" + tapeNum])}),
    new THREE.MeshBasicMaterial({ map: loader.load(images["bottom" + tapeNum])}),
    new THREE.MeshBasicMaterial({ map: loader.load(images["back" + tapeNum])}),
    new THREE.MeshBasicMaterial({ map: loader.load(images["front" + tapeNum])}),
  ]
  box.material = materials;
}

// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Objects
//const geometry = new THREE.TorusGeometry( .7, .2, 16, 100 );
const geometry = new THREE.BoxGeometry( 10.2, 18.7, 2.5 );

// Materials
//const material = new THREE.MeshBasicMaterial({ map: texture })
let materials = [
  new THREE.MeshBasicMaterial({ map: loader.load(images["spine" + tapeNum])}),
  new THREE.MeshBasicMaterial({ map: loader.load(images["tape"])}),
  new THREE.MeshBasicMaterial({ map: loader.load(images["top" + tapeNum])}),
  new THREE.MeshBasicMaterial({ map: loader.load(images["bottom" + tapeNum])}),
  new THREE.MeshBasicMaterial({ map: loader.load(images["back" + tapeNum])}),
  new THREE.MeshBasicMaterial({ map: loader.load(images["front" + tapeNum])}),
]

// Mesh
let box = new THREE.Mesh(geometry,materials)
scene.add(box)

// Lights

const pointLight = new THREE.PointLight(0xffffff, 0.1)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
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

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 30
scene.add(camera)

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */

const clock = new THREE.Clock()

const tick = () =>
{

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

tick()
