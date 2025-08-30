// Ejercicio 10: Adivina el número 
// Consigna: Crea un programa donde la computadora seleccione un número al azar entre 1 y 10. 
// Luego, pide al usuario que adivine el número hasta 3 intentos. 
// Si el usuario acierta en cualquiera de los intentos, muestra un mensaje de felicitación y detén los intentos restantes. 
// Si no acierta después de los 3 intentos, muestra el número secreto. Usa un for para resolver este ejercicio. 

const prompt = require ('prompt-sync')();

let numRandom = Math.random()*10;
let numAleatorio = Math.ceil(numRandom);
console.log("numAleatorio: ", numAleatorio);


for (let i= 1; i<=3 ; i++ ){
    let numUsuario = parseInt(prompt(`Intento #${i}: Adiviná el número de 1 a 10: `));

    if(numUsuario !== numAleatorio) {
        if (i == 3) {
            console.log('Perdiste.');
            return
        }
        console.log('Intentá de nuevo');
    } else if (numUsuario == numAleatorio) {
        console.log('¡Felicitaciones, ganaste! 😃');
        return
    }
}


