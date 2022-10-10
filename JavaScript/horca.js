let palabras = ["ALURA", "ORACLE", "JAVASCRIPT", "ONE", "HTML", "CSS"];
let tablero = document.getElementById("horca").getContext("2d");
let palabraSecreta = "";
let letras = [];
let errores = 8;
let acerto = 0;

function escogerPalabraSereta() {
  let palabra = palabras[Math.floor(Math.random() * palabras.length)]
  palabraSecreta = palabra
  console.log(palabraSecreta)
}
/* letras del alfabeto 65 - 90 */
function comprobarLetras(key) {
  let estado = false
  if ((key >= 65 && letras.indexOf(key)) || (key <= 90 && letras.indexOf(key))) {
    letras.push(key)
    console.log(key)
    return estado
  } else {
    estado = true
    console.log(key)
    return estado
  }
}

function anadirLetraIncorrecta() {
  errores -= 1
  console.log(errores)
}

function iniciarJuego() {
  document.getElementById("inputCel").style.display= "flex";
  document.getElementById("horca").style.display = "flex";
  document.getElementById("div-aparece").style.display = "flex";
  document.getElementById("div-desaparece").style.display = "none";
  document.getElementById("ahorcado").style.display = "flex";
  document.getElementById("gano").style.display = "none";
  escogerPalabraSereta();
  dibujarCanvas();
  dibujarLinea();
  dibujarAhorcado();
  document.onkeydown = (e) => {
    let letra = e.key.toUpperCase()
    if (comprobarLetras(letra) && palabraSecreta.includes(letra)) {
      for (let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta[i] === letra) {
          escribirLetraCorrecta(i)
          acerto++;
        }
      }
    }else{
      anadirLetraIncorrecta(letra)
      escribirLetraIncorrecta(letra, errores)
      partes(errores)
    }
    if(acerto === palabraSecreta.length){
      document.getElementById("gano").style.display = "flex";
      alert('Felicidades')
    }
  }
}

function desistir() {
  const reload = document.getElementById('desistir');
  reload.addEventListener('click', _ => {location.reload();});
}

function nuevoJuego(){
  errores = 8;
  acerto = 0;
  iniciarJuego()
}

function agregarPalabra() {
  document.getElementById("iniciar-juego").style.display= "none";
  document.getElementById("nueva-palabra").style.display= "none";
  document.getElementById("agregarPalabra").style.display= "flex";

}

function cancelar() {
  const reload = document.getElementById('cancelar');
  reload.addEventListener('click', _ => {location.reload();});
}
