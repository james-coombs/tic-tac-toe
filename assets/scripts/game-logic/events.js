'use strict';

const api = require('./api');

const ui = require('./ui');

const onNewGame = function onNewGame (event) {
  event.preventDefault();
  $('.col-xs-4').text('');
  $('.col-xs-4').data('val', '0');
  let data = {};
  api.newGame(data)
    .done(ui.newGameSuccess)
    .fail(ui.onError);
};

const setX = function () {
  //if (player_x) {
  $('.col-xs-4').append('X');
};

const setO = function () {
  $('.col-xs-4').append('O');
};

let gameBoardArray = ['', '', '', '', '', '', '', '', ''];

module.exports = {
  onNewGame,
  gameBoardArray,
  setX,
  setO,
};
