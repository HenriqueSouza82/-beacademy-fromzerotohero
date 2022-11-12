Algoritmo "DEP-SAQUE"
// Lógica de Programação
// Professor   : Marcos Monteiro 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Henrique de Souza Leao Albuquerque
// Data atual  : 08/11/2022
Var
// Seção de Declarações das variáveis 
saldoinicial            : real;
saldofinal              : real;
saque                   : real;
deposito                : real;
operacao                : inteiro;

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreval ("Digite o saldo inicial: ")
leia (saldoinicial)
escreval ("Seu saldo é: ", saldoinicial)
escreval ("Digite a operação: 1 - DEPOSITO ; 2 - SAQUE")
leia (operacao)
se (operacao = 1) entao
   escreval("Digite o valor do deposito: ")
   leia (deposito)
   saldofinal <- saldoinicial + deposito
   escreval ("Seu saldo Final é: ", saldofinal)
fimse
se (operacao = 2) entao
   escreval ("Digite o valor do saque: ")
   leia (saque)
   saldofinal <- saldoinicial - saque
   escreval ("Seu saldo Final é: ", saldofinal)
fimse

Fimalgoritmo