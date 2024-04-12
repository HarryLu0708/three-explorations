import * as THREE from "three"

var scene, camera, renderer; 
var sun, mercury, venus, earth, moon, mars, jupiter, saturn, uranus, neptune;
const clock = new THREE.Clock();

init();
aid_design();
setup();
animate();

function init(){
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 1, 2000);
    camera.position.z = 500;
    camera.position.y = 700;
    camera.rotation.x -= Math.PI * 0.25;
    renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    scene.add(camera);
    document.body.appendChild(renderer.domElement);
}

function animate(){
    requestAnimationFrame(animate);

    planet_movement(earth, sun, 200, clock.getElapsedTime());
    planet_movement(moon, earth, 50, clock.getElapsedTime() * 2);
    planet_movement(mercury, sun, 75, clock.getElapsedTime() * 2.5);
    planet_movement(venus, sun, 100, clock.getElapsedTime() * 2);
    planet_movement(mars, sun, 300, clock.getElapsedTime() * 2.12);
    renderer.render(scene, camera);
}

function planet_movement(obj, center, r, angle_spd){
    obj.position.x = center.position.x + r * Math.cos(angle_spd);
    obj.position.z = center.position.z + r * Math.sin(angle_spd);
}

function aid_design(){
    var axis = new THREE.AxesHelper(100);
    scene.add(axis);
}

function generate_planet(r, color){
    return new THREE.Mesh(
        new THREE.SphereGeometry(r),
        new THREE.MeshBasicMaterial({color:color})
    );
}

function setup(){
    sun = generate_planet(30, 0xffff00);
    mercury = generate_planet(5, 0xff00ff);
    venus = generate_planet(10, 0x78ff00);
    earth = generate_planet(10, 0xff0000);
    moon = generate_planet(5, 0xffffff);
    mars = generate_planet(10, 0xff0f0f);

    scene.add(mercury);
    mercury.position.x = -75;

    scene.add(venus);
    venus.position.x = -100;

    scene.add(earth);
    earth.position.x = -200;
    
    scene.add(moon);
    moon.position.x = -250;
    
    scene.add(mars);
    mars.position.x = -300;

    scene.add(sun);
}
