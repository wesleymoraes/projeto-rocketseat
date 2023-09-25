
//1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
const mensagem = "hello word";
//alert(mensagem)


//2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
const primeiroNumero = 10
const segundoNumero = 10
const soma = primeiroNumero + segundoNumero;

console.log("Resultado da soma:", soma);

//3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
const numero = 10

if (typeof numero === 'number') {
    console.log("É um número");
} else {
    console.log("Não é um número");
}





// 💡 Para saber o tipo de dado você pode usar o operador `typeof`

//4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
const string = "10"

if (typeof string === 'string') {
    console.log("É um string");
} else {
    console.log("Não é um string");
}
//5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
const booleano = true

if (typeof booleano === 'boolean') {
    console.log("É um booleano");
} else {
    console.log("Não é um booleano");
}
//6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

let Subtracao1 = 10;  // Você pode alterar este valor
let Subtracao2 = 5;   // Você pode alterar este valor

let subtração = Subtracao1 - Subtracao2;
console.log("Resultado da subtração:", subtração);

//7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
let multiplicação1 = 10;  // Você pode alterar este valor
let multiplicação2 = 5;   // Você pode alterar este valor

let miltiplicacao = multiplicação1 * multiplicação2;
console.log("Resultado da miltiplicacao:", miltiplicacao);
//8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
let divisao1 = 10;  // Você pode alterar este valor
let divisao2 = 5;   // Você pode alterar este valor

let divisao = divisao1 / divisao2;
console.log("Resultado da divisao:", divisao);
//9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
let valor = 4; // Você pode alterar este valor para testar

if (valor % 2 === 0) {
    console.log("É um número par");
} else {
    console.log("Não é um número par");
}

//10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".let valor = 3; // Você pode alterar este valor para testar
let impar = 4;
if (impar % 2 === 1) {
    console.log("É um número par");
} else {
    console.log("Não é um número par");
}