function criarArrSubstrings(palavra) {
//Encontra todas as substrings de uma string e coloca em um array
    let arrSubstrings = [];
    for (let i = 0; i < palavra.length; i++) {
        for (let j = i + 1; j < palavra.length + 1; j++) {
            arrSubstrings.push(palavra.substring(i, j));
        }
    }
    return arrSubstrings;
}

const test1 = criarArrSubstrings('baba');
console.log(test1);

// Usa um map para modificar as substrings e fazer ficarem em ordem alfabética
const map1 = test1.map(a => a.split('').sort().join(''));
console.log(map1);

//Possívels solução:
//1. Criar array com todas as substrings (done)
//2. Usar um map pra fazer as substrings ficarem em ordem alfabética
//3. Usar um reduce pra ver se as substrings são iguais
//4. Usar um filter pra filtrar as substrings que são iguais
//5. Contar o número de substrings ainda no array, dividir por 2, terei o número final de anagramas


//Outra tentativa:
//Iterate over each array element as an argument for a function that will check how many times each string appears in the array. Ok, let's try this first;

//Not working, only giving me the first time it appears it seems, plus missing longer strings... might work for counting but will come out wrong at one point, specially since it uses "indexOf"
//  count = map1.filter((x, y) => map1.indexOf(x) !== y);
//  console.log(count);


//This definetly works, counts the number of string pairs in the array. See if I can do it with the function for finding anagrams instead
function procurarStrings(arr){
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if ( (i < j) && (arr[i] === arr[j]) ) {
                console.log(arr[i] + ' : indexes are ' + i + ' and ' + j);
                count++;
            }
        }
    }
    console.log(count);
}
procurarStrings(map1);

//Confere se uma string é anagram de outra
function checkStringsAnagram(a, b) {
    let len1 = a.length;
    let len2 = b.length;
    if(len1 !== len2){
       console.log('Invalid Input');
       return
    }
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    if(str1 === str2){
       console.log("True");
    } else { 
       console.log("False");
    }
 }

 //  checkStringsAnagram("indian","ndiani")
// encontreAnagramas('palavra');
// encontreAnagramas('ovo');

//Procurar anagramas
function procurarAnagramas(arr){
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if ( (i < j) && (checkStringAnagram(arr[i], arr[j])) ) {
                console.log(arr[i] + ' : indexes are ' + i + ' and ' + j);
                count++;
            }
        }
    }
    console.log(count);
}


//Passos:
//1. Criar array com todas as substrings (done)
//2. Crirar função que confere se uma string e anagrama de outra
//3. Usar um nested loop pra iterar cada string do array e ver se é anagrama de outra, usando a função acima como callback e o array como argumento. Cada vez que for, a contagem de anagram pairs aumenta em um. Imprimir a contagem de anagram pairs. 





