 let teclas = {
   LEFT : 37,
   UP : 38,
   RIGHT : 39,
   DOWN : 40
 }

document.addEventListener("keydown", dibujarTeclado);

function dibujarTeclado(funcion){
  if(funcion.keyCode == teclas.LEFT){
    alert("IZQUIERDA");
  }
  if(funcion.keyCode == teclas.UP){
    alert("ARRIBA");
  }
  if(funcion.keyCode == teclas.RIGHT){
    alert("DERECHA");
  }
  if(funcion.keyCode == teclas.DOWN){
    alert("ABAJO");
  }
}
