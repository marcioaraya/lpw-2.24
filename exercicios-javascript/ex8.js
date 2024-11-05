// 8.Crie um array com os nomes de 5 frutas e 
// utilize o método map para criar um novo array 
// com o tamanho (quantidade de caracteres) dos nomes das frutas

const frutas = ['morango', 'abacaxi', 'uva', 'maça', 'cereja'];
// ATENÇÃO: length é um ATRIBUTO e não MÉTODO
frutas_tamanho = frutas.map(function (x) {return x.length});

console.log(frutas_tamanho);

frutas_tamanho2 = frutas.map( fruta => fruta.length);

console.log(frutas_tamanho2);
