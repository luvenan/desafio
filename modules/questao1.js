//O código abaixo pega um número n e imprime uma escadas de asteriscos com altura n, em que a base tem n asteriscos.

function fazerEscada(n) {
    for (let i = 1; i <= n; i++) {
        console.log("*".repeat(i));
    }
}

//Exporta a funnção para o app.js
exports.fazerEscada = fazerEscada;

//Testes - verificar se a altura da escada = n e se a base = n asteriscos e se cada nível tem n-1 asteriscos, alem de se nao tem espaço entre eles e se nao tem espaço no final, se a escada esta sendo impressa na ordem crescente. Como não é possivel checkar direto no log, vou precisar fazer um mockup do log no unit testing.

//Outra opção é em vez de logar no console, criar um array com os asteriscos que são logados corretamente no final, mas podem ser examinados para verificar se estão batendo com os requisitos do problema. Parece mais razoável. 