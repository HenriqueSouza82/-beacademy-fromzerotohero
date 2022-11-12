Algoritmo "CALCULOGEOMETRICO"
// Lógica de Programação
// Professor   : Marcos Monteiro 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : HENRIQUE DE SOUZA LEAO ALBUQUERQUE
// Data atual  : 10/11/2022
Var
// Seção de Declarações das variáveis 
area, perimetro         :       real;
resultado               :       real;
altura,base             :       real;
opcao                   :       caractere;
lado1,lado2             :       real;
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreva ("Escolha a opção, 1 ou T- Triangulo / 2 ou Q - Quadrado: ")
leia(opcao)
escolha opcao
        caso "T" , "1"
        escreval (" Digite o primeiro lado do triangulo: ")
        leia (lado1)
        escreval (" Digite o segundo lado do triangulo: ")
        leia (lado2)
        escreval (" Digite a base: ")
        leia (base)
        escreval (" Digite a altura: ")
        leia (altura)
        area <- ((base * altura)/2)
        perimetro <- ((lado1)+(lado2)+(base))
        caso "Q" , "2"
        escreval (" Digite o lado do quadrado: ")
        leia(lado1)
        area <- ((lado1)*(lado1))
        perimetro <- ((lado1)* 4)
        outrocaso
        escreval ("Opção invalida")
fimescolha
escreval ("A área é: ", area)
escreval ("O perimetro é: ", perimetro)

Fimalgoritmo