Algoritmo "exemploSE"
// Lógica de Programação
// Professor   : Marcos Monteiro 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Henrique de Souza Leão Albuquerque
// Data atual  : 08/11/2022
Var
// Seção de Declarações das variáveis 
nome : caractere;
salario : real;

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreval ("Digite seu nome: ")
leia (nome)
escreval ("Digite seu salario: ")
leia (salario)
se (salario > 1200) entao
   escreval (nome, " ,Seu salário é maior que o mínimo!")
   senao
        se(salario < 1200) entao
        escreval (nome, " ,Seu salário é menor que o mímimo!")
        senao (salario = 1200) entao
        escreval (nome, " ,Você recebe um salário mínimo")
        fimse
   fimse
fimse


Fimalgoritmo
