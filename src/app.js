// src/app.js
const express = require('express');
const app = express();
const config = require('./utils/config'); // Importando o config.js
const { initializeVenom } = require('./venomClient');
const authMiddleware = require('./middlewares/authMiddleware');
const errorMiddleware = require('./middlewares/errorMiddleware');
const driveController = require('./controllers/driverController');

// Inicializa a Venom API
initializeVenom();

// Middleware para tratar JSON
app.use(express.json());

// Rota pública para verificar o status do servidor
app.get('/', (req, res) => {
    res.send('Servidor rodando com Venom API!');
});

// Rota protegida para upload de vídeos, usando o middleware de autenticação
app.post('/upload', authMiddleware, driveController.uploadVideo);

// Middleware de tratamento de erros (deve ser o último)
app.use(errorMiddleware);

// Iniciar o servidor Express usando a porta do config.js
const port = config.port;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
