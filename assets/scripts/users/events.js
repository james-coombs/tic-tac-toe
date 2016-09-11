'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');

const ui = require('./ui');

const onCreateUser = function (event) {
  event.preventDefault();
  api.createUser(event.target)
    .done(ui.onCreateUserSuccess)
    .fail(ui.onError);
};

const onSignInUser = function (event) {
  event.preventDefault();
  $('#new-game-button').show();
  api.signInUser(event.target)
    .done(ui.signInSuccess)
    .fail(ui.onError);
};

const onChangePassword = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.failure);
};

const onSignOutUser = function () {
  event.preventDefault();

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
