require('dotenv').config(); // Carrega variáveis do .env
const path = require('path');
const { uploadFile } = require('../src/api/drive/fileUploader');
const { gerarNomeArquivo } = require('../src/services/namingService');
const { validarNomeArquivo } = require('../src/services/nameValidation');
const config = require('../src/utils/config');

async function testDriveUploadWithNaming() {
    try {
        // Caminho do arquivo local que deseja testar o upload
        const filePath = path.join(__dirname, 'files', 'sample.mp4'); // Substitua pelo caminho do seu arquivo de teste
        
        // Parâmetros para gerar o nome do arquivo
        const equipe = 'merda'; // Nome da equipe
        const numeroMissao = 1; // Número da missão
        const tipo = 'normal'; // Tipo (normal, varios, comp)
        const sequencia = null; // Sequência (se aplicável)

        // Gerar o nome do arquivo usando o nameService
        const fileName = gerarNomeArquivo(equipe, numeroMissao, tipo, sequencia);
        console.log(`Nome do arquivo gerado: ${fileName}`);

        // Validar o nome do arquivo usando o nameValidation
        const validationMessage = validarNomeArquivo(fileName);
        if (validationMessage.startsWith('Nome inválido')) {
            throw new Error(`Validação falhou para o nome do arquivo: ${validationMessage}`);
        }

        console.log(`Validação do nome do arquivo: ${validationMessage}`);

        // ID da pasta no Google Drive onde o arquivo será armazenado
        const folderId = config.googleDriveFolderId;

        // Fazer upload do arquivo para o Google Drive
        const fileId = await uploadFile(filePath, fileName, folderId);
        console.log(`Upload realizado com sucesso! ID do arquivo no Google Drive: ${fileId}`);
    } catch (error) {
        console.error('Erro ao realizar o upload para o Google Drive:', error.message);
    }
}

// Executa o teste de upload
testDriveUploadWithNaming();
