// funcion que se llama desde el evento creado como atributo en el botón del formulario
function validar(){
    // variable que almacena todos los mensajes de error
    var mensajes = "";
    //cogemos por ID la caja de mensajes de error "results"
    var results = document.getElementById('results');
    // cogemos por ID los campos
    var nombre = document.getElementById('nombre');
    var email = document.getElementById('email');


    // VALID. NOMBRE
    // si está vacío
    if(nombre.value == ""){
        nombre.style.border = "1px solid red";
        mensajes = "<h3>El campo nombre está vacío</h3><br>";
        results.innerHTML = mensajes;
    // si tiene contenido
    }else{
        nombre.style.border = "1px solid #aaa";
    }
    // VALID. EMAIL
    if(email.value == ""){
        email.style.border = "1px solid red";
        mensajes += "<h3>El campo email está vacío</h3>";
        results.innerHTML = mensajes;
    // si tiene contenido
    }else{
        email.style.border = "1px solid #aaa";

    }

    results.innerHTML = mensajes;

}

function validateEmail(email){
    var pattern = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return pattern.test(email);
}
