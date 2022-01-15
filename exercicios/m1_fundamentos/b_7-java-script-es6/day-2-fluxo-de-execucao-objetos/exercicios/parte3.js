const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  //adiciona chave: valor ao objeto declarado 
  function adicionaNoite (objeto, chave, valor) {
      objeto[chave] = valor;
      console.log(objeto);
  }

  adicionaNoite(lesson2, 'turno', 'noite');

  //imprime todas as chaves de um objeto
  function keys (objeto) {
      console.log(Object.keys(objeto));
  }
  keys(lesson3)

  //imprime a quantidade de chaves o objeto possui = seu tamanho
  function tamanho (objeto) {
      console.log(Object.keys(objeto).length);
  }
tamanho(lesson3)

//imprime todos os valores associados as chaves dos objetos
function values (objeto) {
    console.log(Object.values(objeto));
}
values(lesson3)

//cria um objeto, e adiciona a ele mais objetos
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons)

//assim fica a visualuisação: 

      /*   allLessons = {
            lesson1 : {
                { materia: 'Matemática',
                numeroEstudantes: 20,
                professor: 'Maria Clara',
                turno: 'manhã' },
            }
             lesson2:  {
                materia: 'História',
                numeroEstudantes: 20,
                professor: 'Carlos',
                turno: 'noite' 
            },
            .
            .
            .
        } */

function totalStudents (objeto) {
    const teste = Object.entries(objeto.numeroEstudantes)
}
totalStudents(allLessons)