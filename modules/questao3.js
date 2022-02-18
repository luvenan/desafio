//Passos:
//1. Criar array com todas as substrings
//2. Crirar função que confere se uma string e anagrama de outra
//3. Usar um nested loop pra iterar cada string do array e ver se é anagrama de outra, usando a função acima como callback e o array como argumento. Cada vez que for, a contagem de anagram pairs aumenta em um. Imprimir a contagem de anagram pairs. 


//Encontra todas as substrings de uma string e coloca em um array
function encontrarSubstrings(palavra) {
    let arrSubstrings = [];
    for (let i = 0; i < palavra.length; i++) {
        for (let j = i + 1; j < palavra.length + 1; j++) {
            arrSubstrings.push(palavra.substring(i, j));
        }
    }
    // console.log(arrSubstrings);
    return arrSubstrings;
}

//Verifica se uma string é anagrama de outra
function verificarAnagrama(a, b) {
    if(a.length !== b.length){
       return false;
    }
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    if(str1 === str2){
       return true;
    } else { 
       return false;
    }
 }

//Procurar pares de anagramas
function procurarPares(palavra){
    const arrSubstrings = encontrarSubstrings(palavra);
    // console.log(arrSubstrings)
    let count = 0;
    for (let i = 0; i < arrSubstrings.length; i++) {
        for (let j = 0; j < arrSubstrings.length; j++) {
            if ( (i < j) && (verificarAnagrama(arrSubstrings[i], arrSubstrings[j])) ) {
                // console.log(arrSubstrings[i] + ' : indexes are ' + i + ' and ' + j);
                count++;
            }
        }
    }
    console.log(count)
    return count;
}

//Exporta as funções para o app.js
exports.encontrarSubstrings = encontrarSubstrings;
exports.verificarAnagrama = verificarAnagrama;
exports.procurarPares = procurarPares;