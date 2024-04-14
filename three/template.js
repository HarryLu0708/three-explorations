import * as THREE from "three";

var camera, renderer, scene;

init();
animate();

function init(){
    camera = new THREE.PerspectiveCamera(
        75, 
        window.innerWidth/window.innerHeight, 
        1, 
        1000
    );
    camera.position.z = 200;
    scene = new THREE.Scene();

    scene.add(camera);
    scene.add(new THREE.AxesHelper(100));

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}