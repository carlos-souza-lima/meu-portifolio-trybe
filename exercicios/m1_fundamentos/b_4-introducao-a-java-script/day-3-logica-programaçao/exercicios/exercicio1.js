//* imprimir um quadrado com n numero de colunas E n numero de linhas. */


/* variavel N*/
let n = 6;

/* valor que sera impresso */
let teste = '*'; 

/* array para armazenar os valores */
let asteriscos = [];

for (let i =0 ; i < n; i += 1) 
/* vai repetir a ação enquanto indice(i) for menor que o valor de (n)*/
{
    if (asteriscos[i] === undefined)
    /* condição: Se o valor correspondente ao i for undefined (indefinido) */
    /* execute o seguinte comando: */
    {
       for (let ii = 0; ii < n; ii +=1) 
       /* vai repetir a ação enquanto indice(ii) for menor que o valor de (n)*/
       {
        asteriscos[ii] = teste
        /* AÇÃO: a posicição da array indicada/relacionada pelo ii. recebera o valor da variavel teste */
       }

    }
    /* imprime o array */
    console.log(asteriscos) 

    /* por estar dentro do for vai imprimir o mesmo array: a quantidade de vezes determinada pela variavel n */
}
