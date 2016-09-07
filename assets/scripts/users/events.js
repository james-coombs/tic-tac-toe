'use strict';

const api = require('./api');
const ui = require('./ui');
const getFormFields = require('../../../lib/get-form-fields');


const onCreateUser = function (event) {
  event.preventDefault();
  api.createUser(event.target)
    .done(ui.onSuccess)
    .fail(ui.onError);
};

module.exports = {
  onCreateUser,
};
