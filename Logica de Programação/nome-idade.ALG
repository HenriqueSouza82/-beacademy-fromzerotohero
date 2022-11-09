Algoritmo "Nome-Idade"
// Disciplina : Lógica de Programação
// Professor : Marcos Monteiro
Var // Variaveis para nome e idade do usuario
nome: caractere
idade: inteiro
Inicio
// Solicita dados do usuário
escreva("Digite seu nome: ")
leia(nome)
escreva("Digite sua idade: ")
leia(idade)
escreval("Nome: ", nome, ", Idade:", idade)
escreval("Idade é maior que 18:", idade > 18)
escreval("A idade é diferente de 25:",(idade <> 25))
escreval("A idade é diferente de 25 e o nome igual a Marcos:",(idade <> 25) e (nome = "Marcos"))
escreval("A idade é diferente de 25 OU nome igual a Marcos:", (idade <> 25) ou (nome = "Marcos"))
escreval("Idade é divisivel por 2:", (idade % 2) = 0)
Fimalgoritmo