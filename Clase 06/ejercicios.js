//Ejercicio1
let notas = [];

function solicitarNota(n) {
  rl.question(`Ingresa la nota ${n}: `, (input) => {
    const nota = parseFloat(input);
    if (isNaN(nota)) {
      console.log("Nota inválida. Intenta de nuevo.");
      solicitarNota(n);
    } else {
      notas.push(nota);
      if (notas.length < 3) {
        solicitarNota(n + 1);
      } else {
        mostrarPromedio(notas);
        rl.close();
      }
    }
  });
}

function mostrarPromedio(notas) {
  const suma = notas.reduce((a, b) => a + b, 0);
  const promedio = suma / notas.length;
  console.log(`✅ El promedio de las notas es: ${promedio.toFixed(2)}`);
}

solicitarNota(1);