'use strict';

const app = require('../app.js');

const newGameSuccess = function (data) {
  app.game = data.game;
  if (data) {
    console.log(data);
  }
};

module.exports = {
  newGameSuccess,
};
