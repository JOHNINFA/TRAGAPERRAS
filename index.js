window.onload = inicio;
var credito = Math.floor(Math.random() * 4) + 9;
var imagenes = [
  "atanagildo.png",
  "ataulfo.png",
  "ervigio.png",
  "leogivildo.png",
  "recesvinto.png",
  "sisebuto.png",
  "teodorico.png",
];
var premios = [3, 2, 3, 2, 2, 3, 6];
var numeros_actuales = [];
var au;

function inicio() {
  document.getElementById("tirar").onclick = lanzar_inicio;
  document.getElementById("cruz").onclick = cerrar;
  au=document.getElementById("sonido");
}

function lanzar_inicio() {
  numeros_actuales = [];
  for (let k = 0; k < document.getElementsByClassName("boton").length; k++) {
    numeros_actuales.push(escoger_numero());
    mostrar_imagen(k, numeros_actuales[k]);
  }
 comparar();
}

function lanzar_uno() {}

function escoger_numero() {
  var azar = Math.floor(Math.random() * imagenes.length);
  return azar;
}

function mostrar_imagen(num, im) {
    var contenedoresImagen = document.getElementsByClassName("imagen");
    var imagenElement = contenedoresImagen[num].getElementsByTagName("img")[0];
    imagenElement.src = "img/" + imagenes[im];
  }
  
function comparar() {
  if(numeros_actuales[0]== numeros_actuales[1] &&
    numeros_actuales[1]== numeros_actuales[2]){
    
      //tenemos premiso
      let p = premios[numeros_actuales[0]];
      let mensaje= `has ganado ${p}monedas<div>`;
      for(let k= 0; k<p; k++){
        mensaje += `<img src= "img/moneda.png" >`;

      }
      mensaje+=`</div>`;
      mostrar_mensaje(mensaje)
      sonar("ganar.mp3");

    }
  }

function actualizar() {}

function mostrar_mensaje(m) {
  document.getElementById("velo").style.display="flex"
  document.getElementById("mensaje").innerHTML = m;
}

function cerrar() {
  document.getElementById("velo").style.display = "none"
  au.pause();
}

function sonar(audio) {
  au.src ="audios/"+ audio;
  au.play();
}



