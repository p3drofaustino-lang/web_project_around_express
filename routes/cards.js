const router = require('express').Router();
const fs = require('fs');
const path = require('path');

const cardsPath = path.join(__dirname, '../data/cards.json');

router.get('/', (req, res) => {
  fs.readFile(cardsPath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send({ message: 'Ocorreu um erro no servidor' });
      return;
    }

    const cards = JSON.parse(data);
    res.send(cards);
  });
});

module.exports = router;
