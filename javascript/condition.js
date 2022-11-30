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

//Throw and try catch
function myAge(myage){
    if(!myage) {
        throw 'Voce precisa colocar a idade'
    }
    console.log('Eu executei depois do erro')
}
try {
    myAge(20)
    console.log('Já tratei e deu certo')
    } catch (error) {
        console.log(error)
    }
    console.log('Programa continua')


    //For
    //for (inicio; condição; interação)
for (let i = 1; i<=10; i++) {
    console.log(i); //incremento
}
for (let x = 10; x>=1; x--) {
    console.log(x); //incremento
    if (x === 5) {
        break
        //continue
    }
    console.log(x)
}

//WHILE (Enquanto)
let n = 1
while (n <= 20) {
    console.log(n)
    n++
}

//For of
//Array

let numero = [2,4,6,8,10]

for (num of numero) {
    if (num >= 4) {
        console.log(num)
    }
}

//For in
let nomes = {
    name: 'Henrique',
    weight: 70,
    age: 39
}

for (item in nomes) {
    //Tipo1 capturar valores do objeto for in
    console.log(nomes["name"])
    console.log(nomes["age"])
    console.log(nomes["weight"])
    //Tipo2 para capturar todo objeto
    console.log(nomes)
    //Tipo3 mostrar valores dentro das propriedades
    console.log(nomes[item])
    //Tipo4 capturar valores individuais das propriedades de um objeto
    console.log(nomes.name)
}

let arrayName = [
    'Henrique',
    'Kenia',
    'Giovanna'
]

for (item in arrayName) {
    //console.log(arrayName) // mostra todo o array
    //console.log(arrayName[item]) // mostra todos os valores
    //console.log(arrayName[2]) // mostra diretamente um valor
    console.log(item) // index dos vetores 
}


    
