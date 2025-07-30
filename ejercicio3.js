//Solicitar al usuario dos palabras y mostrarlas juntas
import readline from 'readline';

const rl = readline.createInterface({ 
 input: process.stdin,
 output: process.stdout
});

rl.question("Ingrese la primera palabra:", (p1) =>{
    rl.question("Ingrese la segunda palabra: ", (p2) =>{
        console.log(`$(p1) $(p2)`)
    rl.close();
 })
})

