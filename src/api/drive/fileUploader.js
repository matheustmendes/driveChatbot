// src/api/drive/fileUploader.js
const { google } = require('googleapis');
const fs = require('fs');
const { authenticateServiceAccount } = require('./driveClient');

const uploadFile = async (filePath, fileName, folderId) => {
    try {
        // Autenticar
        const auth = await authenticateServiceAccount();
        const drive = google.drive({ version: 'v3', auth });

        // Configurar metadados do arquivo
        const fileMetadata = {
            name: fileName,
            parents: [folderId], // Pasta onde o arquivo será salvo
        };
        const media = {
            mimeType: 'video/mp4', // Alterar conforme o tipo do arquivo
            body: fs.createReadStream(filePath), // Leitura do arquivo local para upload
        };

        // Fazer upload do arquivo para o Google Drive
        const response = await drive.files.create({
            resource: fileMetadata,
            media: media,
            fields: 'id',
        });

        console.log(`Arquivo enviado com sucesso, ID: ${response.data.id}`);
        return response.data.id;
    } catch (error) {
        console.error('Erro ao fazer upload para o Google Drive:', error.message);
        throw error;
    }
};

module.exports = {
    uploadFile,
};
