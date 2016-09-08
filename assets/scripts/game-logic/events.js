'use strict';

const api = require('./api');

const ui = require('./ui');

const onCreateGame = function (event) {
  event.preventDefault();
  let data = {};
  api.newGame(data)
    .done(ui.newGameSuccess)
    .fail(ui.onError);
};


module.exports = {
  onCreateGame,
};
