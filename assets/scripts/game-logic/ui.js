'use strict';

const app = require('../app.js');

const newGameSuccess = function (data) {
  app.game = data.game;
  if (data) {
    console.log(data);
  }
};

const onError = function () {
  console.log('Something Broke');
};

module.exports = {
  newGameSuccess,
  onError
};
