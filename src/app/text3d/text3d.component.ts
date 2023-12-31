import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { ServiceCurrService } from '../service-curr.service';
import { Observable } from 'rxjs';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

@Component({
  selector: 'app-text3d',
  templateUrl: './text3d.component.html',
  styleUrls: ['./text3d.component.css']
})
export class Text3dComponent implements OnInit {

  code = [];
  currencyTab: any;
  curr1Name: string;
  curr1Code;
  curr1Days = [];
  curr1Mid = [];
  val1 = [];
  average = 0
  DisplayLength = 0
  cubeHights = []
  CurrCodesandNames = [["THB", "bat (Tajlandia)"], ["USD", "dolar amerykański"], ["AUD", "dolar australijski"], ["HKD", "dolar Hongkongu"],
  ["CAD", "dolar kanadyjski"], ["NZD", "dolar nowozelandzki"],
  ["SGD", "dolar singapurski"], ["EUR", "euro"], ["HUF", "forint (Węgry)"],
  ["CHF", "frank szwajcarski"], ["GBP", "funt szterling"], ["UAH", "hrywna (Ukraina)"],
  ["JPY", "jen (Japonia)"], ["CZK", "korona czeska"], ["DKK", "korona duńska"], ["ISK", "korona islandzka"],
  ["NOK", "korona norweska"], ["SEK", "korona szwedzka"], ["HRK", "kuna (Chorwacja)"],
  ["RON", "lej rumuński"], ["BGN", "lew (Bułgaria)"], ["TRY", "lira turecka"],
  ["ILS", "nowy izraelski szekel"], ["CLP", "peso chilijskie"], ["PHP", "peso filipińskie"],
  ["MXN", "peso meksykańskie"], ["ZAR", "rand (RPA)]"], ["BRL", "real (Brazylia)"],
  ["MYR", "ringgit (Malezja)"], ["RUB", "rubel rosyjski"], ["IDR", "rupia indonezyjska"],
  ["INR", "rupia indyjska"], ["KRW", "won południowokoreański"], ["CNY", "yuan renminbi (Chiny)]"],
  ["XDR", "SDR (MFW)"]];






  constructor(private ServiceCurrService: ServiceCurrService) { }






