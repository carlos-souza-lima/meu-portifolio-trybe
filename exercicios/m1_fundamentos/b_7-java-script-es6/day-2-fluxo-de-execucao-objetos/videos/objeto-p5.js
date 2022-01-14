// 1 OBJ
const person = {
    name: 'jose',
    lastName: 'Gomes',
    age: 20,
  };

//  3 OBJ
  const family = {
    name: 'maria',
    children: ['Maria', 'João'],
    age:55,
    wife: 'Ana',
  };

  //  2 OBJ
  const info = {
    name: 'Alberto',
    age: 23,
    job: 'engenheiro',
  };
  Object.assign(person,family ,info)
  console.log(person.age)
  
  /* Output
    { name: 'Alberto',
    lastName: 'Gomes',
    age: 23,
    job: 'engenheiro',
    children: [ 'Maria', 'João' ],
    wife: 'Ana'
    } */


    const person = {
        name: 'Roberto',
      };
      
      const lastName = {
        lastName: 'Silva',
      };
      
      const clone = Object.assign(person, lastName);
      
    //   console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
    //   console.log(person); // { name: 'Roberto', lastName: 'Silva' }

      person.teste = 'oi';
    //   console.log(clone); 
    //   console.log(person); 

      clone.novo = ['segundo', 'teste']
    //   console.log(clone); 
    //   console.log(person); 

    const person = {
        name: 'Roberto',
      };
      clone.name = 'Maria';

console.log('Mudando a propriedade name através do objeto clone')
console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
console.log('--------------');

person.lastName = 'Ferreira';

console.log('Mudando a propriedade lastName através do objeto person');
console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }