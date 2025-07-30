//Ejercicio2
import readline from 'readline';

const rl = readline.createInterface({ 
 input: process.stdin,
 output: process.stdout
});

rl.question("¿Cual es su color favorito?", (nombre)=>{
    console.log(`Mi favorito es el ${nombre}`);
    rl.close();
})
