Algoritmo "IDADE"
// Lógica de Programação
// Professor   : Marcos Monteiro 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Henrique de Souza Leao ALbuquerque
// Data atual  : 08/11/2022
Var
// Seção de Declarações das variáveis
idade : inteiro;
nome : caractere;


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreval ("Digite seu nome: ")
leia (nome)
escreval ("Digite sua idade: ")
leia (idade)
escreval ("Seu nome é: ", nome)
escreval ("Sua idade é: ", idade)

se (idade < 18) entao
   escreval (nome, " é MENOR de idade")
senao
     se(idade > 18) e (idade < 60) entao
     escreval (nome, " é um ADULTO")
     senao
     escreval (nome, " é um IDOSO")
     fimse
fimse


Fimalgoritmo