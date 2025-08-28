// Ejercicio 6: La tabla de multiplicar 
// Consigna: Crea un programa que le pida al usuario un número y luego imprima su tabla de multiplicar desde el 1 hasta el 10.
// Usa un ciclo for. 

const prompt = require ('prompt-sync')();

let numeroUsuario =parseInt(prompt('Ingrese un número: '));

for(let inicio = 1 ; inicio <= 10; inicio ++){
    console.log(`${numeroUsuario} x ${inicio} = ${numeroUsuario*inicio}`);
}
    
    