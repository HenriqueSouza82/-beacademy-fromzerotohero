// type conversion

// convertendo string para numero e numero para string

console.log(Number('9') + 24);
console.log(typeof String(9) + ' Converteu!');

// contar caracteres

let oneWord = "Henrique"
console.log(oneWord.length) // contando caracteres

// Maiusculas e minusculas

let phrase = "Olha o bonde do Henrique"
console.log (phrase.toUpperCase())
console.log (phrase.toLowerCase())

//Convertendo para Inteiro
let decimalnumber = 32.55
console.log(parseInt(decimalnumber))

let integernumber = 24
console.log(parseFloat(integernumber))

//arredondando numeros gigantes
let nicenumber = 24.92341231241232123
console.log(nicenumber.toFixed(4)); //(casas decimais)
console.log(nicenumber.toFixed(4).replace('.',',')); //substituicao . para virgula

//Precisao numerica
let olhernumber = 129/37
console.log(Number (olhernumber.toPrecision()))

// Separando texto que contem espacos

let newPhrase = "Fala meus amigos e amigas"
console.log(newPhrase)
let phraseToArray = newPhrase.split(' ')
console.log(phraseToArray)

//convertendo novamente o texto para string
// . join (" ") -> Permite que eu gere separações (- , _ / '')

let phraseModify = phraseToArray.join (" ").toLowerCase()
console.log(phraseModify)

//Verificar se comtem paçavras ou letras

let stringInclude = "Veem para a festa, que o pai ta on"
console.log (stringInclude.includes ("festa"))

//Objetos

let ArrayInclude = [
    "HenriqueSouza",
    "Kenia",
    "Giovanna",
    "Amor",
    "Familia",
    {
        fristName: "Henrique",
        lastName: "Souza"
    }   
]
console.log(ArrayInclude.includes("Henrique"))

// String startWith - começa com
console.log(stringInclude.startsWith("fes"))
// String endWith - termina com
console.log(stringInclude.endsWith("ai"))

// Transformando Array em caracteres

let wordToArray = "Quem está gostando da aula?"
console.log(Array.from(wordToArray))

//Manipulando Arrays

const alfabeto = ["A","B","C","D","E"]
console.log(alfabeto)

//Adicionar item no fim do arrray
console.log(alfabeto.push("F"))
console.log(alfabeto)
//Adicionando item no comeco do array
console.log(alfabeto.unshift("AA"))
console.log(alfabeto)
//Removendo item do fim do array
console.log(alfabeto.pop())
console.log(alfabeto)
//Removendo item do inicio do array
console.log(alfabeto.shift())
console.log(alfabeto)
//Pegar somente alguns elementos do Array
//Não modificar o array
console.log(alfabeto.slice(0,3))
console.log(alfabeto)
//remover 1 ou mais itens do array
/*console.log(alfabeto.splice(1,3))
console.log(alfabeto)
alfabeto.splice(1,3)
console.log(alfabeto)
*/
//Encontrar a posição do array
let index = alfabeto.indexOf('E')
console.log(index)
alfabeto.splice(index, 1)
console.log(alfabeto)


