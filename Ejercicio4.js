// Ejercicio 4: ¿Es par o impar? 
// Consigna: Los números pueden ser pares o impares. 
// Escribe un programa que le pida al usuario un número y determine si es par o impar.
// Muestra un mensaje explicativo indicando qué significa cada caso. 

const prompt = require ('prompt-sync')();

let numeroUsuario = parseInt(prompt('Ingrese un número para corroborar si es par o impar: '));
if (numeroUsuario % 2 === 0)
    console.log(`El número ${numeroUsuario} es par, ya que al dividirlo por 2, su resto es 0. `);
else 
    console.log(`El número ${numeroUsuario} es impar, ya que al dividirlo por 2, su resto es mayor a 0. `);