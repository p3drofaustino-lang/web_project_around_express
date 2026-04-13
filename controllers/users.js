const User = require('../models/user');
const {
  ERROR_BAD_REQUEST,
  ERROR_NOT_FOUND,
  ERROR_SERVER,
} = require('../utils/errors');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send(users))
    .catch((err) => {
      console.log(err);
      res.status(ERROR_SERVER).send({ message: 'Ocorreu um erro no servidor' });
    });
};

module.exports.getUserById = (req, res) => {
  const { userId } = req.params;

  User.findById(userId)
    .orFail(() => {
      const error = new Error('Utilizador não encontrado');
      error.statusCode = ERROR_NOT_FOUND;
      throw error;
    })
    .then((user) => res.send(user))
    .catch((err) => {
      console.log(err);

      if (err.name === 'CastError') {
        return res.status(ERROR_BAD_REQUEST).send({ message: 'ID de utilizador inválido' });
      }

      if (err.statusCode === ERROR_NOT_FOUND) {
        return res.status(ERROR_NOT_FOUND).send({ message: 'Utilizador não encontrado' });
      }

      return res.status(ERROR_SERVER).send({ message: 'Ocorreu um erro no servidor' });
    });
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.status(201).send(user))
    .catch((err) => {
      console.log(err);

      if (err.name === 'ValidationError') {
        return res.status(ERROR_BAD_REQUEST).send({ message: 'Dados inválidos para criar utilizador' });
      }

      return res.status(ERROR_SERVER).send({ message: 'Ocorreu um erro no servidor' });
    });
};

module.exports.updateProfile = (req, res) => {
  const { name, about } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    { new: true, runValidators: true },
  )
    .orFail(() => {
      const error = new Error('Utilizador não encontrado');
      error.statusCode = ERROR_NOT_FOUND;
      throw error;
    })
    .then((user) => res.send(user))
    .catch((err) => {
      console.log(err);

      if (err.name === 'ValidationError') {
        return res.status(ERROR_BAD_REQUEST).send({ message: 'Dados inválidos para atualizar perfil' });
      }

      if (err.name === 'CastError') {
        return res.status(ERROR_BAD_REQUEST).send({ message: 'ID de utilizador inválido' });
      }

      if (err.statusCode === ERROR_NOT_FOUND) {
        return res.status(ERROR_NOT_FOUND).send({ message: 'Utilizador não encontrado' });
      }

      return res.status(ERROR_SERVER).send({ message: 'Ocorreu um erro no servidor' });
    });
};

module.exports.updateAvatar = (req, res) => {
  const { avatar } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    { new: true, runValidators: true },
  )
    .orFail(() => {
      const error = new Error('Utilizador não encontrado');
      error.statusCode = ERROR_NOT_FOUND;
      throw error;
    })
    .then((user) => res.send(user))
    .catch((err) => {
      console.log(err);

      if (err.name === 'ValidationError') {
        return res.status(ERROR_BAD_REQUEST).send({ message: 'Dados inválidos para atualizar avatar' });
      }

      if (err.name === 'CastError') {
        return res.status(ERROR_BAD_REQUEST).send({ message: 'ID de utilizador inválido' });
      }

      if (err.statusCode === ERROR_NOT_FOUND) {
        return res.status(ERROR_NOT_FOUND).send({ message: 'Utilizador não encontrado' });
      }

      return res.status(ERROR_SERVER).send({ message: 'Ocorreu um erro no servidor' });
    });
};
