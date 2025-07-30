/*Preguntar al usuario en que ciudad vive, mostrar por consola la respuesta del usuario*/
import readline from 'readline';

const rl = readline.createInterface({ 
 input: process.stdin,
 output: process.stdout
});

rl.question("¿Donde vive?", (nombre)=>{
    console.log("Hola,vivo en " + nombre);
    rl.close();
})



