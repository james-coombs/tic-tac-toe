'use strict';

require('./example');

const events = require('./users/events');

$(() => {
  $('#createUser').on('submit', events.onCreateUser);
  $('#signInUser').on('submit', events.onSignInUser);
  $('#changePassword').on('submit', events.onChangePassword);
  $('#signOut').on('submit', onSignOut);
});
