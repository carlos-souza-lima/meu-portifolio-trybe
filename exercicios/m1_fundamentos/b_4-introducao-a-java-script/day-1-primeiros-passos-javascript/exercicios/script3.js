/* PARTE 6 */
let nomePeça = "rainha";

let peça = nomePeça.toLowerCase();
console.log("movimentos: ");

switch(peça){
    case "peao": 
        console.log("para frente uma casa por vez");
        break;
    case "bispo": 
        console.log("diagonal");
        break;
    case "torre": 
        console.log("linha reta horizontal e vertical");
        break;
    case "cavalo": 
        console.log("movimento em L");
        break;
    case "rainha": 
        console.log("horizontal, vertical e diagonal");
        break;
    case "rei": 
        console.log("qualquer casa ao redor");
        break;
    default:
        console.log("ERRO : esta peça não faz parte do xadres.");
        break;
}