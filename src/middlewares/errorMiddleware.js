// src/middlewares/errorMiddleware.js

const errorMiddleware = (err, req, res, next) => {
    console.error('Erro capturado pelo middleware:', err);

    // Define um status padrão para erros não tratados
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Erro interno no servidor';

    res.status(statusCode).json({
        error: {
            status: statusCode,
            message: message,
        },
    });
};

module.exports = errorMiddleware;
