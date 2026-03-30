const express = require('express');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

const app = express();
const { PORT = 3000 } = process.env;

app.use(express.json());

app.use('/users', usersRouter);
app.use('/cards', cardsRouter);
app.use('/card', cardsRouter);

app.use((req, res) => {
  res.status(404).send({ message: 'Recurso requisitado não encontrado' });
});

app.listen(PORT, () => {
  console.log(`Servidor a correr na porta ${PORT}`);
});
