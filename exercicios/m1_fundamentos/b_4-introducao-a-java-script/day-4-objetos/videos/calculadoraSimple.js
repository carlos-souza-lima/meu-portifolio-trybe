/* CALCOLADORA COM AS OPERAÇÕES BASICAS */


function calcula(operador, num1, num2) {
    let result; 
    if(operador === '+') {
        result = num1 + num2;
        console.log(result)
    } else
    if (operador === '-') {
        result = num1 - num2;  
        console.log(result); 
    } else
    if (operador === '*') {
        result = num1 * num2;
        console.log(result);
    } else
    if (operador === '/') {
        result = num1 / num2;
        console.log(result);
    }else
    if (operador === '%') {
        result = num1 % num2;
        console.log(result);
    }
}
calcula('%', 80, 4)