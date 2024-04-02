let nome = "Rodolfo"
console.log(nome)

nome = "Roldolfo Gonçalves"
console.log(nome)

const idade = 38
console.log(idade)

// idade = 39
// console.log(idade)

console.log(`O nome de usuário é: ${nome} essa pessoa tem ${idade} anos `)

const name1 = prompt("Digite o seu nome")
// console.log("O nome digitado foi " + name1 )
// console.log(`O nome digitado foi ${name1}` )
// alert(`o Nome digitado foi ${name1}`)

console.log("teste")
console.error("Deu ruim! 😥")
console.warn("Alerta 😯")

// const m = 5

// if(m >=5) {
//     console.log("M é maior que 5" + "valor de M = " + m)
// }

// const user = prompt("Digite o seu nome") 

// if(user == 'Rodolfo') {
//     console.log(`Bem vindo ${user}`)
// }else{
//     console.log(`Uhm ... novo por aqui ${user}`)
// }

// const nota = prompt("Digita a média final")

// if( nota >= 7){
//     console.log("Aprovado")
// }else{
//     console.log("Reprovado")
// }

// const nota = prompt("Digita a média final")

// if( nota >= 7){
//     console.log("Aprovado")
// }else if(not > 5 && nota < 6){
//     console.log("Recuperação")
// }else if(not >= 6){
//     console.log("Trabalho geral")
// }else{
//     console.log("Reprovado")
// }

const disSemana = parseInt(prompt("Dia da Semana"))

if(disSemana == 1){
    alert("Segunda")
}
else if(disSemana == 2){
    alert("Terça")
}
else if(disSemana == 3){
    alert("Quarta")
}
else if(disSemana == 4){
    alert("Quinta")
}
else if(disSemana == 5){
    alert("Sexta")
}
else if(disSemana == 6){
    alert("Sábado")
}
else if(disSemana == 7){
    alert("Domingo")
}
else{
    alert("Dia Inválido")
}

for(let i = 1; i<=100; i++){
    console.log(i);
}