HEAD
# 🛍️ API RESTful de Gerenciamento de Produtos

Este projeto é uma API desenvolvida em Node.js para gerenciar produtos de forma simples. Ele permite criar, visualizar, atualizar e deletar produtos, utilizando o padrão REST. Foi projetado para fins educacionais, com estrutura organizada em **routes**, **controllers**, **models** e **validators**.

> 📚 Projeto desenvolvido com base no curso **"Escrevendo Prompts Eficazes"**, oferecido pela plataforma [DIO](https://www.dio.me/).

---

## 🎯 Objetivos do Projeto

- Criar uma API RESTful funcional em Node.js e Express.
- Organizar o projeto em uma arquitetura básica e limpa.
- Aprender boas práticas de validação, estruturação e testes de endpoints.
- Utilizar ferramentas como o Insomnia para testar a API.

---

## 🧰 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- JavaScript (ES6)
- Insomnia (para testes de API)
- Estrutura modular com pastas:
  - `src/routes`
  - `src/controllers`
  - `src/models`
  - `src/validators`

---

## 💻 Instruções de Instalação

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/nome-do-repo.git
cd nome-do-repo
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Iniciar o servidor

```bash
npm start
```

O servidor estará rodando em:

```
http://localhost:3000/api
```

---

## 🔌 Exemplos de Requisições com Insomnia

### ➕ Criar Produto (`POST /api/produtos`)

**Body (JSON):**

```json
{
  "nome": "Camiseta",
  "preco": 49.9
}
```

---

### 📋 Listar Produtos (`GET /api/produtos`)

**Resposta esperada:**

```json
[
  {
    "id": "1654178491584",
    "nome": "Camiseta",
    "preco": 49.9
  }
]
```

---

### ✏️ Atualizar Produto (`PUT /api/produtos/:id`)

**Body (JSON):**

```json
{
  "nome": "Tênis",
  "preco": 129.9
}
```

---

### ❌ Deletar Produto (`DELETE /api/produtos/:id`)

**Resposta esperada:**

```
Status: 204 No Content
```

---

## 📝 Considerações Finais

- Esta API usa armazenamento **em memória**, ou seja, os dados são perdidos ao reiniciar o servidor.
- Ideal para praticar estruturação de APIs, testes com Insomnia e lógica com JavaScript.
- Fácil de evoluir para incluir um banco de dados como MongoDB ou MySQL no futuro.

---

## 📌 Créditos

Este projeto foi desenvolvido como prática com apoio do curso **"Escrevendo Prompts Eficazes"** da plataforma [DIO](https://www.dio.me/), utilizando o auxílio da IA para gerar e explicar o código de forma orientada.

