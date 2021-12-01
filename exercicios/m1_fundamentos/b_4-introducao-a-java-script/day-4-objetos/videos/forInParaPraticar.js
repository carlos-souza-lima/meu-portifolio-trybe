/* exercicio 1 */
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };

  /* a quantidade de repetições está relacionada com a quantidade de chaves */
    /* ou seja : n chaves == n repetições dentro do for */

for (let key in names) {
    console.log('Olá ' + names[key])
    /* vai imprimir o valor na respectiva chave. */
}