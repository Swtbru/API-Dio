// src/index.js

const express = require('express');
const app = express();

// Importa as rotas de produto
const rotasProdutos = require('./routes/productRoutes');

// Middleware para permitir receber JSON no corpo das requisições
app.use(express.json());

// Usa as rotas com prefixo /api
app.use('/api', rotasProdutos);

// Porta em que o servidor vai rodar
const PORT = 3000;

// Inicia o servidor e mostra mensagem no console
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}/api`);
});
