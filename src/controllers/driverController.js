// src/controllers/driveController.js
const { uploadFile } = require('../api/drive/fileUploader');
const { gerarNomeArquivo } = require('../services/namingService');
const { validarNomeArquivo } = require('../services/nameValidation');
const fileService = require('../services/fileServices');
const config = require('../utils/config');

const uploadVideo = async (req, res) => {
    try {
        // Supondo que você use um middleware como Multer para lidar com upload de arquivos via API
        const file = req.file;
        const equipe = req.body.equipe;
        const missao = req.body.missao;
        const tipo = req.body.tipo || 'normal';
        const sequencia = req.body.sequencia || null;

        // Valida o tipo de arquivo (ex.: apenas vídeo ou imagem)
        fileService.validateFileType(file, ['video/mp4', 'image/jpeg', 'image/png']);

        // Salva o arquivo temporariamente no servidor
        const tempFilePath = fileService.saveFileTemporarily(file);

        // Gera o nome do arquivo
        const nomeArquivo = gerarNomeArquivo(equipe, missao, tipo, sequencia);

        // Valida o nome do arquivo
        const resultadoValidacao = validarNomeArquivo(nomeArquivo);
        if (resultadoValidacao.startsWith('Nome inválido')) {
            // Remove o arquivo temporário se a validação falhar
            fileService.deleteFile(tempFilePath);
            return res.status(400).json({ error: resultadoValidacao });
        }

        // Prepara o arquivo para upload (ex.: compressão, se necessário)
        const preparedFilePath = fileService.prepareFileForUpload(tempFilePath);

        // ID da pasta no Google Drive (usando o config.js)
        const folderId = config.googleDriveFolderId;

        // Faz o upload do arquivo usando o File Uploader
        const fileId = await uploadFile(preparedFilePath, nomeArquivo, folderId);

        // Deleta o arquivo temporário após o upload bem-sucedido
        fileService.deleteFile(preparedFilePath);

        res.status(200).json({ message: 'Upload realizado com sucesso!', fileId });
    } catch (error) {
        console.error('Erro no upload do vídeo:', error);
        res.status(500).json({ error: 'Erro ao processar o upload.' });
    }
};

module.exports = {
    uploadVideo,
};
