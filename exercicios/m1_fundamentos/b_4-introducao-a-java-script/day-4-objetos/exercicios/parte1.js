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
console.log(info);

/* Exercicio 3 */
for (let key in info) {
    console.log(key)
}

/* EXERCICIO 4 */
for (let i in info) {
    console.log(info[i])
}

/* EXERCICIO 5  */
let newInfo = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'sim',
};
for (let i in info, newInfo) {
    if(info[i] === newInfo[i]) {
        console.log('ambos recorrentes');
    } else {
        console.log(info[i], "e", newInfo[i])

    }
}