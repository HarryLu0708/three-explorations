import * as THREE from "three"

var scene, camera, renderer, mesh;

init();

console.log(camera.position);
console.log(mesh.position);

animate();

function init(){
    camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 1000);
    camera.position.z = 500;
    camera.position.y = 500;

    scene = new THREE.Scene();

    var geometry = new THREE.BoxGeometry(20, 20, 20);
    var material = new THREE.MeshLambertMaterial({color: 0xff0000});
    var group = new THREE.Group();
    mesh = new THREE.Mesh(geometry, material);

    //mesh.rotation.z += 10;
    mesh.rotation.x += 10;
    mesh.position.z += 100;

    var mesh2 = new THREE.Mesh(geometry, material);
    scene.add(group);

    mesh2.position.z = -100;

    var axis = new THREE.AxesHelper()
    scene.add(axis);
    console.log(axis.position);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.z = 100;
    scene.add(directionalLight);

    //scene.add(mesh);
    group.add(mesh);
    group.add(mesh2);
    renderer.setClearColor(0xeeeeee); 
    document.body.appendChild(renderer.domElement);

    camera.lookAt(axis.position);

    console.log(camera.position);
    console.log(mesh.position);
}

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
