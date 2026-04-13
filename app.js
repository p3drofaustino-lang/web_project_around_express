const express = require('express');
const mongoose = require('mongoose');

const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');
const { ERROR_NOT_FOUND } = require('./utils/errors');

const app = express();
const { PORT = 3000 } = process.env;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/aroundb')
  .then(() => {
    console.log('Ligado ao MongoDB');
  })
  .catch((err) => {
    console.error('Erro ao ligar ao MongoDB:', err);
  });

app.use((req, res, next) => {
  req.user = {
    _id: '69dcf0f80b758e2f34b22dca',
  };

  next();
});

app.use('/users', usersRouter);
app.use('/cards', cardsRouter);

app.use((req, res) => {
  res.status(ERROR_NOT_FOUND).send({ message: 'Recurso requisitado não encontrado' });
});

app.listen(PORT, () => {
  console.log(`Servidor a correr na porta ${PORT}`);
});
