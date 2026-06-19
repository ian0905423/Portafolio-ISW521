const correctoPIN = "1234";
let intentos = 0;

do {
  const pin = prompt("Ingresa tu PIN:");
  intentos++;

  if (pin === correctoPIN) {
    console.log("¡Acceso concedido!");
    break;
  } else {
    console.log("Incorrecto, intente de nuevo.");
  }

} while (intentos < 3);

if (intentos === 3) {
  console.log("Demasiados intentos. Bloqueado.");
}