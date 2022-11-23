// Função anônima (sem nome)

(function(){
 console.log('Henrique Função anônima')
})() // autoexecução

setTimeout (function(){
    console.log('Função que leva um tempo pra executar')
},3000)//3s

//Scope e Hosting função

/*let assunto = 'estudar'

function criarassunto (assunto) {
    return assunto //escopo local
}
console.log (assunto) // resposta => 'Estudar'
console.log (criarassunto (assunto)); // escopo global
*/
//parte 3
/*
let assunto = 'estudar'

function criarassunto (assunto) {
    assunto = "Escutar música"
    return assunto //escopo local
}
console.log (assunto) // resposta => 'Estudar'
console.log (criarassunto (assunto)); // escopo global - cariavel declarada dentro da funcao - resp escutar musica
*/
// parte 4
let assunto = 'estudar'

function criarassunto () { //sem parametro
    assunto = "Escutar música"
    return assunto //escopo local
}
console.log (assunto) // resposta => 'Estudar'
console.log (criarassunto (assunto)); // escopo global - cariavel declarada dentro da funcao - resp escutar musica


/* Hoisting
digaminhaidade()

function digaminhaidade(){
    return console.log(30)
}
*/
// callback
function minhafuncao (callback) {
    console.log('Inicio da minha funcao')

    callback (15, 15)

    console.log('Final da função')
}

minhafuncao(
    (num1, num2) => {
        return console.log(num1 * num2)
    }
)

// Function Construct

function Sum () {
    this.num1,
    this.num2,
    this.num3,
    this.calc = function (num1, num2, num3) {
        return total = num1 + num2 + num3
    }

}
/*
//
const math = new Sum()
//console.log(math)
//console.log(math.calc(10,20,30))
const num1 = math.num1 = 30
const num2 = math.num2 = 34
const num3 = math.num3 = 50

console.log(num1)
console.log(num2)
console.log(num3)
console.log(math.calc(num1,num2,num3))
*/
const math = new Sum ()
console.log(math.calc(20,40,15))


// funcao nativa data
const data = new Date()
console.log(data)