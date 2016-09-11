'use strict';

const app = require('../app.js');

const onCreateUserSuccess = function (data) {
  if (data) {
    $('#info').text('You created user id ' + data.user.id);
    console.log(data);
  }
};

const signInSuccess = function (data) {
  app.user = data.user;
  $('#info').text('You are loged in as user id ' + data.user.id);
  console.log(data);
};

const onError = function (response) {
  $('#info').text('Something Broke');
  console.error(response);
};

const changePasswordSuccess = function () {
  $('#info').text('You changed passwords');
  console.log('password changed');
};

const signOutUserSuccess = function () {
    $('#info').text('You signed out');
  console.log('signed out');
};

module.exports = {
  onCreateUserSuccess,
  onError,
  changePasswordSuccess,
  signOutUserSuccess,
  signInSuccess
};
