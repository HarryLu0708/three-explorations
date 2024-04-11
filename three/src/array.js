import * as THREE from "three"

var scene, material, camera, renderer;
var objects = []; 

init();
generate();
animate();

function init(){
    scene = new THREE.Scene();
    material = new THREE.MeshBasicMaterial({color:0xff0000});
    camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 1, 100)
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    renderer = new THREE.WebGLRenderer(); // 修改这里
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xeeeeee); 
    document.body.appendChild(renderer.domElement);
}

function generate(){
    var geometry = new THREE.TorusGeometry(20);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 0, 0);
    scene.add(mesh);
    for(var i=0; i<5; i++){
        for(var j=0; j<8; j++){
            var geometry = new THREE.TorusGeometry(10);
            var mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(i*20, j*20, 0);
            scene.add(mesh);
        }
    }
}

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}