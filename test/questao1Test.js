//Carrega a biblioteca assertion do chai
const assert = require('chai').assert;

//Carrega a questão a ser testada
const questao1 = require('../modules/questao1');

//Cria o teste para a função de fazer a escada usando o array criado na questão 1.
describe('Questão 1 - Fazer escada', function() {
    it('A altura da escada deve ser igual a n. Se n for 5, a altura deve ser 5.', function() {
        assert.equal(questao1.fazerEscada(5).length, 5);
    });
    it('O número de asteriscos da base da escada deve ser igual a n. Se n for 4, a base deve ter 4 asteriscos.', function() {
        assert.equal(questao1.fazerEscada(4)[3].length, 4);
    });
    it('O número de asteriscos no topo da escada deve ser 1.', function() {
        assert.equal(questao1.fazerEscada(7)[0].length, 1);
    });
    it('A escada deve ser impressa na ordem crescente.', function() {
        assert.equal(questao1.fazerEscada(5)[0].length < questao1.fazerEscada(10)[1].length < questao1.fazerEscada(10)[2].length < questao1.fazerEscada(10)[3].length < questao1.fazerEscada(10)[4].length, true);
    });
    it('A escada não deve incluir nenhum espaço.', function() {
        assert.equal(questao1.fazerEscada(10).indexOf(' '), -1);
    });
});