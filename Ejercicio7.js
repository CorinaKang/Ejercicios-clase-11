// Ejercicio 7: Calculadora simple 
// Consigna: Crea un programa que le pida al usuario dos números y una operación matemática a realizar: suma, resta, multiplicación o división.
// Según la operación ingresada, el programa deberá calcular y mostrar el resultado. 
// Si el usuario ingresa una operación inválida, el programa debe mostrar un mensaje de error. 
// Usa switch para resolverlo. 

const prompt = require ('prompt-sync')();

let opcionSeleccionada = parseInt(prompt('Ingrese la operación que desea realizar: 1- suma   2 - resta  3- multiplicación  4- división  -5 salir: '));
if (opcionSeleccionada == 5) {
    console.log ('Adiós.');
    return;
}

let num1 = parseInt (prompt('Ingrese el primer número: '));
let num2 = parseInt (prompt('Ingrese el segundo número: '));

switch (opcionSeleccionada){
    case  1: 
        let resultadoSuma = num1 + num2
        console.log(`La suma es ${resultadoSuma}`);
    break;

    case  2: 
        console.log('La resta es ' + (num1-num2));
    break;

    case  3:
        console.log ('La multiplicación es ' + (num1*num2));
    break;

    case 4:
        console.log('La división es ' + (num1/num2));
    break;

    default:
        console.log('Ingrese un número válido.');
}
