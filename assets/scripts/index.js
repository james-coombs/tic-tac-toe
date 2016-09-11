'use strict';

require('./example');

const userEvents = require('./users/events');

const gameEvents = require('./game-logic/events');

$(() => {
  $('#game-board').hide();
  $('#createUser').on('submit', userEvents.onCreateUser);
  $('#createUser').on('submit');
  $('#signInUser').on('submit', userEvents.onSignInUser);
  $('#game-board').show();
  $('#change-password').on('submit', userEvents.onChangePassword);
  $('#sign-out-modal-button').on('click', userEvents.onSignOutUser);
  $('#new-game-button').on('click', gameEvents.onNewGame);
  $('.game-cell').on('click', gameEvents.setGame);
  $('#new-game-button').on('click', gameEvents.clearGameBoardArray);
  $('#get-game-by-id').on('submit', gameEvents.onGetGameById);
});
