'use strict';

const app = require('../app');

const newGame = (data) =>{
  return $.ajax({
    url: app.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data,
  });
};

module.exports = {
  newGame,
};
