// Ejercicio 8: Encuentra los múltiplos de un número 
// Consigna: Escribe un programa que le pida al usuario un número entero positivo y muestre todos los múltiplos de ese número entre 1 y 100.
// Utiliza un ciclo for para resolverlo. 

const prompt = require('prompt-sync')();

let numeroUsuario = parseInt(prompt('Ingrese un número positivo: '));

for(let inicio = 1; inicio <= 100; inicio++){
    if(inicio % numeroUsuario === 0)
        console.log(`Múltiplos de ${numeroUsuario} = ${inicio}`);
}
