// Exemplo 1

function myFristFunction (){
 //Entra meu código
 console.log("Olha a função.")
}
//Executando a função
myFristFunction()


//Parametros e argumentos
//Somar dois numemos
function sum(number1,number2) {
    console.log(number1 + number2)
}
sum(32 , 24)

//retorno
function myFristFunctionWithReturn(num1, num2){
let total = (num1 * num2)
return total
}
console.log(myFristFunctionWithReturn (20 , 20))

//Teoria prato comida
//Restarurante
function meupratodecomida(comida1,comida2,comida3,comida4){
    return `Meu prato de comida é: ${comida1}, ${comida2}, ${comida3}, ${comida4}`
}
const prato = meupratodecomida ('Arroz', 'Feijão', 'Bife', 'Batata Frita')
console.log(prato)

// arrow function
const arrowfunction = (numero1 , numero2) => {
    let total = numero1 * numero2
    return total;
}
const result = arrowfunction (20 , 4)
console.log(result)











