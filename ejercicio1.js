//IMPORTAMOS EL MODULO
//const readline = require('readline');
import readline from 'readline';

//CREAMOS UNA INTERFAZ
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

//PREGUNTAR AL USUARIO
rl.question("¿Como te llamas?", (nombre)=>{
    console.log(`Hola, buen dia ${nombre}`)
    rl.close();
})
