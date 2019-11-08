// SINTAXIS EN JS COMPARACIONES
// OPERADOR        DESCRIPCION
//    ==      ->   Igual a
//    !=      ->   Diferente a
//    >      ->    Mayor a
//    <      ->    Menor a
//    >=      ->   Mayor ó Igual a
//    <=      ->   Menor ó Igual a

// CONCATENAR DIFERENTES COMPARACIONES
// OPERADOR        DESCRIPCION
//    &&      ->   AND: True si se cumplen todas las condiciones
//    ||      ->   OR: True si se cumple alguna de las condiciones
// ------------------------------------------------------
// Las sentencias condicionales son:
// IF - ELSE
// SINTAXIS:
// if(condicion) {
//     instruciones si se cumple;
// }else{
//     instruciones si no se cumple;
// }
// EJEMPLO 1:
// var num1 = 7;
// var num2 = 6;
// if(num1 > num2){
//     alert(num1 + " es mayor que " + num2);
// }else{
//     alert(num1 + " es menor que " + num2);
// }
// EJEMPLO 2
// Mostrar un alert en el caso de que un password
// sea menor de 6 caracteres
// var pass = prompt("Introduce un password (6 caract. mínimo)");
// if(pass.length < 6){
//     alert("El pass tiene menos de 6 caract.");
// }
// EJEMPLO 3
// Mostrar el mayor de dos numeros y tambien el caso de que sean iguales
// parseInt(): convierte el numero en entero, ya que sino lo trata como 'string'
// var num1 = parseInt(prompt("Introduce un numero"));
// var num2 = parseInt(prompt("Introduce otro numero"));
//
// if(num1>num2){
//     alert("Num1 mayor que Num2");
// }else if(num2>num1){
//     alert("Num2 mayor que Num1");
// }else{
//     alert("Son iguales");
// }

// EJEMPLO 4: Alert si lo dos passwords son iguales
// y son de mínimo de 6 caracteres
// var pass1 = prompt("Introduce una contraseña");
// var pass2 = prompt("Repite la contraseña");
//
// if(pass1.length < 6 || pass2.length < 6){
//     alert("Algun password tiene menos de 6 caracteres");
// }else if(pass1 != pass2){
//     alert("Los passwords no coinciden");
// }else{
//     alert("Passwords OK!")
// }

// SWITCH
// SINTAXIS:
// switch (expression) {
//     case expression:
//
//         break;
//     default:
//
// }
// Se utiliza en el caso de yener valores de comparación conocidos
// EJEMPLO1: Elegir el horario de un curso
// var horario = prompt("Elige el horario de un curso (mañana/tarde)");
// switch (horario) {
//     case "mañana":
//         alert("Has elegido horario de mañana");
//         break;
//     case "tarde":
//         alert("Has elegido horario de tarde");
//         break;
//     default:
//         alert("No has añadido un horario correcto");
// }
