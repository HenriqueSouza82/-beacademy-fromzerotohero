//OPERADORES LÓGICOS


//Operador - INCREMENTO E DECREMENTO
//++ --
//Increment - funciona tanto na frente como no fim
let incrementeNumber = 4
console.log(incrementeNumber)
++incrementeNumber 
console.log(incrementeNumber)
incrementeNumber++
console.log(incrementeNumber)

//decrement
let decrementNumber = 30
console.log(decrementNumber)
--decrementNumber 
console.log(decrementNumber)
decrementNumber--
console.log(decrementNumber)







//Operadores Aritméticos
// + - / * %
let note1 = 10
let note2 = 8
let note3 = 9
let note4 = 7.6
let avg = (note1+note2+note3+note4)/4
console.log(avg)





//Operadores Relacionais e Igualdade
// < > == === != !== >= <= 
let numberRelation1 = 20
let numberRelation2 = 40

let relation = numberRelation1 != numberRelation2 // != Diferente no valor
console.log(relation)
relation = numberRelation1 !== numberRelation2 // != Diferente no valor ou diferente no tipo (or)
console.log(relation)
relation = numberRelation1 == numberRelation2 // != Igual no valor
console.log(relation)
relation = numberRelation1 === numberRelation2 // != Igual no valor e no tipo (and)
console.log(relation)


//Operadores de Atribuição
let newNumber = 2
newNumber += 40
newNumber *= 3
newNumber -= 60
newNumber /= 6
newNumber %= 5

console.log(newNumber)

//Operadores condicionais (Ternário)
//(condition) ? true : false

let value = 24
let value2 = 32

//const newCondition = value >= value2 ? 'Isso é verdade' : 'Isso é mentira'
//console.log(newCondition)

const newCondition = value >= value2 ? 'Isso é verdade'
                            : value <= value2 ? 'Isso é verdade, 2 proposição':
                            'Resposta falsa'
            
console.log(newCondition)