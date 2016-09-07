'use strict';

const app = require('../app.js');
const getFormFields = require('../../../lib/get-form-fields');

const createUser = function (form) {
  return $.ajax({
    url: app.host + '/sign-up',
    method: 'POST',
    data: getFormFields(form),
  });
};

const signInUser = function (form) {
  return $.ajax({
    url: app.host + '/sign-in',
    method: 'POST',
    data: getFormFields(form),
  });
};

const changePassword = (data) => {
  return $.ajax({
    url: app.host + '/change-password/' + app.id,
    method: 'PATCH',
    data: data,
    headers: {
      Authorization: 'Token token=' + user.token,
    },
  });
};

module.exports = {
createUser,
signInUser,
changePassword,
};
