//Ejercicio1 - guia8
//En un formulario web pides al usuario su nombre completo y quieres asegurarte de que no haya espacios al inicio o final, y además quieres mostrar cuántos caracteres tiene el nombre sin contar los espacios
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

// rl.question("Ingrese su nombre completo:", (nombre)=>{
//     const nombreLimpio=nombre.trim();
//     const nombreSinEspacio=nombre.replaceAll("","");
//    // const numCaracter=nombreSinEspacio.length;

//     console.log(`Nombre Limpio: ${nombreLimpio}`);
//      console.log(`Nombre sin Espacios: ${nombreSinEspacio}`);
//       console.log(`Cantidad de caracteres sin espacios: ${numCaracter}`);
    
//     rl.close();
// });


//Ejercicio2
// rl.question("Ingrese su correo:", (correo)=>{
//   const correoNormalizado=correo.toLocaleLowerCase();
//    const dominValido=correo.includes("@gmail.com");
//    console.log(`Correo Normalizado: ${correoNormalizado}`);
//    console.log(`¿Es dominio @gmail.com?: ${dominValido}`);

// });

// //Ejercicio3
// rl.question("Ingrese un codigo generado:", (codigo)=>{
//   const ultimosDigitos=codigo.slice(-4);
//   console.log(`Los ultimos 4 digitos son: ${ultimosDigitos}`);

//    rl.close();
// })

//Ejercicio4
rl.question("Ingrese el mensaje:", (mensaje)=>{
  const errorMensaje=mensaje.indexOf("error");
   console.log(`La palabra error esta en: ${errorMensaje}`)

   rl.close();
})
