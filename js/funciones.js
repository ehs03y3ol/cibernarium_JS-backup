// FUNCIONES
// def: Es un bloque de código diseñado
// para realizar una operación o tarea determinada
// A esta funcion la podemos llamar desde cualquier punto
// del programa y nos retorna el resultado de dicha operacion
// EJEMPLO SINTAXIS:
// function nombre_funcion(parametro1, parametro2,....){
//     //codigo de la FUNCION
//     ...
//     ...
//     return resultado;
// }
// LLAMAR A LA FUNCION: Con el mismo nombre
// nombre_funcion(parametro1, parametro2,....);
// ---------------------------------------
// EJEMPLO1: Saludo (no recibe ni devuelve parámetros)
// function saludo(){
//     alert("Hola");
// }
// saludo();
// EJEMPLO2: Saludo (recibe como parámetro el texto del Saludo
// pero no devuelve nada)
// function saludo(saludo_user){
//     alert(saludo_user);
// }
// var custom_saludo = prompt("Indica el saludo");
// // llamada a la funcion
// // IMPORTANTE: Nombre de la variable no puede coincidir
// // con el nombre de funcion
// saludo(custom_saludo);
// EJEMPLO3: Calculo de impuestos (recibe parametros y devuelve resultado)
// function impuesto_IVA(precio_producto, iva){
//     var impuesto = (iva / 100) + 1 ;
//     var total = precio_producto * impuesto;
//     return total;
// }
// var precio_sin_IVA = parseInt(prompt("Dime el precio del producto"));
// var iva = parseInt(prompt("Dime el IVA (%)"));
// // siempre que la funcion tiene un 'return', la llamada a dicha funcion
// // se asigna a una variable
// var precio_total = impuesto_IVA(precio_sin_IVA, iva);
// alert(precio_total);
