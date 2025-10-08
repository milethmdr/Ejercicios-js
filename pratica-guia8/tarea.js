import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

// Ejercicio 1: Gestor de Transacciones
// Sistema para manejar Transacciones.
let transacciones = [
 { id: 1, tipo: "deposito", monto: 1000, fecha: "2024-01-15", categoria: "salario" },
 { id: 2, tipo: "retiro", monto: 200, fecha: "2024-01-16", categoria: "compras" },
 { id: 3, tipo: "deposito", monto: 500, fecha: "2024-01-17", categoria: "freelance" }
];
function procesarTransacciones(...nuevasTransacciones) {
  nuevasTransacciones.forEach(tx => {
    const esValida = tx.id && tx.tipo && tx.monto && tx.fecha && tx.categoria;
    if (esValida) {
      transacciones = [...transacciones, tx]; // Usamos spread para agregar
    } else {
      console.warn("Transacción inválida:", tx);
    }
  });
}
function calcularBalance() {
 function calcularBalance() {
  return transacciones.reduce((balance, tx) => {
    return tx.tipo === "deposito" ? balance + tx.monto : balance - tx.monto;
  }, 0);
}
function analizarGastos(periodo = "mes") {
  const gastos = transacciones.filter(tx => tx.tipo === "retiro");

  const resumen = gastos.reduce((acc, tx) => {
    if (!acc[tx.categoria]) {
      acc[tx.categoria] = 0;
    }
    acc[tx.categoria] += tx.monto;
    return acc;
  }, {});

  console.log("Resumen de gastos por categoría:", resumen);
  return resumen;
}
}