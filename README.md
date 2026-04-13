# Projeto 16 — Around The U.S. Express

## Descrição

Este projeto é o backend da aplicação **Around The U.S.**, desenvolvido com **Node.js**, **Express** e **MongoDB**.

Nesta etapa, a API foi conectada a um banco de dados MongoDB usando **Mongoose**, substituindo os dados locais por coleções reais no banco. O projeto permite criar, consultar, atualizar e remover usuários e cartões, além de curtir e descurtir cartões.

## Funcionalidades

### Usuários
- `GET /users` — retorna todos os usuários
- `GET /users/:userId` — retorna um usuário por `_id`
- `POST /users` — cria um novo usuário
- `PATCH /users/me` — atualiza o perfil
- `PATCH /users/me/avatar` — atualiza o avatar

### Cartões
- `GET /cards` — retorna todos os cartões
- `POST /cards` — cria um novo cartão
- `DELETE /cards/:cardId` — remove um cartão por `_id`
- `PUT /cards/:cardId/likes` — curte um cartão
- `DELETE /cards/:cardId/likes` — descurte um cartão

## Tecnologias utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- JavaScript
- ESLint
- Nodemon
- Postman
- MongoDB Compass

## Estrutura do projeto

```bash
web_project_around_express/
├── app.js
├── controllers/
├── models/
├── routes/
├── utils/
├── package.json
└── README.md
Executar o projeto
Instalar dependências
npm install
Iniciar o servidor
npm run start
Iniciar em modo de desenvolvimento
npm run dev

O servidor será iniciado em:

http://localhost:3000

O projeto usa a conexão local com MongoDB:

mongodb://localhost:27017/aroundb
Testes

As rotas foram testadas com Postman, incluindo:

requisições de sucesso
validação de dados inválidos
erros 400, 404 e 500
atualização de perfil e avatar
likes e dislikes em cartões
Autor

Pedro Faustino
