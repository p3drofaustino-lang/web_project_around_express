# Tripleten web_project_around_express

# Projeto 15 — Around Express

## Descrição do projeto

Este projeto é o início do back-end da aplicação Around the U.S.

Nesta etapa, foi criado um servidor com Node.js e Express que responde a algumas rotas e retorna dados em formato JSON. Os dados são lidos de arquivos locais `users.json` e `cards.json`.

## Funcionalidade

O servidor responde às seguintes rotas:

- `GET /users` — retorna todos os usuários
- `GET /card` — retorna todos os cards
- `GET /cards` — retorna todos os cards
- `GET /users/:userId` — retorna um usuário pelo ID

O projeto também trata erros:

- `404` — quando o usuário não é encontrado ou a rota não existe
- `500` — quando ocorre um erro no servidor

## Tecnologias e técnicas utilizadas

- Node.js
- Express
- ESLint
- Nodemon
- EditorConfig
- módulo `fs` para leitura de arquivos
- módulo `path` para montar os caminhos dos arquivos
- estrutura modular com rotas separadas

## Executar o projeto

Instalar as dependências:

```bash
npm install

Executar em modo de desenvolvimento:

npm run dev

Executar em modo normal:

npm run start

O servidor será iniciado em:

http://localhost:3000
Estrutura do projeto
web_project_around_express/
├── app.js
├── data/
│   ├── users.json
│   └── cards.json
├── routes/
│   ├── users.js
│   └── cards.js
├── .editorconfig
├── .eslintrc
├── .gitignore
├── package.json
└── README.md
