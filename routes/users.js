const router = require('express').Router();
const fs = require('fs');
const path = require('path');

const usersPath = path.join(__dirname, '../data/users.json');

router.get('/', (req, res) => {
  fs.readFile(usersPath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send({ message: 'Ocorreu um erro no servidor' });
      return;
    }

    const users = JSON.parse(data);
    res.send(users);
  });
});

router.get('/:userId', (req, res) => {
  fs.readFile(usersPath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send({ message: 'Ocorreu um erro no servidor' });
      return;
    }

    const users = JSON.parse(data);
    const user = users.find((item) => item._id === req.params.userId);

    if (!user) {
      res.status(404).send({ message: 'ID de usuário não encontrado' });
      return;
    }

    res.send(user);
  });
});

module.exports = router;
