// Contém as regras de validação dos nomes dos arquivos.
// src/services/nameValidation.js

const padraoMissao = /^LOUCOS_[A-Z]+_MISSAO_\d+$/;
const padraoMissaoVarios = /^LOUCOS_[A-Z]+_MISSAO_\d+\.\d+$/;
const padraoComprovacaoUnica = /^LOUCOS_[A-Z]+_MISSAO_\d+_COMP$/;
const padraoComprovacaoMultiplos = /^LOUCOS_[A-Z]+_MISSAO_\d+_COMP\.\d+$/;

function validarNomeArquivo(nomeArquivo) {
    if (padraoMissao.test(nomeArquivo)) {
        return "Nome de missão válido.";
    } else if (padraoMissaoVarios.test(nomeArquivo)) {
        return "Nome de missão com múltiplos arquivos válido.";
    } else if (padraoComprovacaoUnica.test(nomeArquivo)) {
        return "Nome de comprovativo único válido.";
    } else if (padraoComprovacaoMultiplos.test(nomeArquivo)) {
        return "Nome de comprovativo múltiplo válido.";
    } else {
        return "Nome inválido. Verifique o formato.";
    }
}

module.exports = {
    validarNomeArquivo,
};
