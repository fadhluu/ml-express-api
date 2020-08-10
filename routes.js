const express = require('express');
const routes = express.Router();
const heroes = require('./list_hero.json');

routes.get('/heroes', (req, res) => {
  res.status(200).json({ message: 'List Heroes', data: heroes });
});

routes.get('/heroes/:hero_name', (req, res) => {
  const hero_name = req.params.hero_name;

  const hero = require(`./heroes/${hero_name}.json`);
  res.status(200).json({ data: hero });
});

module.exports = routes;
