//O código abaixo pega um número n e imprime uma escadas de asteriscos com altura n, em que a base tem n asteriscos.

function fazerEscada(n) {
    let arrEscada = [];
    for (let i = 1; i <= n; i++) {
        //Cria array de elementos da escada para testes
        arrEscada.push("*".repeat(i));
        //Imprime a escada no console
        console.log(arrEscada[i-1]);
    }
    return arrEscada;
}

//Exporta a funnção para o app.js
exports.fazerEscada = fazerEscada;