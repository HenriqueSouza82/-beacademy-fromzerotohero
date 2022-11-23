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
