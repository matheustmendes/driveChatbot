// Gerencia operações com arquivos, como download e manipulação temporária.

// src/services/fileService.js
const fs = require('fs');
const path = require('path');

// Função para salvar um arquivo temporariamente no servidor
function saveFileTemporarily(file) {
    const tempDir = path.join(__dirname, '../../temp'); // Diretório temporário para armazenar arquivos
    const tempPath = path.join(tempDir, file.originalname);

    // Move o arquivo para o diretório temporário
    fs.renameSync(file.path, tempPath);
    return tempPath;
}

// Função para deletar um arquivo do sistema após o upload
function deleteFile(filePath) {
    try {
        fs.unlinkSync(filePath);
        console.log(`Arquivo deletado: ${filePath}`);
    } catch (error) {
        console.error(`Erro ao deletar o arquivo: ${error.message}`);
    }
}

// Função para validar o tipo de arquivo (ex.: garantir que é um vídeo ou imagem)
function validateFileType(file, allowedTypes) {
    const fileType = file.mimetype;
    if (!allowedTypes.includes(fileType)) {
        throw new Error(`Tipo de arquivo inválido: ${fileType}. Tipos permitidos: ${allowedTypes.join(', ')}`);
    }
}

// Função para preparar o arquivo para upload (pode incluir compressão, transformação, etc.)
function prepareFileForUpload(filePath) {
    // Aqui você pode incluir lógica para compressão ou transformação de vídeo/imagem
    // No exemplo atual, estamos apenas retornando o caminho do arquivo sem modificações
    return filePath;
}

module.exports = {
    saveFileTemporarily,
    deleteFile,
    validateFileType,
    prepareFileForUpload,
};
