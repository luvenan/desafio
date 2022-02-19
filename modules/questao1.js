//Questão 1 - Escreva um algoritmo que mostre na tela uma escada de tamanho n utilizando o caractere * e espaços. A base e altura da escada devem ser iguais ao valor de n. A última linha não deve conter nenhum espaço.

//O código abaixo pega um número n e imprime uma escadas de asteriscos com altura n, em que a base tem n asteriscos.

function fazerEscada(n) {
    let arrEscada = [];
    console.log('Resultado:');
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