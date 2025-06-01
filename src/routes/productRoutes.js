// src/routes/productRoutes.js

const express = require('express');
const router = express.Router();

// Importa as funções do controlador de produtos
const {
  criarProduto,
  listarProdutos,
  editarProduto,
  deletarProduto
} = require('../controllers/productController');

// Rota para criar produto (POST)
router.post('/produtos', criarProduto);

// Rota para listar todos os produtos (GET)
router.get('/produtos', listarProdutos);

// Rota para editar um produto pelo id (PUT)
router.put('/produtos/:id', editarProduto);

// Rota para deletar um produto pelo id (DELETE)
router.delete('/produtos/:id', deletarProduto);

// Exporta o router para ser usado no index.js
module.exports = router;
