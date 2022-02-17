//O código abaixo pega um número n e imprime uma escadas de asteriscos com altura n, em que a base tem n asteriscos.

function fazerEscada(n) {
    for (let i = 1; i <= n; i++) {
        console.log("*".repeat(i));
    }
}

fazerEscada(10);