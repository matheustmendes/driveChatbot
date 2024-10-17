// src/utils/config.js

require('dotenv').config(); // Carrega as variáveis do .env

const config = {
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET,
    googleDriveFolderId: process.env.DRIVE_FOLDER_ID,
    googleServiceAccountPath: process.env.GOOGLE_SERVICE_ACCOUNT_PATH || './config/service-account.json',
};

// Valida se todas as variáveis necessárias estão configuradas
function validateConfig() {
    if (!config.jwtSecret) {
        throw new Error('Variável de ambiente JWT_SECRET não está configurada.');
    }
    if (!config.googleDriveFolderId) {
        throw new Error('Variável de ambiente DRIVE_FOLDER_ID não está configurada.');
    }
    if (!config.googleServiceAccountPath) {
        throw new Error('Variável de ambiente GOOGLE_SERVICE_ACCOUNT_PATH não está configurada.');
    }
}

// Executa a validação ao carregar o módulo
validateConfig();

module.exports = config;
