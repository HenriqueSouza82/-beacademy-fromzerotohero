Algoritmo "LOGIN-SENHA"
// Lógica de Programação
// Professor   : Marcos Monteiro 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Henrique de Souza Leao Albuquerque
// Data atual  : 12/11/2022
Var
// Seção de Declarações das variáveis 
nome, senha : caractere;
x     : inteiro;

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
x <- 0
enquanto (x < 3) faca
escreval ("-> Digite seu nome: ")
leia (nome)
escreval ("-> Digite sua senha: ")
leia (senha)
     se (nome <> "Henrique") ou (senha <> "1234") entao
         escreval (" Usúario ou senha incorretos!")
         escreval (" Digite - Usuario e senha novamente")
         x <- x + 1
     fimse
     se (nome = "Henrique") e (senha = "1234") entao
         escreval ("Seja bem vindo ", nome)
         x <- x + 1
         interrompa
     fimse
fimenquanto


Fimalgoritmo