var lado=4
var scene1= false;
var scene2= false;
var scene3= false;
var scene4= false;
var scene5= false;
var scene6= false;
var FinalScene=false;

var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;


var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();


var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);
camera.position.z = 4.5;
camera.position.x = -1.2;
camera.position.y = 2;

camera.rotation.set(0, -0.5, 0);
scene.add(camera);

var controls = new THREE.OrbitControls(camera, renderer.domElement);

//cubo 1
var geometry = new THREE.BoxGeometry( lado , lado, lado );
var material = new THREE.MeshBasicMaterial( {color: 0xFF390F} );
var cube = new THREE.Mesh( geometry, material );

//cubo 2
var geometry2 = new THREE.BoxGeometry( lado/2 , lado/2, lado/2 );
var material2 = new THREE.MeshBasicMaterial( {color: 0xFFFD5A} );
var cube2 = new THREE.Mesh( geometry2, material2 );

// cubo 3
var geometry3 = new THREE.BoxGeometry( lado/4 , lado/4, lado/4 );
var material3 = new THREE.MeshBasicMaterial( {color: 0x79FFF5} );
var cube3 = new THREE.Mesh( geometry3, material3 );

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(-1, 2, 4);
scene.add(light);

const size = 150;
const divisions = 160;
const axesHelper = new THREE.AxesHelper(1000);
scene.add(axesHelper);

const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

document.addEventListener('keydown', function(event) {
  switch(event.keyCode) {
      case 39: // Flecha derecha
      //Escena 
      if(scene1==false){
      scene.add( cube );
    
      scene1=true;}
      else{
        if(scene1==true && scene2==false){
          cube.translateX(lado/2);
          scene2=true;
          scene.add( cube );
          scene.add( cube2 );
        }else{
          if(scene2==true && scene1==true && scene3==false){
            cube.translateY(lado/2);
            cube2.translateY(lado-lado/4);
            scene3=true;
            scene.add(cube3)
            scene.add( cube2 );
            scene.add( cube );
          }else{
            if(scene3==true && scene2==true && scene4==false)
            {
              cube.translateZ(lado/2);
              cube2.translateX(lado/2);
              cube3.translateY(lado+lado/8);
              scene4=true;
              scene.add( cube );
              scene.add( cube2 );
              scene.add(cube3)
            }else{
              if(scene4==true && scene3==true && scene5==false )
              {
                cube2.translateY(lado/2);
                cube3.translateX(lado/2);
                scene5=true;
                scene.add( cube2 );
                scene.add(cube3)
              }else{
                if(scene5==true && scene4==true && scene6==false)
                {
                  cube2.translateZ(lado/2);
                  cube3.translateY(lado/2);
                  scene6=true;
                  scene.add( cube2 );
                  scene.add(cube3)
                }else{
                  if(scene6==true && scene5==true && FinalScene==false){

                    cube3.translateZ(lado/2);

                    scene.add(cube3)
                    FinalScene=true;
                  }else{
                    if(FinalScene==true)
                    {
                      scene.remove(cube);
                      scene.remove(cube2);
                      scene.remove(cube3);
                      FinalScene=false;
                      scene1=false;
                      scene2=false;
                      scene3=false;
                      scene4=false;
                      scene5=false;
                      scene6=false;
                      cube.translateX(-lado/2);
                      cube.translateY(-lado/2);
                      cube2.translateY(-lado+lado/4);
                      cube.translateZ(-lado/2);
                      cube2.translateX(-lado/2);
                      cube3.translateY(-lado-lado/8);
                      cube2.translateY(-lado/2);
                       cube3.translateX(-lado/2);
                       cube2.translateZ(-lado/2);
                  cube3.translateY(-lado/2);
                  cube3.translateZ(-lado/2);
                  
                    }
                  }
                }
              }
            }
          }
        }
      }

      break;
      
  }
});
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();

