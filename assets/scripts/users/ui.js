'use strict';

const app = require('../app.js');

const onSuccess = function (data) {
  if (data) {
    console.log(data);
  }
};

const signInSuccess = function (data) {
  app.user = data.user;
  console.log(data);
};

const onError = function (response) {
  console.error(response);
};

const changePasswordSuccess = function () {
  console.log('password changed');
};

const signOutUserSuccess = function () {
  console.log('signed out');
};

module.exports = {
  onSuccess,
  onError,
  changePasswordSuccess,
  signOutUserSuccess,
  signInSuccess
};
