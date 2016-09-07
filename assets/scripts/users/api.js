'use strict';

const app = require('../app.js');
const getFormFields = require('../../../lib/get-form-fields');

const createUser = function (form) {
  return $.ajax({
    url: app.host + '/users/',
    method: 'POST',
    data: getFormFields(form),
  });
};

module.exports = {
createUser,
};
