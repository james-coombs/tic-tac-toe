'use strict';

require('./example');

const events = require('./users/events');

$(() => {
  $('#sign-up-modal').on('submit', events.onCreateUser);
});
