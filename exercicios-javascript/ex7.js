// 7.Crie um array com os nomes de 5 frutas e 
// utilize o método map para criar um novo array 
// com os nomes das frutas em letras maiúsculas.

const frutas = ['morango', 'abacaxi', 'uva', 'maça', 'cereja'];

frutas_maiuscula = frutas.map(function (x) {return x.toUpperCase()});

console.log(frutas_maiuscula);

frutas_maiuscula2 = frutas.map( fruta => fruta.toUpperCase());

console.log(frutas_maiuscula2);
