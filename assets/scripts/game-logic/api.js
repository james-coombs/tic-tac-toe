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

const updateGame = function (i, v, g) {
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
       "value": v
     },
     "over": g
   }
  }
}
);
};


module.exports = {
  newGame,
  updateGame,
};
