import * as THREE from "three";

var camera, renderer, scene;

init();
generate_scene();
animate();

function init(){
    camera = new THREE.PerspectiveCamera(
        75, 
        window.innerWidth/window.innerHeight, 
        1, 
        100
    );
    camera.position.z = 10;
    scene = new THREE.Scene();

    scene.add(camera);
    scene.add(new THREE.AxesHelper(5));

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

function generate_scene(){
    var geo_sphere = new THREE.SphereGeometry(5);
}
