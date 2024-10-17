const chai = require('chai');
const expect = chai.expect;
const { gerarNomeArquivo } = require('../../src/services/nameService');

describe('NameService', () => {
    it('deve gerar um nome de missão normal corretamente', () => {
        const nome = gerarNomeArquivo('EquipeX', 1);
        expect(nome).to.equal('LOUCOS_EQUIPEX_MISSAO_1');
    });

    it('deve gerar um nome de missão com múltiplos arquivos corretamente', () => {
        const nome = gerarNomeArquivo('EquipeX', 1, 'varios', 2);
        expect(nome).to.equal('LOUCOS_EQUIPEX_MISSAO_1.2');
    });

    it('deve lançar erro para parâmetros inválidos', () => {
        expect(() => gerarNomeArquivo('EquipeX', 1, 'desconhecido')).to.throw('Parâmetros inválidos para geração de nome.');
    });
});
