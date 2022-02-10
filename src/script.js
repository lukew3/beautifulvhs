const THREE = require('three');
//const images = require('./images.js');
const images = {};
const { data } = require('./data.js');
const loader = new THREE.TextureLoader();

function $(passedId) { return document.getElementById(passedId); }
let box;
//const tapeTextureImage = require('./textures/tape.png');
//let tapeTexture = new THREE.TextureLoader().load(tapeTextureImage);
const params = new URLSearchParams(window.location.search);
let tapeNum = params.get("tape");
const rootPath = '/';
const tapeCount = 55;

//const rootPath = '/beatifulvhs/'; // for gh-pages

let spineTextureElement = $('spineTexture');
let tapeTextureElement = $('tapeTexture');
let topTextureElement = $('topTexture');
let bottomTextureElement = $('bottomTexture');
let backTextureElement = $('backTexture');
let frontTextureElement = $('frontTexture');

let spineTexture = new THREE.Texture(spineTextureElement);
//spineTexture.needsUpdate = true;
let tapeTexture = new THREE.Texture(tapeTextureElement);
//tapeTexture.needsUpdate = true;
let topTexture = new THREE.Texture(topTextureElement);
//topTexture.needsUpdate = true;
let bottomTexture = new THREE.Texture(bottomTextureElement);
//bottomTexture.needsUpdate = true;
let backTexture = new THREE.Texture(backTextureElement);
//backTexture.needsUpdate = true;
let frontTexture = new THREE.Texture(frontTextureElement);
//frontTexture.needsUpdate = true;

// Populate select field
let selectElem = document.getElementById("selectTape");
for (let i = 1; i < tapeCount+1; i++){
  let element = document.createElement("option");
  element.value = i;
  element.innerText = "Tape " + i;
  selectElem.append(element);
}

if (tapeNum == null) {
  tapeNum = Math.floor((Math.random() * tapeCount) + 1);
  window.history.pushState(tapeNum, 'Title', `${rootPath}?tape=${tapeNum}`);
}
document.querySelector("#selectTape").value = tapeNum;
document.getElementById("tapeName").text = data[tapeNum-1].title;
document.getElementById("tapeName").href = data[tapeNum-1].source;

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Objects
//const geometry = new THREE.TorusGeometry( .7, .2, 16, 100 );
const geometry = new THREE.BoxGeometry( 10.2, 18.7, 2.5 );

// Materials
//const material = new THREE.MeshBasicMaterial({ map: texture })
console.log('before');
let materials = [
    new THREE.MeshBasicMaterial({ map: spineTexture}),
    new THREE.MeshBasicMaterial({ map: tapeTexture}),
    new THREE.MeshBasicMaterial({ map: topTexture}),
    new THREE.MeshBasicMaterial({ map: bottomTexture}),
    new THREE.MeshBasicMaterial({ map: backTexture}),
    new THREE.MeshBasicMaterial({ map: frontTexture}),
]
console.log('after');
	
// Mesh
console.log('before');
box = new THREE.Mesh(geometry,materials)
scene.add(box)
console.log('after');

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
console.log("end");
tick()

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
  console.log("updating texture");
  document.getElementById("tapeName").text = data[tapeNum-1].title;
  document.getElementById("tapeName").href = data[tapeNum-1].source;
  materials = [
    new THREE.MeshBasicMaterial({ map: spineTexture}),
    new THREE.MeshBasicMaterial({ map: tapeTexture}),
    new THREE.MeshBasicMaterial({ map: topTexture}),
    new THREE.MeshBasicMaterial({ map: bottomTexture}),
    new THREE.MeshBasicMaterial({ map: backTexture}),
    new THREE.MeshBasicMaterial({ map: frontTexture}),
	/*
    new THREE.MeshBasicMaterial({ map: loader.load(await fetch(`/textures/${tapeNum}/top.jpg`))}),
    new THREE.MeshBasicMaterial({ map: loader.load(await fetch(`/textures/${tapeNum}/bottom.jpg`))}),
    new THREE.MeshBasicMaterial({ map: loader.load(await fetch(`/textures/${tapeNum}/back.jpg`))}),
    new THREE.MeshBasicMaterial({ map: loader.load(await fetch(`/textures/${tapeNum}/front.jpg`))}),
    */
  ]
  console.log("Made it past getting textures");
  box.material = materials;
  console.log("p2");
  if (pushState === true)
    //window.history.pushState(tapeNum, 'Title', `/beautifulvhs/?tape=${tapeNum}`);
    window.history.pushState(tapeNum, 'Title', `${rootPath}?tape=${tapeNum}`);
  console.log("p3");
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

