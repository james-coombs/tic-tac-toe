'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');

const ui = require('./ui');

const onCreateUser = function(event) {
  event.preventDefault();
  $('.user-actions').hide();
  api.createUser(event.target)
    .done(ui.onCreateUserSuccess)
    .fail(ui.createUserOnError);
};

const onSignInUser = function(event) {
  event.preventDefault();
  api.signInUser(event.target)
    .done(ui.signInSuccess)
    .fail(ui.createUserOnError);
};

const onChangePassword = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.failure);
};

const onSignOutUser = function() {
  event.preventDefault();
  $('.info').text('You signed out. Sign in to play again.');
  $('.game-board').hide();
  $('.user-actions').hide();
  $('.game-querys').hide();
  api.signOutUser()
    .done(ui.signOutSuccess)
    .fail(ui.failure);
};

module.exports = {
  onCreateUser,
  onSignInUser,
  onChangePassword,
  onSignOutUser,
};
