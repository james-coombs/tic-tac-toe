'use strict';

require('./example');

const events = require('./users/events');

$(() => {
  $('#createUser').on('submit', events.onCreateUser);
  $('#signInUser').on('submit', events.onSignInUser);
  $('#changePassword').on('submit', events.onChangePassword);
  $('#sign-out-modal-button').on('click', events.onSignOutUser);
});
