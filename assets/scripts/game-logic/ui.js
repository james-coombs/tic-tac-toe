'use strict';

const app = require('../app.js');

const newGameSuccess = function (data) {
  app.game = data.game;
  $('.info').text('You started a new game, id#: ' + data.game.id);
  //console.log(data);
};

const getGameByIdSuccess = function (data) {
  app.game = data.game;
  $('.info').text('You got game id: ' + data.game.id +
  ' the game looked like: ' + data.game.cells+ ' Was the game over? ' +
  data.game.over + '.');
  //console.log(data);
};

const getGamesPlayedSuccess = function (data) {
  app.game = data.game;
  $('.info').text('You played ' + data.games.length + ' different games.');
  console.log(data);
};

const onError = function() {
  //console.log('Something Broke');
  $('.info').text('Something Broke');
};

module.exports = {
  newGameSuccess,
  onError,
  getGameByIdSuccess,
  getGamesPlayedSuccess,
};
