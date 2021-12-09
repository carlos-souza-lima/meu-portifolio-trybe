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

/* EXERCICIO 6  */
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
 livro = leitor['livrosFavoritos']
  console.log("O livro favorito de", leitor.nome, leitor.sobrenome, "se chama", '"'+ leitor.livrosFavoritos[0]['titulo']+'"')

/* EXERCICIO 7 */
leitor.livrosFavoritos[1] = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editor: 'Rocco',
};
/* console.log(leitor.livrosFavoritos) */

/* EXERCICIO 8 */

console.log(leitor.nome, "tem", leitor.livrosFavoritos.length, "livros favoritos")


/* PARTE 1 CONCLUIDA */