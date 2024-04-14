import * as THREE from "three"

var camera, scene, renderer;
var cube; 

const size = {width:window.innerWidth, height:window.innerWidth};
const cursor = {x:0, y:0};

init();
axes();
generate_objs();
animate();

window.addEventListener("mousemove", (event)=>{
    //console.log(event.clientX, event.clientY);
    cursor.x = event.clientX / size.width - 0.5;
    cursor.y = event.clientY / size.height - 0.5;
    //console.log(cursor.x, cursor.y);
});

function init(){
    camera = new THREE.PerspectiveCamera(75, size.width/size.height, 1, 1000);
    scene = new THREE.Scene();
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(size.width, size.height);

    scene.add(camera);
    camera.position.z = 500;
    
    document.body.appendChild(renderer.domElement);
}

function animate(){
    requestAnimationFrame(animate);

    //update camera
    camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 200;
    camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 200;
    camera.position.y = (cursor.y * 200);
    camera.lookAt(cube.position);

    renderer.render(scene, camera);
}

function generate_objs(){
    cube = new THREE.Mesh(
        new THREE.BoxGeometry(30, 30, 30), 
        new THREE.MeshBasicMaterial({color:0xff0000})
    );
    scene.add(cube);
}

function axes(){
    var axis = new THREE.AxesHelper(100);
    scene.add(axis);
}

