// Escreva uma função que receba um array de números 
// e retorne a soma de todos os elementos, utilizando reduce e uma arrow function
const numbers = [15, 2, 1, 4];

//console.log(resultado(1, 1));
function soma(vetor) {
    return vetor.reduce((total, num) => total + num, 0);

}

console.log(soma(numbers));
