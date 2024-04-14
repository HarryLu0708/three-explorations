import * as THREE from "three";
//import typefaceFont from 'three/examples/fonts/helvetiker_regular.typeface.json'
import { TextGeometry } from "three/examples/jsm/Addons.js";
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'

var camera, renderer, scene;
var matcap, text, mat;

init();

//Online_Market_Regular.json
const fontLoader = new FontLoader();

var cursor = {x:0,y:0};
const size = {width:window.innerWidth,height:window.innerHeight};

window.addEventListener("mousemove", (event)=>{
    cursor.x = event.clientX / size.width - 0.5;
    cursor.y = event.clientY / size.height - 0.5;
});

fontLoader.load(
    './Bella_Regular.json',
    (font)=>{
        console.log("loaded");
        const textGeo = new TextGeometry(
            "Hello World",
            {
                font:font,
                size:50,
                height:25,
                curveSegments:20,
                bevelEnabled:true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 5
            }
        );

        const textureLoader = new THREE.TextureLoader();
        matcap = textureLoader.load("./mat.png")
        matcap.colorSpace = THREE.SRGBColorSpace;

        mat = new THREE.MeshMatcapMaterial({matcap:matcap});
        text = new THREE.Mesh(textGeo, mat);
        scene.add(text);

        textGeo.computeBoundingBox();
        console.log(textGeo.boundingBox);

        textGeo.center();
    }
);

const donutGeo = new THREE.TorusGeometry(30, 20, 20, 45);
//const donutMat = new THREE.MeshMatcapMaterial({matcap:matcap});

for(let i=0; i<100; i++){    
    const donut = new THREE.Mesh(donutGeo, mat);
    scene.add(donut);

    donut.rotation.x = Math.random() * Math.PI;
    donut.rotation.y = Math.random() * Math.PI;

    donut.position.x = (Math.random() - 0.5) * 400;
    donut.position.y = (Math.random() - 0.5) * 400;
    donut.position.z = (Math.random() - 0.5) * 400;

    const scale = Math.random();
    donut.scale.set(scale, scale, scale);
}

function init(){
    camera = new THREE.PerspectiveCamera(
        75, 
        window.innerWidth/window.innerHeight, 
        1, 
        1000
    );
    camera.position.z = 1000;
    //camera.position.y = 200;
    scene = new THREE.Scene();

    scene.add(camera);
    scene.add(new THREE.AxesHelper(100));

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}

function animate(){
    requestAnimationFrame(animate);
    camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 200;
    camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 200;
    camera.position.y = (cursor.y * 200);
    camera.lookAt(text.position);
    renderer.render(scene, camera);
}

animate();