  ngOnInit(): void {
    this.klik2("CHF")

    // this.ServiceCurrService.getCurrencyTab().subscribe(post => {
    //   this.currencyTab = post;

    //   let c = [];
    //   for (let i = 0; i < this.currencyTab[0].rates.length; i++) {
    //     c[i] = this.currencyTab[0].rates[i]['mid'];//mid
    //   }
    //   console.log('curr' + c);
    //   this.val1 = c;
    //   console.log('curr1' + c[0]);
    // });

    // var scene = new THREE.Scene();
    // var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    // const colorYellow = new THREE.Color('hsl(40,100%,60%)')
    // const colorBlue = new THREE.Color('hsl(242, 42%, 51%)')
    // var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    // renderer.setSize(window.innerWidth, window.innerHeight);
    // // document.body.appendChild(renderer.domElement);

    // window.addEventListener('resize', onWindowResize, false);


    // function onWindowResize() {
    //   camera.aspect = window.innerWidth / window.innerHeight;
    //   camera.updateProjectionMatrix();
    //   renderer.setSize(window.innerWidth, window.innerHeight);
    // }




    // let display = (<HTMLInputElement>document.getElementById("displayText"))
    // display.appendChild(renderer.domElement);
    // let rnd = Math.random()

    // console.log("raddom ", rnd)

    // const texture = new THREE.TextureLoader().load("../assets/Space.jpg")


    // let material = new THREE.MeshPhongMaterial({
    //   color: colorYellow,
    //   shininess: 80,
    //   map: texture
    // })
    // let materialMax = new THREE.MeshPhongMaterial({
    //   color: colorYellow,
    //   shininess: 80,
    //   //map: texture
    // })
    // let materialMin = new THREE.MeshPhongMaterial({
    //   color: colorBlue,
    //   shininess: 80,
    //   //map: texture
    // })


    // this.ServiceCurrService.getCurrencyTab().subscribe(post => {
    //   this.currencyTab = post;

    //   let c = [];
    //   for (let i = 0; i < this.currencyTab[0].rates.length; i++) {
    //     c[i] = this.currencyTab[0].rates[i]['mid'];//mid


    //   }
    //   // console.log('curr' + c);
    //   this.val1 = c;
    //   // console.log('curr1' + c[0]);

    //   // for (let i = 0; i < this.val1.length; i++) {
    //   //   // console.log("pętla robi cuby ", this.val1[i])
    //   //   var cubeGeometry = new THREE.BoxGeometry(0.5, this.val1[i], 1);
    //   //   const cube = new THREE.Mesh(cubeGeometry, material);
    //   //   cube.position.set(-8 + i / 2, (1 + this.val1[i]) / 2 - 2, 1); // Ustaw pozycję na osi Y jako połowę wysokości sześcianu
    //   //   scene.add(cube);
    //   // }
    // });

    // var textMesh: any
    // const loaderText = new FontLoader();
    // loaderText.load('../assets/Inter_Regular.json', function (font) {

    //   const tgeometry = new TextGeometry('CHF', {
    //     font: font,
    //     size: 2,
    //     height: 0.3,
    //   });
    //   textMesh = new THREE.Mesh(tgeometry, [
    //     new THREE.MeshBasicMaterial({ color: 0xffff00 }),
    //     new THREE.MeshNormalMaterial()
    //   ])
    //   // textMesh.position.set(-3, 1, 3)
    //   textMesh.position.set(-2, -2, 2);
    //   scene.add(textMesh)
    // });







    // // wykres bez http 
    // let hights = [1.3, 1.5, 1.34, 1.56, 1.74, 1.1, 1.9, 1.65, 1.9, 1.14, 1.3, 1.65, 1.5, 1.1, 1.9,
    //   1.3, 1.7, 1.34, 1.08, 1.74, 1.4, 1.9, 1.65, 1.76, 1.14, 1.3, 1.125, 1.5, 1.1, 2,
    //   1.3, 1.1, 1.34, 1.45, 1.74, 1.4, 1.45, 1.1, 1.76, 1.45, 1.1, 1.125, 1.5, 1.4, 1.34,

    // ]
    // let maxValue1 = Math.max(...hights)
    // let minValue1 = Math.min(...hights)
    // for (let i = 0; i < hights.length; i++) {
    //   // console.log("pętla robi cuby bez http", hights[i], this.curr1Days[i])
    //   let cubeHight = (hights[i]) * 5;
    //   // let cubeHight=(this.curr1Mid[i]-0.5*this.curr1Mid[i];
    //   this.cubeHights[i] = cubeHight
    //   var cubeGeometry = new THREE.BoxGeometry(0.4, cubeHight, 1);
    //   let cube = new THREE.Mesh(cubeGeometry, material);
    //   let text = hights[i].toString()
    //   if (hights[i] == maxValue1) {
    //     cube = new THREE.Mesh(cubeGeometry, materialMax);
    //     text = "MAX: \n" + hights[i].toString()
    //   }
    //   if (hights[i] == minValue1) {
    //     cube = new THREE.Mesh(cubeGeometry, materialMin);
    //     text = "MIN: \n" + hights[i].toString()
    //   }

    //   cube.position.set(-10 + i / 2, cubeHight / 2 - 2, 1); // Ustaw pozycję na osi Y jako połowę wysokości sześcianu
    //   scene.add(cube);

    //   loaderText.load('../assets/Inter_Regular.json', function (font) {
    //     const tgeometry = new TextGeometry(text, {
    //       font: font,
    //       size: 0.18,
    //       height: 0.2,
    //     });
    //     textMesh = new THREE.Mesh(tgeometry, [
    //       new THREE.MeshBasicMaterial({ color: 0xffff00 }),
    //       new THREE.MeshNormalMaterial()
    //     ])
    //     // textMesh.position.set(-3, 1, 0)
    //     if (hights[i] == maxValue1 || hights[i] == minValue1) {
    //       textMesh.position.set(-10 + i / 2 - 0.3, cubeHight - 1.55, 1.25);
    //     } else { textMesh.position.set(-10 + i / 2 - 0.3, cubeHight - 2, 1.25); }

    //     scene.add(textMesh)
    //   });

    // }

    // const arr = hights//srednia plane
    // this.average = arr.reduce((a, b) => a + b, 0) / arr.length;
    // let avgText = this.average
    // console.log("Średnia ", this.average);
    // const geometryAv = new THREE.PlaneGeometry(hights.length * 0.5, 0.1);
    // const materialAv = new THREE.MeshBasicMaterial(
    //   { color: 0xffffff, side: THREE.DoubleSide });
    // const planeAv = new THREE.Mesh(geometryAv, materialAv);
    // planeAv.position.set(1, ((this.average) * 5), 1.7);

    // planeAv.rotation.x = Math.PI / 2
    // scene.add(planeAv);

    // let textAvg;//sredn9ia tekst
    // loaderText.load('../assets/Inter_Regular.json', function (font) {
    //   const tgeometry = new TextGeometry("AVG", {
    //     font: font,
    //     size: 0.2,
    //     height: 0.2,
    //   });
    //   textAvg = new THREE.Mesh(tgeometry, [
    //     new THREE.MeshBasicMaterial({ color: 0xffff00 }),
    //     new THREE.MeshNormalMaterial()
    //   ])
    //   // textMesh.position.set(-3, 1, 0)


    //   textAvg.position.set(1, this.average * 5, 3);
    //   console.log("avarage1 ", avgText)

    //   // scene.add(textAvg)
    // });











    // //Wykres z HTTP !!!!!!!!!!!!!!!!
    // // this.ServiceCurrService.getCurrencyOne1("EUR").subscribe(post => {
    // //   console.log("http")
    // //   let curr = post;
    // //   this.curr1Code = curr.code;
    // //   this.curr1Name = curr.currency;
    // //   //console.log(curr.rates[3].effectiveDate);//this.curr1.rates[1].mid
    // //   for (let i = 0; i < curr.rates.length; i++) {
    // //     this.curr1Days[i] = curr.rates[i].effectiveDate;
    // //     this.curr1Mid[i] = curr.rates[i].mid;
    // //   }
    // //   console.log("chf", this.curr1Mid)
    // //   let maxValue=Math.max(...this.curr1Mid)
    // //   let minValue=Math.min(...this.curr1Mid)
    // //   console.log("max value ",maxValue);
    // //   console.log("min value ",minValue);
    // //   for (let i = 0; i < this.curr1Mid.length; i++) {
    // //     // console.log("pętla robi cuby ", this.curr1Mid[i],this.curr1Days[i])
    // //     let cubeHight=(this.curr1Mid[i]-3.5)*5;
    // //     // let cubeHight=(this.curr1Mid[i]-0.5*this.curr1Mid[i];
    // //     this.cubeHights[i]=cubeHight
    // //     var cubeGeometry = new THREE.BoxGeometry(0.4, cubeHight, 1);
    // //     let cube = new THREE.Mesh(cubeGeometry, material);
    // //     if (this.curr1Mid[i]==maxValue)
    // //     {cube = new THREE.Mesh(cubeGeometry, materialMax);}
    // //     if (this.curr1Mid[i]==minValue)
    // //     {cube = new THREE.Mesh(cubeGeometry, materialMin);}

    // //     cube.position.set(-10 + i / 2, cubeHight/2- 2, 1); // Ustaw pozycję na osi Y jako połowę wysokości sześcianu
    // //     scene.add(cube);
    // //     // console.log("y posit ",cubeHight/2- 2)
    // //   }

    // //   const arr = this.curr1Mid
    // //   this.average = arr.reduce((a, b) => a + b, 0) / arr.length;

    // //   console.log("Średnia ",this.average);
    // //   const geometryAv = new THREE.PlaneGeometry( this.curr1Mid.length*0.5, 0.1 );
    // //   const materialAv = new THREE.MeshBasicMaterial( 
    // //     {color: 0xffffff, side: THREE.DoubleSide} );
    // //       const planeAv = new THREE.Mesh( geometryAv, materialAv );
    // //       planeAv.position.set(1, ((this.average-3.5)*5)/2, 1.7);
    // //       planeAv.rotation.x=Math.PI / 2
    // //       scene.add( planeAv );

    // // })







    // const textureP = new THREE.TextureLoader().load("../assets/chf.png")
    // const geometryP = new THREE.PlaneGeometry(10, 3);
    // const materialP = new THREE.MeshBasicMaterial(
    //   { color: 0xffffff, side: THREE.DoubleSide, map: textureP });
    // // let materialP = new THREE.MeshPhongMaterial({
    // //   color: colorYellow,
    // //   shininess: 80,
    // //   map: textureP
    // // })
    // const plane = new THREE.Mesh(geometryP, materialP);
    // plane.position.set(1, -2, 3);
    // plane.rotation.x = Math.PI / 2
    // scene.add(plane);












    // // for (let i = 0; i < hights.length; i++) {
    // //   console.log("pętla robi cuby ",this.val1[i])
    // //   var cubeGeometry= new THREE.BoxGeometry(1, hights[i]+1, 1);
    // //   const cube = new THREE.Mesh(cubeGeometry, material);
    // //   cube.position.set(-7+i, (1+hights[i] )/ 2-2, 1); // Ustaw pozycję na osi Y jako połowę wysokości sześcianu
    // //   scene.add(cube);
    // // }







    // // const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    // // const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    // // const heights = [1, 2, 1.5, 3, 0.5]; // Różne wysokości sześcianów

    // // for (let i = 0; i < heights.length; i++) {
    // //   const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    // //   cube.position.set(i * 2, heights[i] / 2, 0); // Ustaw pozycję na osi Y jako połowę wysokości sześcianu
    // //   scene.add(cube);
    // // }



    // var mixer: any
    // const loader = new GLTFLoader();
    // // let impModel: any
    // // // loader.load('../assets/Test.gltf', function (gltf) {
    // // //loader.load('../assets/CesiumMan.glb', function (gltf) {
    // // loader.loadAsync('../assets/CesiumMan.glb').then((gltf) => {
    // //   //loader.load('../assets/models/scene.gltf', function (gltf) {
    // //   //loader.load('../assets/untitled.gltf', function (gltf) {
    // //   console.log("KLik1")
    // //   mixer = new THREE.AnimationMixer(gltf.scene)
    // //   let action = mixer.clipAction(gltf.animations[0])
    // //   action.play()
    // //   impModel = gltf
    // //   gltf.scene.scale.set(1, 1, 1)
    // //   scene.add(gltf.scene);
    // // setInterval(() => {
    // //   gltf.scene.scale.set(1, 1, 1)
    // //   scene.add(gltf.scene);
    // //   window.addEventListener('click', klik, false);
    // //   function klik() {
    // //     console.log("KLik")
    // //     scene.remove(gltf.scene)
    // //   }
    // // }, 50)
    // // })
    // // , undefined, function (error) {
    // //   console.error("err ", error);

    // // });
    // //const loader = new THREE.FontLoader();

    // // var textLoad = new THREE.FontLoader().load('../fonts/Autumn_Ceria_Regular.json',function(font) {
    // //   　console.log(font)
    // //   var txtGeo = new THREE.TextGeometry('hello world',{
    // //           font: font,
    // //           size: 0.8,
    // //           height: 0.1,
    // //           curveSegments: 12,
    // //           bevelEnabled: true,
    // //           bevelThickness: 0.1,
    // //           bevelSize: 0.05,
    // //        　　bevelSegments:3
    // //       });
    // // 　　var txtMater = new THREE.MeshBasicMaterial({color: 0x0000ff});
    // //    var txtMesh = new THREE.Mesh(txtGeo,txtMater);
    // //    txtMesh.position.set(-2,2.3,-0.4);
    // //    scene.add(txtMesh);
    // // }, undefined, function (error) {

    // //   console.error("Text err jest", error);

    // // });

    // //   scene.fog = new THREE.FogExp2(0x03544e, 0.001);
    // //   renderer.setClearColor(scene.fog.color);
    // //   let cloudGeo
    // //   let cloudMaterial
    // //   let loader = new THREE.TextureLoader();
    // //   loader.load("../assets/image/fog.png", function (texture) {
    // //     cloudGeo = new THREE.PlaneBufferGeometry(500, 500);
    // //     cloudMaterial = new THREE.MeshLambertMaterial({
    // //       map: texture,
    // //       transparent: true
    // //     })


    // //   for(let p=0;p<50;p++){
    // //     let cloud=new THREE.Mesh(cloudGeo,cloudMaterial)
    // //     cloud.position.set(
    // //       Math.random()*800-400,
    // //       500,
    // //       Math.random()*500-500
    // //     );
    // //     cloud.rotation.x=1.16
    // //     cloud.rotation.y=-0.12
    // //     cloud.rotation.z=Math.random()*2*Math.PI
    // //     cloud.material.opacity=0.55;
    // //     scene.add(cloud);
    // //   }
    // // })
    // //let star;
    // // let starGeo = new THREE.SphereGeometry(6, 32, 16);
    // // // for(let i=0;i<6000;i++){
    // // //   let star=new THREE.Vector3(
    // // //     Math.random()*600-300,
    // // //     Math.random()*200-100,
    // // //     Math.random()*600-300
    // // //   )
    // // //star.velocity=0
    // // //starGeo.vertices.push(star)
    // // //}
    // // let starMaterial = new THREE.PointsMaterial({
    // //   color: 0xffffff,
    // //   size: 0.02,

    // // })


    // // let stars = new THREE.Points(starGeo, starMaterial);
    // // scene.add(stars);



    // camera.position.z = 10;
    // let hemilight = new THREE.HemisphereLight(0xffffff, 0x000000, 2)
    // scene.add(hemilight)
    // // let ambient = new THREE.AmbientLight(0x555500, 9)
    // // scene.add(ambient)
    // const light = new THREE.PointLight(colorYellow, 2)

    // light.position.z = 20
    // light.position.y = -20
    // light.position.x = -40

    // scene.add(light)

    // let controls = new OrbitControls(camera, renderer.domElement)
    // controls.update()


    // const clock = new THREE.Clock()
    // var animate = function () {
    //   requestAnimationFrame(animate);
    //   // console.log("animate")
    //   // impModel.rotation.x += 0.01;
    //   // cube.rotation.x += 0.01;
    //   // cube.rotation.y += 0.01;
    //   // // stars.rotation.y += 0.001
    //   // cube.position.x = -2.11;
    //   const delta = clock.getDelta()
    //   //console.log(boolean(mixer))
    //   if (mixer) { mixer.update(delta) }
    //   renderer.render(scene, camera);
    // };

    // animate();

  }


