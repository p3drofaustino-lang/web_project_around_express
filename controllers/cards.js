const Card = require('../models/card');
const {
  ERROR_BAD_REQUEST,
  ERROR_NOT_FOUND,
  ERROR_SERVER,
} = require('../utils/errors');

module.exports.getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.send(cards))
    .catch((err) => {
      console.log(err);
      res.status(ERROR_SERVER).send({ message: 'Ocorreu um erro no servidor' });
    });
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;

  Card.create({
    name,
    link,
    owner: req.user._id,
  })
    .then((card) => res.status(201).send(card))
    .catch((err) => {
      console.log(err);

      if (err.name === 'ValidationError') {
        return res.status(ERROR_BAD_REQUEST).send({ message: 'Dados inválidos para criar cartão' });
      }

      return res.status(ERROR_SERVER).send({ message: 'Ocorreu um erro no servidor' });
    });
};

module.exports.deleteCard = (req, res) => {
  const { cardId } = req.params;

  Card.findByIdAndDelete(cardId)
    .orFail(() => {
      const error = new Error('Cartão não encontrado');
      error.statusCode = ERROR_NOT_FOUND;
      throw error;
    })
    .then((card) => res.send(card))
    .catch((err) => {
      console.log(err);

      if (err.name === 'CastError') {
        return res.status(ERROR_BAD_REQUEST).send({ message: 'ID de cartão inválido' });
      }

      if (err.statusCode === ERROR_NOT_FOUND) {
        return res.status(ERROR_NOT_FOUND).send({ message: 'Cartão não encontrado' });
      }

      return res.status(ERROR_SERVER).send({ message: 'Ocorreu um erro no servidor' });
    });
};

module.exports.likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .orFail(() => {
      const error = new Error('Cartão não encontrado');
      error.statusCode = ERROR_NOT_FOUND;
      throw error;
    })
    .then((card) => res.send(card))
    .catch((err) => {
      console.log(err);

      if (err.name === 'CastError') {
        return res.status(ERROR_BAD_REQUEST).send({ message: 'ID de cartão inválido' });
      }

      if (err.statusCode === ERROR_NOT_FOUND) {
        return res.status(ERROR_NOT_FOUND).send({ message: 'Cartão não encontrado' });
      }

      return res.status(ERROR_SERVER).send({ message: 'Ocorreu um erro no servidor' });
    });
};

module.exports.dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .orFail(() => {
      const error = new Error('Cartão não encontrado');
      error.statusCode = ERROR_NOT_FOUND;
      throw error;
    })
    .then((card) => res.send(card))
    .catch((err) => {
      console.log(err);

      if (err.name === 'CastError') {
        return res.status(ERROR_BAD_REQUEST).send({ message: 'ID de cartão inválido' });
      }

      if (err.statusCode === ERROR_NOT_FOUND) {
        return res.status(ERROR_NOT_FOUND).send({ message: 'Cartão não encontrado' });
      }

      return res.status(ERROR_SERVER).send({ message: 'Ocorreu um erro no servidor' });
    });
};
