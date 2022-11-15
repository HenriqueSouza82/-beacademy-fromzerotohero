Algoritmo "MATRIZDIAGONALPRISEC"
// Lógica de Programação
// Professor   : Marcos Monteiro 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : HENRIQUE DE SOUZA LEAO ALBUQUERQUE
// Data atual  : 15/11/2022
Var
// Seção de Declarações das variáveis 
mat : vetor [0..2, 0..2] de inteiro
princ , secund : inteiro
i , x: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
princ <- 0
secund <- 0
para i de 0 ate 2 faca
para x de 0 ate 2 faca
     escreval (" Digite a linha: " , i , " E a coluna" , x , " : ")
     leia(mat[i,x])
fimpara
fimpara
para i de 0 ate 2 faca
    se i = x entao
    princ <- princ + mat[i,x]
    fimse
    se (i+x) = (3-1) entao
    secund <- secund + mat[i,x]
    fimse
fimpara

escreval (" Soma diagonal principal: ", princ )
escreval (" Soma diagonal secundária: ", secund )



Fimalgoritmo