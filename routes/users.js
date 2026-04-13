const router = require('express').Router();
const { users } = require('../utils/data');

router.get('/', (req, res) => {
  res.send(users);
});

router.get('/:userId', (req, res) => {
  const user = users.find((item) => item._id === req.params.userId);

  if (!user) {
    res.status(404).send({ message: 'ID de usuário não encontrado' });
    return;
  }

  res.send(user);
});

module.exports = router;
