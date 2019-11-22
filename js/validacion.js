// funcion que se llama desde el evento creado como atributo en el botón del formulario
function validar(){
    // variable que almacena todos los mensajes de error
    var mensajes = "";
    //cogemos por ID la caja de mensajes de error "results"
    var results = document.getElementById('results');
    // cogemos por ID los campos
    var nombre = document.getElementById('nombre');
    var email = document.getElementById('email');
    var tel = document.getElementById('tel');
    // cogemos por nombre de etiqueta (array)
    var mensaje = document.getElementsByTagName('textarea');

    // VALID. NOMBRE
    // si está vacío
    if(nombre.value == ""){
        nombre.style.border = "1px solid red";
        mensajes = "<h3>El campo nombre está vacío</h3>";
    // si tiene contenido
    }else{
        nombre.style.border = "1px solid #aaa";
    }
    // VALID. EMAIL
    if(email.value == "" ) {
        email.style.border = "1px solid red";
        mensajes += "<h3>El campo email está vacío</h3>";
    // !: invierte el TRUE por el FALSE o viceversa
    // si el campo email es incorrecto
    }else if(!validateEmail(email.value)) {
        email.style.border = "1px solid red";
        mensajes += "<h3>El campo email no es correcto</h3>";
    // si no se cumple ninguna de las condiciones anteriores
    }else{
        email.style.border = "1px solid #aaa";
    }
    // VALID. TELEFONO
    if(tel.value == ""){
        tel.style.border = "1px solid red";
        mensajes += "<h3>El campo telefono está vacío</h3>";
    }else if(isNaN(tel.value)){
        tel.style.border = "1px solid red";
        mensajes += "<h3>El campo telefono no es numérico</h3>";
    }else if(!validatePhone(tel.value)){
        tel.style.border = "1px solid red";
        mensajes += "<h3>El campo telefono no es correcto</h3>";
    }else{
        tel.style.border = "1px solid #aaa";
    }
    // MENSAJE (valida campo mensaje vacío y además que el usuario añada mas de 10 caracteres)
    // tenemos que indicar que cogemos el primer elemento (textarea) ya que es un array
    if(mensaje[0].value == ""){
        mensaje[0].style.border = "1px solid red";
        mensajes += "<h3>El campo mensaje está vacío</h3>";
    }else if(mensaje[0].value.length < 10){
        mensaje[0].style.border = "1px solid red";
        mensajes += "<h3>El campo mensaje contiene menos de 10 caracteres</h3><br>";
    }else{
        mensaje[0].style.border = "1px solid #aaa";
    }
    // inyecto en la caja los mensajes de error de validacion
    results.innerHTML = mensajes;
    // Si la variable "mensajes" esta vacía (string:""), quiere decir que todos los campos del form estan validados
    if(mensajes == ""){
        location.href = "mensaje_OK_form.html";
    }

}
// funcion que a partir de una expresion regular (codigo estandar que compara un formato) devuelve un TRUE o FALSE dependiendo si se cumple el formato del email o no
function validateEmail(email){
    var regExp = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regExp.test(email);
}
// comprobacion
// var result_email = validateEmail("armand@gmail.c");
// alert(result_email);

// funcion que valida con RegExp un telefono
function validatePhone(phone){
    var regExp = /^[9|7|6]{1}([\d]{2}[-]*){3}[\d]{2}$/;
    return regExp.test(phone);
}
// FUNCION QUE VALIDA CON EVENTO Keyup
function validar_keyup(){

    var mensajes ="";
    var tel1 = document.getElementById('tel1');
    //cogemos por ID la caja de mensajes de error "results"
    var results1 = document.getElementById('results1');

    if(tel1.value == ""){
        tel1.style.border = "1px solid red";
        mensajes += "<h3>El campo telefono está vacío</h3>";
    }else if(isNaN(tel1.value)){
        tel1.style.border = "1px solid red";
        mensajes += "<h3>El campo telefono no es numérico</h3>";
    }else if(!validatePhone(tel1.value)){
        tel1.style.border = "1px solid red";
        mensajes += "<h3>El campo telefono no es correcto</h3>";
    }else{
        tel1.style.border = "1px solid #aaa";
    }

    // inyecto en la caja los mensajes de error de validacion
    results1.innerHTML = mensajes;

}
