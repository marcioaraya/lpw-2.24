const pessoa = {
    nome: "Eduardo",
    idade: 30,
    hobbies: ['Leitura', 'Natação', 'Futebol'],
    apresentar(){
        console.log(`O meu nome é ${this.nome}. Minha idade é ${this.idade}. Meus hobbies são ${this.hobbies}.`)
    }

}

pessoa.apresentar();

console.log(JSON.stringify(pessoa));


