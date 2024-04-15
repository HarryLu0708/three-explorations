import * as THREE from "three";

var camera, renderer, scene;

const general_mat = new THREE.MeshStandardMaterial({
    color:0xffffff,
    roughness:0.4
});

const donut_geo = new THREE.TorusGeometry(25, 12.5);
const cube_geo = new THREE.BoxGeometry(50, 50, 50);
const sphere_geo = new THREE.SphereGeometry(25);

function init(){
    camera = new THREE.PerspectiveCamera(
        75, 
        window.innerWidth/window.innerHeight, 
        1, 
        1000
    );
    camera.position.z = 200;
    camera.position.x = 150;

    scene = new THREE.Scene();

    scene.add(camera);
    scene.add(new THREE.AxesHelper(100));

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}

function generate(){
    var cube = new THREE.Mesh(cube_geo, general_mat);
    var sphere = new THREE.Mesh(sphere_geo, general_mat);
    var donut = new THREE.Mesh(donut_geo, general_mat);

    scene.add(cube);
    scene.add(sphere);
    scene.add(donut);

    cube.position.x = 100;
    donut.position.x = -100;
}

function dir_light_setup(){
    const directionalLight = new THREE.DirectionalLight(0x00fffc, 1);
    scene.add(directionalLight);
    directionalLight.position.set(0,0,500);
}

function ambient_light_setup(){
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);
}

function hem_light_setup(){
    const hemisphereLight = new THREE.HemisphereLight(0xff0000, 0x0000ff, 0.9);
    scene.add(hemisphereLight);

    const hemisphereLightHelper = new THREE.HemisphereLightHelper(hemisphereLight, 20);
    scene.add(hemisphereLightHelper);
}

function point_light_setup(){
    const pointLight = new THREE.PointLight(0xff9000, 1.5);
    scene.add(pointLight);
    pointLight.position.set(100,0,100);

    const pointLightHelper = new THREE.PointLightHelper(pointLight, 20);
    scene.add(pointLightHelper);
}

function rect_light_setup(){
    const rectAreaLight = new THREE.RectAreaLight(0x4e00ff, 6, 100, 100);
    scene.add(rectAreaLight);
}

function spot_light_setup(){
    const spotLight = new THREE.SpotLight(0x78ff00, 4.5, 10, Math.PI * 0.1, 0.25, 1);
    spotLight.position.set(0, 20, 30);
    scene.add(spotLight);

    const spotLightHelper = new THREE.SpotLightHelper(spotLight);
    scene.add(spotLightHelper);
}

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

init();
generate();
hem_light_setup();
point_light_setup();
rect_light_setup();
spot_light_setup();
animate();