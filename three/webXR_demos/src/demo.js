import * as THREE from "three";
import { ARButton } from "three/examples/jsm/Addons.js";

var camera, renderer, scene;

console.log(ARButton);
init();
generate();
animate();

function init(){
    camera = new THREE.PerspectiveCamera(
        75, 
        window.innerWidth/window.innerHeight, 
        1, 
        1000
    );
    camera.position.z = 5;
    scene = new THREE.Scene();

    scene.add(camera);
    scene.add(new THREE.AxesHelper(5));

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.xr.enabled = true;
    document.body.appendChild(renderer.domElement);
    const btn = ARButton.createButton(renderer);
    document.body.appendChild(btn);
}

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

function generate(){
    var geo = new THREE.BoxGeometry(2,2,2);
    var mat = new THREE.MeshBasicMaterial({color:0xffff00});
    var mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);
    mesh.rotation.y = Math.PI / 8;
    mesh.rotation.x = Math.PI / 8;
}