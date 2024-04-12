import * as THREE from "three"

var scene, camera, renderer, axes;
const w = 30;


init();
animate();


function init(){
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 1, 1000);
    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setClearColor(0x66ffff, 0);

    light_design();
    aid_design();
    generate_scene(w);

    camera.position.z += 70;
    //camera.rotation.x -= Math.PI * 0.1;
    camera.position.y += 50;
    camera.position.x += 70;
    camera.rotation.y += Math.PI * 0.1;

    console.log(axes.position);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

function aid_design(){
    axes = new THREE.AxesHelper(20);
    scene.add(axes);
}

function light_design(){
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(100,100,-100);
    scene.add(directionalLight);
}

function generate_scene(w){
    var test_mat = new THREE.MeshLambertMaterial({overdraw:true,color:0x009999});
    for(var i=0; i<w; i++){
        for(var j=0; j<w; j++){
            var prob = Math.random() * 100;
            var h = Math.random() * 20;
            if(prob>75 && h>10){
                var test_geo = new THREE.BoxGeometry(2,h,2);
                var test_mesh = new THREE.Mesh(test_geo, test_mat);
                test_mesh.position.set(i*2, ((h)/2), -1*j*2);
                scene.add(test_mesh);
            }
        }
    }
    generate_floor(w);
}

function generate_floor(w){
    var floor_mat = new THREE.MeshBasicMaterial({color:0x003333, side:THREE.DoubleSide});
    var plane = new THREE.PlaneGeometry(w*2,w*2);
    var floor = new THREE.Mesh(plane, floor_mat); 
    
    floor.rotation.x = -Math.PI * 0.5;
    //floor.position.z -= w * 2;
    //floor.position.y -= -0.5;
    
    floor.position.z = -w+0.5;
    floor.position.x = w;
    scene.add(floor);
}




