const router = require('express').Router();
const { cards } = require('../utils/data');

router.get('/', (req, res) => {
  res.send(cards);
});

module.exports = router;
