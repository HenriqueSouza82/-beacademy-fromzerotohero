Algoritmo "ALUNOSMEDIAVETOR"
// Lógica de Programação
// Professor   : Marcos Monteiro 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Henrique de Souza Leao ALbuquerque
// Data atual  : 15/11/2022
Var
// Seção de Declarações das variáveis 
nome: vetor [1..4] de caractere
nota1, nota2, media : vetor [1..4] de real
i : inteiro;


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
para i<-1 ate 4 faca
     escreval ("Digite o NOME do aluno: ")
     leia (nome[i])
     escreval ("Digite a 1ª NOTA: ")
     leia (nota1[i])
     escreval ("Digite a 2ª NOTA: ")
     leia (nota2[i])
     media[i] <- ((nota1[i] + nota2[i])/2)
fimpara
para i<-1 ate 4 faca
     se media[i] >=6 entao
        escreval (nome[i], " Obteve média: ", media[i] , " APROVADO(a) ")
     fimse
     se media[i] <6 entao
        escreval (nome[i], " Obteve média: ", media[i] , " REPROVADO(a) ")
     fimse
fimpara
Fimalgoritmo