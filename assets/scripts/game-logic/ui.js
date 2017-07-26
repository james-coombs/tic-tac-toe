'use strict';

const app = require('../app.js');

const newGameSuccess = function (data) {
  app.game = data.game;
  $('.info').text('You started a new game, id#: ' + data.game.id + '. It is x\'s move.');
};

const getGameByIdSuccess = function (data) {
  app.game = data.game;
  $('.info').text('You got game id: ' + data.game.id +
  ' the game array looked like: [' + data.game.cells+ '] Was the game over? ' +
  data.game.over + ' The id of the player was: ' + data.game.player_x.id +
  ' That player\'s email is: ' + data.game.player_x.email);
};

const getGamesPlayedSuccess = function (data) {
  app.game = data.game;
  $('.info').text('You played ' + data.games.length + ' different games.');
};

const onError = function() {
  $('.info').text('Ah ah ah, you didn\'t say the magic word');
  $('.game-board').hide();
  $('.game-actions').hide();
};

module.exports = {
  newGameSuccess,
  onError,
  getGameByIdSuccess,
  getGamesPlayedSuccess,
};
