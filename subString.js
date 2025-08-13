//Unsistema de gestion de pedidos recibe codigos de seguimiento en el formato; PED-2025-00045; Se necesita extraer el año del pedido y el numero de orden usando el metodo subString().
//Requisitos:
//1. Extraer el año del pedido (2025) y el numero de orden (00045) usando el subString().

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
})

rl.question ("Ingrese el codigo del pedido( ej:PED-2025-00045):", (codigo)=>
{
    const año=codigo.substring(4,8)
    const numberOrden=codigo.substring(9);
    console.log(`Año del pedido: ${año}`);
     console.log(`Mumero de orden: ${numberOrden}`);

     rl.close();
})
