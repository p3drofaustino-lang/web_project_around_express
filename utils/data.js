const fs = require('fs');
const path = require('path');

const usersPath = path.join(__dirname, '../data/users.json');
const cardsPath = path.join(__dirname, '../data/cards.json');

const users = JSON.parse(fs.readFileSync(usersPath, 'utf8'));
const cards = JSON.parse(fs.readFileSync(cardsPath, 'utf8'));

module.exports = { users, cards };
