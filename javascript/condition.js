//IF and ELSE
//Se e se não
//> < == === != !==
/*
let num = 10
if (num>=5) {
    console.log('Sou maior que 5')
} else {
    console.log('Não sou maior que 5')
}
*/
// && (and), || (or), ! (NOT))
let num = 10
let num2 = 20
if (num >= 10 && num2>= 10) {
    console.log('VERDADEIRO')
} else {
    console.log('FALSO')
}


//Switch

let myExpression = 'a'

switch (myExpression) {
    case 'a':
        console.log('Apertou o A')
        break
    case 'b':
        console.log('Apertou o B')
        break
    case 'c':
        console.log('Apertou o C')
        break
    default:
        console.log('Voce apertou outra tecla', myExpression)
        break    
}


function calc (num1, operator, num2) {
    let result
    switch(operator) {
        case "+":
        result = num1 + num2
        break

        case "-":
        result = num1 - num2
        break

        case "*":
        result = num1 * num2
        break

        case "/":
        result = num1 / num2
        break

        default: console.log('Opção invalida')
        break
    }
    return result
}
console.log (calc(4,'*', 3))