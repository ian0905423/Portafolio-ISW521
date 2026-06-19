const numeros = [10, -3, 7, -1, 5, 8, -2];
let suma = 0;

for (const num of numeros) {
  if (num < 0) continue; // salta los negativos
  suma += num;
}

console.log(`Suma final: ${suma}`); // 30