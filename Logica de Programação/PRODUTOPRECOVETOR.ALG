Algoritmo "PRODUTOPRECOVETOR"
// Lógica de Programação
// Professor   : Marcos Monteiro 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 15/11/2022
Var
// Seção de Declarações das variáveis 
produto : vetor [1..10] de caractere
preco : vetor [1..10] de real
i : inteiro;

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
para i<-1 ate 10 faca
     escreval ("Digite o NOME do", i, " º produto: ")
     leia (produto[i])
     escreval ("Digite o PREÇO do", i, " º produto: ")
     leia (preco[i])
fimpara

para i<-1 ate 10 faca
     escreval ("Produto: " , produto[i], " Preço: ", preco[i])
fimpara



Fimalgoritmo