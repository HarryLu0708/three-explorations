import * as THREE from "three"

var camera, scene, renderer;
var geometry, material, mesh;

init();
animate();

function init() {
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 500;

    scene = new THREE.Scene();

    var image = new THREE.TextureLoader().load("./land_ocean_ice_cloud_2048.jpg",function(texture) {
        console.log("Texture loaded successfully.");
    });

    geometry = new THREE.SphereGeometry(280, 20, 20);
    material = new THREE.MeshBasicMaterial({map:image});
    //material = new THREE.MeshBasicMaterial({ color: 0xff0000 }); 
    mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = 30 * Math.PI/180;
    console.log(mesh.position);
    scene.add(mesh);
    console.log(camera.position);
    camera.lookAt(mesh.position); 
    renderer = new THREE.WebGLRenderer(); // 修改这里
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xeeeeee); 
    document.body.appendChild(renderer.domElement);
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}


