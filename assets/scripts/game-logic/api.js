'use strict';

const app = require('../app');

const newGame = function(data) {
  return $.ajax({
    url: app.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data,
  });
};

const updateGame = function(i, value, gameIsOver) {
  $.ajax({
    url: app.host + '/games/' + app.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {
      "game": {
        "cell": {
          "index": i,
          "value": value,
        },
        "over": gameIsOver,
      }
    }
  });
};

const getGameById = function(data) {
  return $.ajax({
    url: app.host + '/games/' + data.getGameById,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const getGamesPlayed = function(data) {
  return $.ajax({
    url: app.host + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

module.exports = {
  newGame,
  updateGame,
  getGameById,
  getGamesPlayed,
};
