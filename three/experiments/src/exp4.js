import * as THREE from "three";
import GUI from "lil-gui";

var camera, renderer, scene;
var cube;
var cursor = {x:0,y:0};
const size = {width:window.innerWidth,height:window.innerHeight};

const gui = new GUI();
const material = new THREE.MeshStandardMaterial();
material.metalness = 0.45;
material.roughness = 0.65;

gui.add(material, 'metalness').min(0).max(1).step(0.0001);
gui.add(material, 'roughness').min(0).max(1).step(0.0001);

init();
animate();

window.addEventListener("mousemove", (event)=>{
    cursor.x = event.clientX / size.width - 0.5;
    cursor.y = event.clientY / size.height - 0.5;
});

function init(){
    camera = new THREE.PerspectiveCamera(
        75, 
        window.innerWidth/window.innerHeight, 
        1, 
        1000
    );
    camera.position.z = 200;
    scene = new THREE.Scene();


    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);
    scene.add(camera);
    scene.add(new THREE.AxesHelper(100));
    
    cube = new THREE.Mesh(
        new THREE.BoxGeometry(50,50,50),
        material
    );

    scene.add(cube);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}

function animate(){
    requestAnimationFrame(animate);
    camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 200;
    camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 200;
    camera.position.y = (cursor.y * 200);
    camera.lookAt(cube.position);
    renderer.render(scene, camera);
}