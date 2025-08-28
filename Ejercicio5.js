// Ejercicio 5: Encuentra los números pares entre dos valores 
// Consigna: Escribe un programa que le pida al usuario dos números enteros (inicio y fin). 
// El programa debe mostrar todos los números pares que se encuentran entre esos dos valores, incluyendo los límites si son pares. 
// Utiliza un ciclo for para recorrer los números entre el inicio y el fin. 
// Si el número inicial es mayor que el final, el programa debe mostrar un mensaje indicando que los valores son inválidos. 

const prompt = require ('prompt-sync')();

let numeroInicio = parseInt(prompt('Ingrese un número de inicio: '));
let numeroFin = parseInt(prompt('Ingrese un número final: '));

for(let conteo = numeroInicio; conteo <= numeroFin; conteo++){
    if (conteo %2 === 0)
        console.log(`Los números pares entre los valores ingresados son ${conteo}`);    
}
if (numeroInicio >= numeroFin)
        console.log('Los valores ingresados son inválidos. El número de inicio debe ser menor al de final. ');