//Testes para a questão 2
//Carrega a biblioteca assertion do chai
const assert = require('chai').assert;

//Carrega a questão a ser testada
const questao2 = require('../modules/questao2');

//Cria o teste para senhas que não são seguras, deve retornar falso
describe('Questão 2, senhas inseguras:', function() {
    //Senha curta
    it('Senha "a2c@" deve retornar false', function() {
        assert.equal(questao2.validarSenha('a2C@'), false);
    });
    //Senha sem letra minúscula
    it('Senha "ERQEDV3%" deve retornar false', function() {
        assert.equal(questao2.validarSenha('ERQEDV3%'), false);
    });
    //Senha sem letra maiúscula
    it('Senha "qeiruqo1&" deve retornar false', function() {
        assert.equal(questao2.validarSenha('qeiruqo1&'), false);
    });
    //Senhas sem caracteres especiais
    it('Senha "41u34ihQE" deve retornar false', function() {
        assert.equal(questao2.validarSenha('41u34ihQE'), false);
    });
});


//Cria o teste para senhas seguras, deve retornar verdadeiro
describe('Questão 2, senhas seguras:', function() {
    it('Senha "QEereq1&" deve retornar true', function() {
        assert.equal(questao2.validarSenha('QEereq1&'), true);
    });
    it('Senha "abcd12EF*" deve retornar true', function() {
        assert.equal(questao2.validarSenha('abcd12EF*'), true);
    });
    it('Senha "senhA2$%" deve retornar true', function() {
        assert.equal(questao2.validarSenha('senhA2$%'), true);
    });
    
});