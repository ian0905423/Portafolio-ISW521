const numeros = [12, 5, 88, 3, 42, 7, 100];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > 50) {
    console.log(`Primer número mayor a 50: ${numeros[i]}, posición: ${i}`);
    break; // detenemos el ciclo al encontrarlo
  }
}