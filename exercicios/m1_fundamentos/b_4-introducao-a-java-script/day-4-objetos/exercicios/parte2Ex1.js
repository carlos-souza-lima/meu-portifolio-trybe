/* EXERCICIOS FUNÇÕES */

/* EXERCICIO 1 */
function verificacao(palavra) {
    let palavraSeparada = palavra.split("")
    console.log(palavraSeparada)

    palavraAoContrario = palavraSeparada.reverse()
    console.log(palavraAoContrario)

    palavraInvertida = palavraAoContrario.join('')
    console.log(palavraInvertida)
    

    if(palavraInvertida === palavra) {
        console.log(true)
    }
    else {
        console.log (false)
    }
}
verificacao('101')