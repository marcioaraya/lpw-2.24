const pessoa = { nome: 'Maria', idade: 25 };
let { nome, idade } = pessoa;
console.log(nome, idade);
//
// o código acima é equivalente a 
nome = pessoa.nome;
idade = pessoa.idade;