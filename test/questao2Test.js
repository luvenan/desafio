//Testes para a questão 2
//Carrega a biblioteca assertion do chai
const assert = require('chai').assert;

//Carrega a questão a ser testada
const questao2 = require('../modules/questao2');

//Cria o teste para senhas que inseguras, com apenas 1 caractere faltando
describe('Questão 2, senhas inseguras:', function() {
    //Senha menor que 6 caracteres
    it('Senha "l0v3U" deve retornar 1', function() {
        assert.equal(questao2.validarSenha('l0v3U'), 1);
    });
    //Senha sem letra minúscula
    it('Senha "ALEGRIa%" deve retornar 1', function() {
        assert.equal(questao2.validarSenha('ALEGRIa%'), 1);
    });
    //Senha sem letra maiúscula
    it('Senha "eu&voc3" deve retornar 1', function() {
        assert.equal(questao2.validarSenha('eu&voc3'), 1);
    });
    //Senhas sem caracteres especiais
    it('Senha "JOVEM123*" deve retornar 1', function() {
        assert.equal(questao2.validarSenha('JOVEM123*'), 1);
    });
});


//Cria o teste para senhas que inseguras, com mais de um caractere faltando
describe('Questão 2, senhas inseguras:', function() {
    it('Senha "piuiAcabaxi" deve retornar 2', function() {
        assert.equal(questao2.validarSenha('piuiAcabaxi'), 2);
    });
    it('Senha "5patinh0s" deve retornar 2', function() {
        assert.equal(questao2.validarSenha('5patinh0s'), 2);
    });
    it('Senha "12345" deve retornar 3', function() {
        assert.equal(questao2.validarSenha('12345'), 3);
    });
    it('Senha "a" deve retornar 5', function() {
        assert.equal(questao2.validarSenha('a'), 5);
    });
});


//Cria o teste para senhas seguras, deve retornar 0
describe('Questão 2, senhas seguras:', function() {
    it('Senha "MacAquinh0*" deve retornar 0', function() {
        assert.equal(questao2.validarSenha('MacAquinh0*'), 0);
    });
    it('Senha "abcd12EF*" deve retornar 0', function() {
        assert.equal(questao2.validarSenha('abcd12EF*'), 0);
    });
    it('Senha "senhA2$%" deve retornar 0', function() {
        assert.equal(questao2.validarSenha('senhA2$%'), 0);
    });
});