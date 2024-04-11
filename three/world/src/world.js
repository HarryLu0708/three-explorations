import * as THREE from "three";

var camera, scene, renderer;
var geometry, material, mesh;

init();
animate();

console.log(camera.position);
console.log(mesh.position);

function init() {
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 100;

    scene = new THREE.Scene();

    geometry = new THREE.IcosahedronGeometry(50, 0);
    material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true
    });

    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    renderer = new THREE.WebGLRenderer(); // 修改这里
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);
}

function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.005; // 修改这里，使用固定增量而不是基于时间的旋转
    mesh.rotation.y += 0.01;  // 修改这里
    renderer.render(scene, camera);
}




