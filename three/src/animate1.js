import * as THREE from "three"

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 0.5, 0.5, 0.5 );
const material = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );

var cubes0 = [];
var cubes1 = [];
var cubes2 = [];

const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
directionalLight.position.z = 3
scene.add(directionalLight)

for (var i=-1; i<2; i++){
    for(var j=-1; j<2; j++){
        for(var k=0; k<3; k++){
            const cube = new THREE.Mesh( geometry, material );
            cube.position.set(i, j, k);
            scene.add( cube );
            
            if(k==0)cubes0.push(cube);
            else if(k==1)cubes1.push(cube);
            else cubes2.push(cube);
        }
    }
}
camera.position.z = 5;
function animate() {
	requestAnimationFrame( animate );
    cubes0.forEach(cube=>{cube.rotation.x+=0.01;})
    cubes1.forEach(cube=>{cube.rotation.y+=0.01;})
    cubes2.forEach(cube=>{cube.rotation.z+=0.01;})
	renderer.render( scene, camera );
}
animate();