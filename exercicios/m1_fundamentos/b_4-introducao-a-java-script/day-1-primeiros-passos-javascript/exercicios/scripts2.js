/* PARTE 6 */

const angulo2 = 80;
const angulo1 = 50;
const angulo3 = 51;

let soma;
let result;

soma = angulo1 + angulo2 + angulo3;

if (angulo1 > 0 && angulo2 > 0 && angulo3 > 0 && soma === 180) {
    result = true;
    console.log(result);
    console.log("estes angulos fazem parte do triangulo");
}
else {
    result = false 
    console.log(result);
    console.log("um dos angulos não pertence ao triangulo");
}