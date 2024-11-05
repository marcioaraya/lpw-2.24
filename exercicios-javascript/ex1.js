function fatorial(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

console.log(fatorial(6));

// usando arrow function e operador ternário 
// operador ternário 
//        condição ? valor_se_verdadeiro : valor_se_falso;
const fat2 = (n) => (n == 1) ? 1 : n * fat2(n - 1);

console.log(fat2(5));