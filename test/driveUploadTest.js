// test/driveUploadTest.js

require('dotenv').config(); // Carrega variáveis do .env
const path = require('path');
const { uploadFile } = require('../src/api/drive/fileUploader');
const config = require('../src/utils/config');

async function testDriveUpload() {
    try {
        // Caminho do arquivo local que deseja testar o upload
        const filePath = path.join(__dirname, 'files', 'sample.mp4'); // Substitua pelo caminho do seu arquivo de teste
        const fileName = 'drive_upload_test_sample.mp4'; // Nome do arquivo que será usado no Google Drive

        // ID da pasta no Google Drive onde o arquivo será armazenado
        const folderId = config.googleDriveFolderId;

        // Verifica se o ID da pasta está correto
        if (!folderId) {
            throw new Error('ID da pasta no Google Drive não foi configurado corretamente.');
        }

        // Chamar a função de upload diretamente
        const fileId = await uploadFile(filePath, fileName, folderId);

        console.log(`Upload realizado com sucesso! ID do arquivo no Google Drive: ${fileId}`);
    } catch (error) {
        console.error('Erro ao realizar o upload para o Google Drive:', error.message);
    }
}

// Executa o teste de upload
testDriveUpload();
