import * as THREE from "three";
import imageSource from '../static/image.jpg';

var texture, camera, renderer, scene;

console.log(imageSource);

image_loading();

function image_loading(){
    const image = new Image();
    image.onload = () =>{
        console.log("image loaded");
        texture = new THREE.Texture(image);
        texture.needsUpdate = true;
        texture.colorSpace = THREE.SRGBColorSpace;
        //texture.magFilter = THREE.NearestFilter
        init();
        animate();
    };
    image.onerror = (event) => {
        console.error("Error loading image", image.src, event);
    };
    image.src = '../experiments/static/image.jpg';
}

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
    scene.add(
        new THREE.Mesh(
            new THREE.BoxGeometry(100,100,100),
            new THREE.MeshBasicMaterial({map:texture})
        )
    );

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

