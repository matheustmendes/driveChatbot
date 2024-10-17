// src/middlewares/authMiddleware.js

const jwt = require('jsonwebtoken'); // Caso use JWT, instale com 'npm install jsonwebtoken'

// Função de middleware para autenticar requisições
const authMiddleware = (req, res, next) => {
    // Verifica se o token de autorização está presente nos headers
    const authHeader = req.headers['authorization'];

    // Token deve começar com 'Bearer '
    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1];

        // Verifica e valida o token
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.status(403).json({ error: 'Token inválido ou expirado.' });
            }

            // Adiciona as informações do usuário à requisição para uso posterior
            req.user = user;
            next(); // Continua para a próxima função na rota
        });
    } else {
        // Se o cabeçalho de autorização não estiver presente ou estiver incorreto
        return res.status(401).json({ error: 'Autorização necessária.' });
    }
};

module.exports = authMiddleware;
