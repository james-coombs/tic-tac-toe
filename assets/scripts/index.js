'use strict';

require('./example');

const userEvents = require('./users/events');

const gameEvents = require('./game-logic/events');


$(() => {
  $('#createUser').on('submit', userEvents.onCreateUser);
  $('#signInUser').on('submit', userEvents.onSignInUser);
  $('#changePassword').on('submit', userEvents.onChangePassword);
  $('#sign-out-modal-button').on('click', userEvents.onSignOutUser);
  $('#new-game-button').on('click', gameEvents.onNewGame);
  $('.col-xs-4').on('click', gameEvents.setCharacter, gameEvents.setArray);
  //$('.col-xs-4').on('click', gameEvents.setO);
});
