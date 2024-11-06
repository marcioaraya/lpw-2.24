function aleatorio(qtd, ini, fim){
    const vet = [];
    for(i=0; i<qtd; i++){
        let nr = ini + Math.round(Math.random()*(fim-ini));
        vet.push(nr);
    }
    return vet;
}

console.log(aleatorio(20, 20, 0));