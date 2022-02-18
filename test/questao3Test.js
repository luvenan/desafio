//Carrega a biblioteca assertion do chai
const assert = require('chai').assert;

//Carrega a questão a ser testada
const questao3 = require('../modules/questao3');

//Cria o teste para a função de encontrar as substrings de uma string qualquer. Conta-se o número de substrings encontrados para uma palavra segundo a fórmula: número de substrings = n + (n-1) + (n-2) + ... , onde n é o número de caracteres da palavra.
describe('Questao 3 - encontrar substrings:', function() {
    it('A palavra "ovo" tem 6 substrings"', function() {
        assert.equal(questao3.encontrarSubstrings('ovo').length, 6);
    });
    it('A palavra "pera" tem 10 substrings"', function() {
        assert.equal(questao3.encontrarSubstrings('pera').length, 10);
    });
    it('A palavra "abacaxi" tem 28 substrings"', function() {
        assert.equal(questao3.encontrarSubstrings('abacaxi').length, 28);
    });
});


//Cria o teste para a função de verificar se duas palavras são anagrama uma da outra
describe('Questao 3 - verificar anagrama:', function() {
    it('A palavra "amor" é anagrama de "roma"', function() {
        assert.equal(questao3.verificarAnagrama('amor', 'roma'), true);
    });
    it('A palavra "america" é anagrama de "iracema"', function() {
        assert.equal(questao3.verificarAnagrama('america', 'iracema'), true);
    });
    it('A palavra "abacate" NÃO é anagrama de "abbcate"', function() {
        assert.equal(questao3.verificarAnagrama('abacate', 'abbcate'), false);
    });
    it('A palavra "flor" NÃO é anagrama de "florida"', function() {
        assert.equal(questao3.verificarAnagrama('flor', 'florida'), false);
    });
});

//Cria o teste para a função de procurar pares de anagrama
describe('Questao 3 - procurar pares:', function() {
    it('A palavra "papai" tem 5 pares de anagramas', function() {
        assert.equal(questao3.procurarPares('baba'), 5);
    });
    it('A palavra "marrocos" tem 3 pares de anagramas', function() {
        assert.equal(questao3.procurarPares('marrocos'), 3);
    });
    it('A palavra "banana" tem 12 pares de anagramas', function() {
        assert.equal(questao3.procurarPares('banana'), 12);
    });
});
