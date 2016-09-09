'use strict';

const app = require('../app');

const newGame = function (data) {
  return $.ajax({
    url: app.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data,
  });
};

const getGameId = function (data) {
  let id = app.game.id;
  return $.ajax({
    url: app.host + '/games/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data,
  });
};

module.export = {
  newGame,
  getGameId,
};
