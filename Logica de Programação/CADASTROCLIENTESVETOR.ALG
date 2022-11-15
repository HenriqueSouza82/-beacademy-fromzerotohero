Algoritmo "CADASTROCLIENTESVETOR"
// Lógica de Programação
// Professor   : Marcos Monteiro 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Henrique de Souza Leao Albuquerque
// Data atual  : 15/11/2022
Var
// Seção de Declarações das variáveis 
nome, endereco, fone : vetor [1..5] de caractere
cpf, rg : vetor [1..5] de inteiro
i : inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
para i<-1 ate 5 faca
     escreval ("Digite o NOME: ")
     leia (nome[i])
     escreval ("Digite o CPF: ")
     leia (cpf[i])
     escreval ("Digite o RG: ")
     leia (rg[i])
     escreval ("Digite o Endereço: ")
     leia (endereco[i])
     escreval ("Digite o DD + Telefone: ")
     leia (fone[i])
fimpara
para i<-1 ate 5 faca
     escreval (" NOME : " , nome[i] , " CPF : ", cpf[i])
     escreval (" RG : " , rg[i] , " FONE : " , fone[i])
     escreval (" ENDEREÇO : " , endereco[i])
fimpara


Fimalgoritmo