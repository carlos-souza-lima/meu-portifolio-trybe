// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'bergamota', 'melancia'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['uva', 'ameixa', 'limão'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  const salada = [...fruit, ...additional];
  return salada;
};

console.log(fruitSalad(specialFruit, additionalItens));