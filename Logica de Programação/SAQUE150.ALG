Algoritmo "SAQUE150"
// Lógica de Programação
// Professor   : Marcos Monteiro 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 12/11/2022
Var
// Seção de Declarações das variáveis 
limite , saque : real;
op : caractere;

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
limite <- 1000
saque <- 0
   repita
         escreval ("Limite de saque: " , limite)
         escreval ("Digite 1 - Saque : 2 - Sair")
         leia (op)
         
         se (op = "1") entao
         saque <- 150
         senao
              se (op = "2") entao
              interrompa
              fimse
         fimse
         
         se (saque < limite) entao
            limite <- limite - saque
         fimse
         
         se (limite < saque) entao
         escreval ("Limite insuficiente", limite)
         interrompa
         fimse
   ate limite < 150


Fimalgoritmo
