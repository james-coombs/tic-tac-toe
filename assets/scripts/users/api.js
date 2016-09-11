'use strict';

const app = require('../app.js');

const getFormFields = require('../../../lib/get-form-fields');

const createUser = function(form) {
  return $.ajax({
    url: app.host + '/sign-up',
    method: 'POST',
    data: getFormFields(form),
  });
};

const signInUser = function(form) {
  return $.ajax({
    url: app.host + '/sign-in',
    method: 'POST',
    data: getFormFields(form),
  });
};

const changePassword = function(data) {
  return $.ajax({
    url: app.host + '/change-password/' + app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const signOutUser = function() {
  return $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

module.exports = {
  createUser,
  signInUser,
  changePassword,
  signOutUser,
};
