/* EXERCICIOS OBJETO E FOR/IN */

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

/* Exercicio 1 */
console.log('Bem-vinda,', info.personagem);

/* Exercicio 2 */
info['recorrente'] = 'Sim';
/* console.log(info); */

/* Exercicio 3 */
for (let key in info) {
    console.log(key)
}