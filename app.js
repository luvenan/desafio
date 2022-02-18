//Carrega o módulo prompt-sync e permite ao usuário de interromper o aplicativo no node.js
const prompt = require('prompt-sync')({sigint: true});
//importa os módulos de cada questão
const questao1 = require('./modules/questao1');
const questao2 = require('./modules/questao2');
const questao3 = require('./modules/questao3');


//Questão 01
//Digite um número inteiro qualquer para imprimir uma escada de asteriscos com altura e base igual ao número digitado:
//Lê o input, transforma ele em número
//Executa o código da questao1.js
console.log('Questão 01: ');
let input1 = prompt('Digite um número inteiro qualquer: ');
input1 = Number(input1);
questao1.fazerEscada(input1);

//Questao 2
//Digite uma senha, ela deve ter no minimo 6 caracteres, pelo menos 1 letra maiuscula, pelo menos 1 letra minuscula, pelo menos 1 numero e pelo menos 1 caractere especial:
//Inicia as variáveis de input e resultado, sem valores
//Executa o código da questao2.js em um do... while loop que executa o código ao menos uma vez, até que a senha seja segura. Primeiro o input é lido. 
//Loga o resultado no console, com os erros existentes ou a mensagem de que a senha é segura. Se a senha for insegura, o usuário deve digitar outra senha até criar uma que é segura. 
console.log('Questão 02: ');
let input2;
let resultado;

do {
    input2 = prompt('Digite uma senha: ');
    resultado = questao2.validarSenha(input2);
} while (!resultado);


//Questao 3
//Digite uma palavra qualquer para procurar o número de pares de anagramas existentes em suas substrings: 
//Lê o input
//Executa o código da questao3.js
//Loga o resultado no console
console.log('Questão 03: ');
let input3 = prompt('Digite uma palavra: ');
questao3.procurarPares(input3);



