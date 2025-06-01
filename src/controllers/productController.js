// src/controllers/productController.js

// Importa o "banco de dados" e o validador
let produtos = require('../models/product');
const { validarProduto } = require('../validators/productValidator');

// Função para criar um produto
function criarProduto(req, res) {
  // Valida os dados do corpo da requisição
  const erro = validarProduto(req.body);
  if (erro) return res.status(400).json(erro);

  // Cria o novo produto com id único
  const novoProduto = {
    id: Date.now().toString(), // id simples baseado na data atual
    nome: req.body.nome,
    preco: req.body.preco
  };

  // Adiciona no array de produtos
  produtos.push(novoProduto);

  // Retorna o produto criado com status 201 (criado)
  res.status(201).json(novoProduto);
}

// Função para listar todos os produtos
function listarProdutos(req, res) {
  res.json(produtos);
}

// Função para editar um produto existente
function editarProduto(req, res) {
  const { id } = req.params;

  // Valida os dados do corpo da requisição
  const erro = validarProduto(req.body);
  if (erro) return res.status(400).json(erro);

  // Busca o produto pelo id
  const produto = produtos.find(p => p.id === id);
  if (!produto) return res.status(404).json({ erro: 'Produto não encontrado.' });

  // Atualiza os dados do produto
  produto.nome = req.body.nome;
  produto.preco = req.body.preco;

  // Retorna o produto atualizado
  res.json(produto);
}

// Função para deletar um produto
function deletarProduto(req, res) {
  const { id } = req.params;

  // Busca o índice do produto pelo id
  const index = produtos.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ erro: 'Produto não encontrado.' });

  // Remove o produto do array
  produtos.splice(index, 1);

  // Retorna status 204 (sem conteúdo)
  res.status(204).send();
}

// Exporta as funções para serem usadas nas rotas
module.exports = {
  criarProduto,
  listarProdutos,
  editarProduto,
  deletarProduto
};
  