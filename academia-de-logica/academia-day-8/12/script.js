let adic = document.querySelector('#adic');
let sub = document.querySelector('#sub');
let mult = document.querySelector('#mult');
let divi = document.querySelector('#divi');

let result = document.querySelector('.resultado')

let pResultado = document.querySelector('.pResultado')
console.log(pResultado)


function resgateA() {
  let inpA = document.querySelector('#a');
  let valorA = parseInt(inpA.value)
  return valorA
}
function resgateB() {
  let inpB = document.querySelector('#b');
  let valorB = parseInt(inpB.value)
  return valorB
}

adic.addEventListener("click",soma)
function soma() {  
  let somaAeB = resgateA() + resgateB();
  pResultado.innerText = somaAeB
}

sub.addEventListener('click', subtracao);
function subtracao () {
  let subAeB = resgateA() - resgateB()
  pResultado.innerText = subAeB;
}

mult.addEventListener('click', multiplicacao)
function multiplicacao() {
  let multAeB = resgateA() * resgateB()
  pResultado.innerText = multAeB;
}

divi.addEventListener('click', divisao)
function divisao() {
  let diviAeB = resgateA() / resgateB()
  pResultado.innerText = diviAeB;
}