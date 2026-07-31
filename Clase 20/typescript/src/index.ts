import { Persona } from "./Persona.js";

console.log("Hola Ian")

let nombre: string = "Ian";
let apellido = "Angulo Matamoros";

function suma(a: number, b: number): number {
    return a + b;
}



function suma2(a: number, b: number): number {
    return a + b;
}

function saludar(nombre: string): void {
    console.log(`Hola ${nombre}`);
}

const persona = new Persona("Ian", "Angulo", 21);

console.log(persona.saludar());



