Algoritmo "CONTADOR18E60REPITAATE"
// Lógica de Programação
// Professor   : Marcos Monteiro 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : HENRIQUE DE SOUZA LEAO ALBUQUERQUE
// Data atual  : 15/11/2022
Var
// Seção de Declarações das variáveis 
idade : inteiro;              //variavel idade
contme, contma : inteiro;     //contador menor / contador maior

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
contme<-0         //iniciado com 0
contma<-0
repita
      escreval ("Digite a idade: ")
      leia (idade)
      se idade < 18 entao
         contme<-contme+1
      fimse
      se idade >=60 entao
         contma<-contma+1
      fimse
ate idade =-99
escreval ("Menores que 18 anos: ", contme)
escreval ("Maiores que 60 anos: ", contma)
Fimalgoritmo