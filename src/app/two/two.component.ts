import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as THREE from 'three';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { ServiceCurrService } from '../service-curr.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  code = [];
  currencyTab: any;
  curr1Name: string;
  curr1Code;
  curr1Days = [];
  curr1Mid = [];
  constructor(private myRouter: Router,private ServiceCurrService: ServiceCurrService) {

  }
  val1 = [];
  ngOnInit(): void {
    // setTimeout(() => {
    //   this.myRouter.navigate(['/three'])
    //   console.log("3 component")
    // },
    //   3000);


    this.ServiceCurrService.getCurrencyTab().subscribe(post => {
      this.currencyTab = post;

      let c = [];
      for (let i = 0; i < this.currencyTab[0].rates.length; i++) {
        c[i] = this.currencyTab[0].rates[i]['mid'];//mid
      }
      // console.log('curr' + c);
      this.val1 = c;
    });



    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const colorYellow = new THREE.Color('hsl(40,100%,60%)')
    var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild(renderer.domElement);

    window.addEventListener('resize', onWindowResize, false);


    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }




    let display = (<HTMLInputElement>document.getElementById("displayText"))
    display.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry(1, 1, 4);
    //var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const texture = new THREE.TextureLoader().load("../assets/Space.jpg")


    let material = new THREE.MeshPhongMaterial({
      color: colorYellow,
      shininess: 80,
      map: texture
    })
    console.log("KLik1")
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    var mixer: any
    const loader = new GLTFLoader();
    let impModel: any
    // loader.load('../assets/Test.gltf', function (gltf) {
    //loader.load('../assets/CesiumMan.glb', function (gltf) {
    loader.loadAsync('../assets/CesiumMan.glb').then((gltf) => {
      //loader.load('../assets/models/scene.gltf', function (gltf) {
      //loader.load('../assets/untitled.gltf', function (gltf) {
      console.log("KLik1")
      mixer = new THREE.AnimationMixer(gltf.scene)
      let action = mixer.clipAction(gltf.animations[0])
      action.play()
      impModel = gltf
      gltf.scene.scale.set(1, 1, 1)
      scene.add(gltf.scene);
      // setInterval(() => {
      //   gltf.scene.scale.set(1, 1, 1)
      //   scene.add(gltf.scene);
      //   window.addEventListener('click', klik, false);
      //   function klik() {
      //     console.log("KLik")
      //     scene.remove(gltf.scene)
      //   }
      // }, 50)
    })
    // , undefined, function (error) {
    //   console.error("err ", error);

    // });
    //const loader = new THREE.FontLoader();

    // var textLoad = new THREE.FontLoader().load('../fonts/Autumn_Ceria_Regular.json',function(font) {
    //   　console.log(font)
    //   var txtGeo = new THREE.TextGeometry('hello world',{
    //           font: font,
    //           size: 0.8,
    //           height: 0.1,
    //           curveSegments: 12,
    //           bevelEnabled: true,
    //           bevelThickness: 0.1,
    //           bevelSize: 0.05,
    //        　　bevelSegments:3
    //       });
    // 　　var txtMater = new THREE.MeshBasicMaterial({color: 0x0000ff});
    //    var txtMesh = new THREE.Mesh(txtGeo,txtMater);
    //    txtMesh.position.set(-2,2.3,-0.4);
    //    scene.add(txtMesh);
    // }, undefined, function (error) {

    //   console.error("Text err jest", error);

    // });

    //   scene.fog = new THREE.FogExp2(0x03544e, 0.001);
    //   renderer.setClearColor(scene.fog.color);
    //   let cloudGeo
    //   let cloudMaterial
    //   let loader = new THREE.TextureLoader();
    //   loader.load("../assets/image/fog.png", function (texture) {
    //     cloudGeo = new THREE.PlaneBufferGeometry(500, 500);
    //     cloudMaterial = new THREE.MeshLambertMaterial({
    //       map: texture,
    //       transparent: true
    //     })


    //   for(let p=0;p<50;p++){
    //     let cloud=new THREE.Mesh(cloudGeo,cloudMaterial)
    //     cloud.position.set(
    //       Math.random()*800-400,
    //       500,
    //       Math.random()*500-500
    //     );
    //     cloud.rotation.x=1.16
    //     cloud.rotation.y=-0.12
    //     cloud.rotation.z=Math.random()*2*Math.PI
    //     cloud.material.opacity=0.55;
    //     scene.add(cloud);
    //   }
    // })
    //let star;
    let starGeo = new THREE.SphereGeometry(6, 32, 16);
    // for(let i=0;i<6000;i++){
    //   let star=new THREE.Vector3(
    //     Math.random()*600-300,
    //     Math.random()*200-100,
    //     Math.random()*600-300
    //   )
    //star.velocity=0
    //starGeo.vertices.push(star)
    //}
    let starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.02,

    })


    let stars = new THREE.Points(starGeo, starMaterial);
    scene.add(stars);



    camera.position.z = 5;
    let hemilight = new THREE.HemisphereLight(0xffffff, 0x000000, 2)
    scene.add(hemilight)
    // let ambient = new THREE.AmbientLight(0x555500, 9)
    // scene.add(ambient)
    const light = new THREE.PointLight(colorYellow, 2)

    light.position.z = 20
    light.position.y = -20
    light.position.x = -40

    scene.add(light)

    let controls = new OrbitControls(camera, renderer.domElement)
    controls.update()
    const clock = new THREE.Clock()
    var animate = function () {
      requestAnimationFrame(animate);
      // impModel.rotation.x += 0.01;
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      stars.rotation.y += 0.001
      cube.position.x = -2.11;
      const delta = clock.getDelta()
      //console.log(boolean(mixer))
      if (mixer) { mixer.update(delta) }
      renderer.render(scene, camera);
    };

    animate();


















  }

}
