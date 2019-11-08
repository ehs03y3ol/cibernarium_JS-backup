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
// WHILE
// SINTAXIS:
// while (condicion) {
//     ejecuta instruccion;
// }
// EJEMPLO1: Imprimir los numeros del 0 al 10
// (ambos incluidos)
// var i = 0;
// while (i<=10) {
//     document.write(i+",");
//     i++;
// }
// DO-WHILE
// SINTAXIS:
// do {
//
// } while (true);
// EJEMPLO2: pedir un password hasta que sea de la
// longitud correcta (6 caract)
var pass = "";
do {
    pass = prompt("Introduce una contraseña (6 caract. minimo)")
} while (pass.length < 6);
