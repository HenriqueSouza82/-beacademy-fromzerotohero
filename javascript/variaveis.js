/* VARIÁVEIS (var, let, const)
- var - variável que pode sofrer mudanças de valor
ao longo do código

- let - variável que pode sofrer mudanças de valor ao longo do código,
geralmente usado dentro de um escopo (bloco de código)

- const - variável constante, não pode receber outro valor,
seu valor é fixo em todo o código
*/
/*
// declarar
var name
let name2
//variaveis fracamente tipadas e dinamicas
const name3 = "Henrique"
*/
// variavel global, local, hoisting

//Globais
/*
//Hoisting -> var
var name = "Henrique"
console.log ('Variavel name existe aqui?', name)
{
    var name = "Henrique"

}
 console.log('Variavel name existe aqui?', name)
*/
/*
let name = "Henrique"
console.log ('Variavel name existe aqui?', name)
{
    let name = "Kenia"
    console.log('Meu nome chegou aqui?', name)
}
 console.log('Variavel name existe aqui?', name)
 //scope - local e global - Name é executado apenas dentro do escope, let e const
*/

//Objetos
const human = {
    name: "Henrique",
    age: 39,
    weight: 78,
    eatleta: true,
    anda: function andando(){
        console.log ('Eu ando muito')
    }

} //objeto

// console.log({ human })

// console.log(human.age)
// console.log(human.eatleta)

// Concatenar (+)
console.log("O humano " + human.name + " tem a idade " + human.age)

// Interpolação
console.log (`O humano ${human.name} tem a idade ${human.age}`)

//Arrays - lista de dados que tem o valores dentro delas
const animals = [
    "Elefante", //0
    "Gato",     //1
    "Leão",     //2
    "Cachorro"  //3
    { //4
        name: "Henrique",
        age: 2,
        weight: 5
    }

]
console.log (animals[4].age)

console.log (animals[2])



