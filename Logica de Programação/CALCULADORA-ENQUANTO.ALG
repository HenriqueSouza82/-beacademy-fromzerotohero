Algoritmo "Calculadora"
// Lógica de Programação
// Professor   : Marcos Monteiro 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Henrique de Souza Leao Albuquerque
// Data atual  : 10/11/2022
Var
// Seção de Declarações das variáveis 
numero1,numero2,resultado : real;
operacao : caractere;
x, opcao : inteiro;
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
x <- 1
enquanto (x = 1) faca
escreva ("Digite o primeiro numero: ")
leia (numero1)
escreva ("Digite a operação desejada: ")
leia (operacao)
escreva ("Digite o segundo numero: ")
leia (numero2)
escolha operacao
        caso "-"
        resultado <- (numero1) - (numero2)
        caso "+"
        resultado <- (numero1) + (numero2)
        caso "*"
        resultado <- (numero1) * (numero2)
        caso "/"
        resultado <- (numero1) / (numero2)
fimescolha
escreval ("Resultado = ", resultado)
escreval ("Deseja efetuar outa operação: 1 - SIM ; 2 - NÃO")
leia(opcao)
x <- opcao
fimenquanto

Fimalgoritmo