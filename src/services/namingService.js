//Implementa a lógica para gerar nomes de arquivos conforme as regras específicas do projeto.

// src/services/nameService.js

// Função para gerar nomes de arquivos
function gerarNomeArquivo(equipe, missao, tipo = 'normal', sequencia = null) {
    equipe = equipe.toUpperCase();
    if (tipo === 'normal') {
        return `LOUCOS_${equipe}_MISSAO_${missao}`;
    } else if (tipo === 'varios' && sequencia !== null) {
        return `LOUCOS_${equipe}_MISSAO_${missao}.${sequencia}`;
    } else if (tipo === 'comp' && sequencia === null) {
        return `LOUCOS_${equipe}_MISSAO_${missao}_COMP`;
    } else if (tipo === 'comp' && sequencia !== null) {
        return `LOUCOS_${equipe}_MISSAO_${missao}_COMP.${sequencia}`;
    } else {
        throw new Error('Parâmetros inválidos para geração de nome.');
    }
}

module.exports = {
    gerarNomeArquivo,
};
