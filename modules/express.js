// Importa o módulo express
const express = require("express");

// Cria uma instância do aplicativo Express
const app = express();

// Define a porta na qual o servidor irá escutar
const port = 8080;

// Define uma rota para requisições GET no caminho /home
app.get("/home", (req, res) => {
  // Define o tipo de conteúdo da resposta como HTML
  res.contentType("html application");

  // Define o status HTTP como 200 (sucesso) e envia um conteúdo HTML
  res.status(200).send("<h1>hello world</h1>");
});

// Define uma rota para requisições GET no caminho /users
app.get("/users", (req, res) => {
  // Cria um array de objetos representando usuários
  const users = [
    {
      name: "Raphael",
      email: "email@rapha.com",
    },
    {
      name: "Ana",
      email: "email@ana.com",
    },
  ];

  // Define o status HTTP como 200 (sucesso) e envia o array de usuários como JSON
  res.status(200).json(users);
});

// Inicializa o servidor para escutar na porta definida
app.listen(port, () => console.log(`Listening on port ${port}`));