  klik(code) {
    let display = (<HTMLInputElement>document.getElementById("displayText"))
    display.firstChild.remove()
    display.removeChild
    this.klik2(code)
  }


  klik2(code) {
    //console.log("klik2 ",code)

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const colorYellow = new THREE.Color('hsl(40,100%,60%)')
    const colorBlue = new THREE.Color('hsl(242, 42%, 51%)')
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
    // display.firstChild.remove()
    // display.removeChild
    display.appendChild(renderer.domElement);
    // let rnd = Math.random()

    // console.log("raddom ", rnd)

    const texture = new THREE.TextureLoader().load("../assets/Space.jpg")


    let material = new THREE.MeshPhongMaterial({
      color: colorYellow,
      shininess: 80,
      map: texture
    })
    let materialMax = new THREE.MeshPhongMaterial({
      color: colorYellow,
      shininess: 80,
      //map: texture
    })
    let materialMin = new THREE.MeshPhongMaterial({
      color: colorBlue,
      shininess: 80,
      //map: texture
    })


    // this.ServiceCurrService.getCurrencyTab().subscribe(post => {
    //   this.currencyTab = post;

    //   let c = [];
    //   for (let i = 0; i < this.currencyTab[0].rates.length; i++) {
    //     c[i] = this.currencyTab[0].rates[i]['mid'];//mid


    //   }
    //   // console.log('curr' + c);
    //   this.val1 = c;

    // });

    //var textMesh: any
    const loaderText = new FontLoader();
    loaderText.load('../assets/Inter_Regular.json', function (font) {

      const tgeometry = new TextGeometry(code, {
        font: font,
        size: 2,
        height: 0.3,
      });
      let textMesh = new THREE.Mesh(tgeometry, [
        new THREE.MeshBasicMaterial({ color: 0xffff00 }),
        new THREE.MeshNormalMaterial()
      ])
      // textMesh.position.set(-3, 1, 3)
      textMesh.position.set(-2, -2, 2);
      scene.add(textMesh)
    });

    // wykres bez http 
    // let hights = [1.3, 1.5, 1.34, 1.56, 1.74, 1.1, 1.9, 1.65, 1.9, 1.14, 1.3, 1.65, 1.5, 1.1, 1.9,
    //   1.3, 1.7, 1.34, 1.08, 1.74, 1.4, 1.9, 1.65, 1.76, 1.14, 1.3, 1.125, 1.5, 1.1, 2,
    //   1.3, 1.1, 1.34, 1.45, 1.74, 1.4, 1.45, 1.1, 1.76, 1.45, 1.1, 1.125, 1.5, 1.4, 1.34,

    // ]



    // this.ServiceCurrService.getCurrencyOne1("EUR").subscribe(post => {

    //   console.log("http")
    //   let curr = post;
    //   this.curr1Code = curr.code;
    //   this.curr1Name = curr.currency;
    //   //console.log(curr.rates[3].effectiveDate);//this.curr1.rates[1].mid
    //   for (let i = 0; i < curr.rates.length; i++) {
    //     this.curr1Days[i] = curr.rates[i].effectiveDate;
    //     this.curr1Mid[i] = curr.rates[i].mid;
    //   }
    //   console.log("chf", this.curr1Mid)
    //   let maxValue=Math.max(...this.curr1Mid)
    //   let minValue=Math.min(...this.curr1Mid)
    //   console.log("max value ",maxValue);
    //   console.log("min value ",minValue);
    //   for (let i = 0; i < this.curr1Mid.length; i++) {
    //     // console.log("pętla robi cuby ", this.curr1Mid[i],this.curr1Days[i])
    //     let cubeHight=(this.curr1Mid[i]-3.5)*5;
    //     // let cubeHight=(this.curr1Mid[i]-0.5*this.curr1Mid[i];
    //     this.cubeHights[i]=cubeHight
    //     var cubeGeometry = new THREE.BoxGeometry(0.4, cubeHight, 1);
    //     let cube = new THREE.Mesh(cubeGeometry, material);
    //     if (this.curr1Mid[i]==maxValue)
    //     {cube = new THREE.Mesh(cubeGeometry, materialMax);}
    //     if (this.curr1Mid[i]==minValue)
    //     {cube = new THREE.Mesh(cubeGeometry, materialMin);}

    //     cube.position.set(-10 + i / 2, cubeHight/2- 2, 1); // Ustaw pozycję na osi Y jako połowę wysokości sześcianu
    //     scene.add(cube);
    //     // console.log("y posit ",cubeHight/2- 2)
    // }

    // )}


    // //   console.log("http")
    // //   let curr = post;
    // //   this.curr1Code = curr.code;
    // //   this.curr1Name = curr.currency;
    // //   //console.log(curr.rates[3].effectiveDate);//this.curr1.rates[1].mid
    // //   for (let i = 0; i < curr.rates.length; i++) {
    // //     this.curr1Days[i] = curr.rates[i].effectiveDate;
    // //     this.curr1Mid[i] = curr.rates[i].mid;
    // //   }





    // let arrTest = []
    // for (let i = 0; i <= 45; i++) {
    //   arrTest[i] =Math.random().toFixed(2)
    //   console.log("aaTest ",i," ",arrTest[i])
    // }

    //this.ServiceCurrService.getCurrencyOne2("USD") 
    // let hights = arrTest



    let hights = this.ServiceCurrService.getCurrencyOne2(code)

    // const sum = hights.reduce((a, b) => a + b, 0);
    // const avg = (sum / hights.length) ;
    // let avg1=0
    let maxValue1 = Math.max(...hights)
    let minValue1 = Math.min(...hights)
    for (let i = 0; i < hights.length; i++) {
      // avg1=+hights[i]
      //console.log("pętla robi cuby bez http", hights[i], this.curr1Days[i])
      let cubeHight = (hights[i]);
      // let cubeHight=(this.curr1Mid[i]-0.5*this.curr1Mid[i];
      this.cubeHights[i] = cubeHight
      var cubeGeometry = new THREE.BoxGeometry(0.4, cubeHight, 1);
      // let color7=0xac2394+i*10
      //let colorparse=parseInt(color7, 16);
      let material7 = new THREE.MeshPhongMaterial({
        color: 0x999999,
        shininess: 80,
        map: texture
      })




      let cube = new THREE.Mesh(cubeGeometry, material7);
      let text = hights[i].toString()
      if (hights[i] == maxValue1) {
        cube = new THREE.Mesh(cubeGeometry, materialMax);
        text = "MAX: \n" + hights[i].toString()
      }
      if (hights[i] == minValue1) {
        cube = new THREE.Mesh(cubeGeometry, materialMin);
        text = "MIN: \n" + hights[i].toString()
      }

      cube.position.set(-10 + i / 2, cubeHight / 2 - 2, 1); // Ustaw pozycję na osi Y jako połowę wysokości sześcianu
      scene.add(cube);
      if (i % 2 == 0 || hights[i] == maxValue1 || hights[i] == minValue1) {
        loaderText.load('../assets/Inter_Regular.json', function (font) {
          console.log("petla nr ", i)

          const tgeometry = new TextGeometry(text, {
            font: font,
            size: 0.12,
            height: 0.12,
          });
          let textMesh1 = new THREE.Mesh(tgeometry, [
            new THREE.MeshBasicMaterial({ color: 0xffff00 }),
            new THREE.MeshNormalMaterial()
          ])
          // textMesh.position.set(-3, 1, 0)
          if (hights[i] == maxValue1 || hights[i] == minValue1) {
            textMesh1.position.set(-10 + i / 2 - 0.3, cubeHight - 1.55, 1.25);
          } else { textMesh1.position.set(-10 + i / 2 - 0.28, cubeHight - 2, 1.25); }
          //else { textMesh1.position.set(-10 + i / 2 - 0.28, cubeHight - 2, 3); }
        
          scene.add(textMesh1)
        });
      }

    }



    let sum1 = 0;

    // calculate sum using forEach() method
    hights.forEach(num => {
      sum1 += Number(num);
    })
    console.log("sumsa ", sum1 / hights.length)
    const avg = sum1 / hights.length


    const arr = hights//srednia plane
    // let avg = arr.reduce((a, b) => a + b, 0) / arr.length;
    //     const sum = hights.reduce((a, b) => a + b, 0);
    // const avg = (sum / hights.length) ;
    let avgText = avg
    console.log("Średnia ", avg.toFixed(4), hights);
    const geometryAv = new THREE.PlaneGeometry(hights.length * 0.5, 0.1);
    const materialAv = new THREE.MeshBasicMaterial(
      { color: 0xffffff, side: THREE.DoubleSide });
    const planeAv = new THREE.Mesh(geometryAv, materialAv);
    planeAv.position.set(1, avg - 2, 1.7);

    planeAv.rotation.x = Math.PI / 2
    scene.add(planeAv);

    let textAvg;//sredn9ia tekst
    loaderText.load('../assets/Inter_Regular.json', function (font) {
      const tgeometry = new TextGeometry("AVG " + avg.toFixed(4), {
        font: font,
        size: 0.2,
        height: 0.2,
      });
      textAvg = new THREE.Mesh(tgeometry, [
        new THREE.MeshBasicMaterial({ color: 0xffffff }),
        new THREE.MeshNormalMaterial()
      ])
      // textMesh.position.set(-3, 1, 0)
      textAvg.position.set(-11, avg - 2, 1.7);
      console.log("avarage1 ", avgText)
      scene.add(textAvg);
    });
    //});//koniec htp
    const flag = code + ".jpg"


    const textureP = new THREE.TextureLoader().load("../assets/flags/" + flag)
    const geometryP = new THREE.PlaneGeometry(10, 3);
    const materialP = new THREE.MeshBasicMaterial(
      { color: 0xffffff, map: textureP });
    // let materialP = new THREE.MeshPhongMaterial({
    //   color: colorYellow,
    //   shininess: 80,
    //   map: textureP
    // })
    const plane = new THREE.Mesh(geometryP, materialP);
    plane.position.set(1, -2, 3);
    plane.rotation.x = Math.PI / -2
    scene.add(plane);


    var mixer: any
    const loader = new GLTFLoader();


    camera.position.z = 10;
    camera.position.y = avg - 2;
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
      // console.log("animate")
      // impModel.rotation.x += 0.01;
      // cube.rotation.x += 0.01;
      // cube.rotation.y += 0.01;
      // // stars.rotation.y += 0.001
      // cube.position.x = -2.11;
      const delta = clock.getDelta()
      //console.log(boolean(mixer))
      if (mixer) { mixer.update(delta) }
      renderer.render(scene, camera);
    };

    animate();
  }





}
