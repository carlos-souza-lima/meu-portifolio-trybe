/* let diasDaSemana = {
    1: 'domingo',
    2: 'segunda',
    3: 'terça',
    4: 'quarta',
    5: 'quinta',
    6: 'sexta',
    7: 'sábado',
    };
    
    diasDaSemana.1; // SyntaxError: Unexpected number
    console.log(diasDaSemana['1']); // domingo */

let conta = {
  agencia: '0000',
  banco: {
    cod: '012',
    id: 4,
    nome: 'TrybeBank',
  },
};

let infoDoBanco = 'banco';

/* console.log(conta[infoDoBanco]); */

console.log(conta[infoDoBanco]['nome']); 