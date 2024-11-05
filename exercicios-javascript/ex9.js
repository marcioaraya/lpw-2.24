//9. Crie um array com números inteiros e 
// utilize o método filter para filtrar apenas os números pares.
// gerar um vetor com 10 números aleatórios
const vetor =[];
let ok=false;
for(i=0; i<10; i++) {
    ok = false;
    do {
        let num = Math.floor(Math.random() * 100);
        if (!vetor.includes(num)){
            vetor.push(num);
            ok = true;
        }
        
    } while(!ok);

}

console.log(vetor);

const pares = vetor.filter(num => num%2 === 0);

console.log(pares);