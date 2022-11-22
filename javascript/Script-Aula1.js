// Comentário em linha

/* Comentário em bloco */


//TIPOS DE DADOS

//STRING - textos - "", " , ``

console.log ('Olha eu no aspas simples!')

//Se usar no inicio aspas simples no meio tem que ser duplas
//e vice e versa
console.log ("Olha eu no 'aspas' simples!")
//se usar crase pode tudo dentro do texto inclusive quebrar ele
console.log (`Olha 'eu' no 
"aspas" 
simples!`)


// NUMEROS

console.log(12) // integer
console.log(24.5) // float
console.log(12.24/4) // calc
console.log(Infinity) // infinito
console.log(50+(53*3.5))
console.log(Math.round(50+(53*3.5))) // arredonda o calculo

//BOOLEAN
console.log(24 > 32) //falso
console.log(24 < 32) //verdadeiro

//Undefined - indefinido (nao existe)
console.log(undefined)

//Nulo (existe sem resultado)
console.log(null)

//null <> undefined (falso)
// console.log(null <> undefined)

/* Objetos - Object 
 - Propriedades / Atributos
 - Funcionalidades / Métodos
{} - indica um objeto - propriedade e valor
 */
console.log({
    marca: 'Fiat',
    largura: '550cm',
    peso: 1,
    velocidade: (90*200)*2,
    andar: function () {
        console.log (`Sua velocidade é de 200`)
    }
})


/*Array (vetores)
- Lista de valores
- Agrupador de dados
*/
console.log ([ //array 4 itens e começa apartir do 0
    "Bolacha", //0
    "Coca-Cola", //1
    "Verdura", //2
    "água", //3
])


/* VARIÁVEIS (var, let, const)
- var - variável que pode sofrer mudanças de valor
ao longo do código

- let - variável que pode sofrer mudanças de valor ao longo do código,
geralmente usado dentro de um escopo (bloco de código)

- const - variável constante, não pode receber outro valor,
seu valor é fixo em todo o código
*/

