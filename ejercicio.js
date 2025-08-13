//Solicitar al usuario dos número y sumarlos, mostrar el resultado en consola
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Solicitar al usuario dos número y sumarlos, mostrar el resultado en consola
//rl.question("Ingrese un numero:", (n1) =>{
//rl.question("Ingrese otro numero: ", (n2) =>{
// let suma = parseInt(n1) + pareInt(n2);
//console.log(`La suma es de ${n1} y  ${n2} es: ${suma}`);
//rl.close();
//});
//})

rl.question("Ingrese un numero:", (n1) => {
    rl.question("Ingrese segundo numero: ", (n2) => {
        let suma = parseFloat(n1) + parseFloat(n2);
        console.log("El resultado de la suma: ", suma);
        
    });
})
//Solicitar al usuario una temperatura Celcius a Fahrenheit (c*9/5) +32.
rl.question("Ingrese una temperatura en Celsius", (celsius) => {
    let temParse = parseFloat(celsius);
    let Fah = (temParse * 9 / 5) + 32
    console.log(`La conversion de la temperatura es: ${Fah}`);
   
});

//Calcular el área de un rectángulo, solicitar al usuario la base y altura
rl.question("Ingrese la base del rectangulo" , () => {
     rl.close();
});
