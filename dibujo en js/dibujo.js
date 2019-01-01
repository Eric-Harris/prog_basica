// OBTENIENDO LOS DATOS DEL CANVAS
let canvas = document.getElementById("dibujo");
let lienzo = canvas.getContext("2d");
let ancho = canvas.width;

// FUNCIÓN PARA DIBUJAR EN CANVAS

function dibujarLinea(color, x_inicio, y_inicio, x_final, y_final)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_inicio, y_inicio);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}


// OBTENIENDO LOS DATOS DE LOS INPUTS
let textoUsuario = document.getElementById("text_usuario");
let boton = document.getElementById("boton");

// FUNCIÓN DIBUJAR EN CANVAS POR CLICK
function dibujoClick(){
  let lineas = parseInt(textoUsuario.value);
  let espacio = ancho / lineas;
  let l = 0;
  let y1, xf;

  while (l < lineas) {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea("rgb(164, 245, 80)",0, yi, xf, 500);
    dibujarLinea("rgb(164, 245, 80)",500, yi, xf, 0);
    l = l + 1;
  }
}

boton.addEventListener("click", dibujoClick);
