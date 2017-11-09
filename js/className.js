window.onload = inicializar;


function inicializar(){
  var imagenes = document.getElementsByClassName("imagen-a-tratar");
  for(var i = 0; i < imagenes.length; i++){
    imagenes[i].addEventListener("mouseover", agrandarImagen);
    imagenes[i].addEventListener("mouseout", comprimirImagen);
  }
}

function agrandarImagen(event){
  var imagen = event.target;
  imagen.style.margin = "0px";
}

function comprimirImagen(event){
  var imagen = event.target;
  imagen.style.margin = "10px";
}
