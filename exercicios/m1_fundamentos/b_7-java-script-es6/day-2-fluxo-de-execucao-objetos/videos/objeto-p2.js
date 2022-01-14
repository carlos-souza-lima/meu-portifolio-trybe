const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    createdBy: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
  };

// console.log(coolestTvShow) 
// console.log(coolestTvShow.createdBy.length)

console.log(Object.keys(coolestTvShow));

const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
    };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };

//   function imprimeObjeto(objeto) {
//         console.log(Object.keys(objeto))
//   }
//   console.log(imprimeObjeto(student1))

  //função em forma de constante
const objStudent = (student) => {
        //esta const contem apenas as chaves do objeto Student
        //ficam salvas em forma de Array
    const keysStudent = Object.keys(student);
        //este FOR vai percorrer todas as chaves do Array
    for (index in keysStudent) {
        console.log
        ( //dentrtoo deste paragrafo é feita uma concatenação de strings
            `${keysStudent[index]}, Nível: ${student[keysStudent[index]]}`)
            //${keysStudent[index]} -> puxa o valor correspondente ao index no array
            //, Nível: -> adiciona a frase
            //${student[keysStudent[index]]} -> puxa o valor associado a esta chave no objeto.
    }
}

objStudent(student1)
objStudent(student2)