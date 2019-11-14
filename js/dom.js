// DOM: Document Object Model
// Def: Nos permite almacenar, cambiar, añadir o eliminar
// cualquier elemento de nuestra web

// almaceno en una variable el elemento (objeto)
// con id='logo' (imagen)
var logo = document.getElementById('logo');
// alert(logo);
// añadimos un borde rojo al logo
logo.style.border = "2px red solid";

// por clase
var imagenes = document.getElementsByClassName('imagen');
// alert(imagenes); //array

// pinto el borde de la seguna imagen
// imagenes[1].style.border = "2px solid red";
// pintamos todas las imagenes
for (var i = 0; i < imagenes.length; i++) {
    imagenes[i].style.border = "2px solid red";
}
