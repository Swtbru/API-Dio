// src/validators/productValidator.js

// Função para validar os dados do produto
function validarProduto(dados) {
  const { nome, preco } = dados;

  // Verifica se nome existe e é uma string
  if (!nome || typeof nome !== 'string') {
    return { erro: 'O nome do produto é obrigatório e deve ser uma string.' };
  }

  // Verifica se preço existe e é um número
  if (preco === undefined || typeof preco !== 'number') {
    return { erro: 'O preço do produto é obrigatório e deve ser um número.' };
  }

  // Se passou nas validações, retorna null (sem erro)
  return null;
}

// Exporta a função para ser usada em outros arquivos
module.exports = { validarProduto };
