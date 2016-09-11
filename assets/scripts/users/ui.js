'use strict';

const app = require('../app.js');

const onCreateUserSuccess = function(data) {
  if (data) {
    $('.info').text('You created user id ' + data.user.id + ', sign in to your new account to play.');
    //console.log(data);
  }
};

const signInSuccess = function(data) {
  app.user = data.user;
  $('.info').text('You are signed in as user id ' + data.user.id + ', press the new game button to play.');
  //console.log(data);
};

const onError = function(response) {
  $('.info').text('Something Broke. Check out:' + response);
  //console.error(response);
};

const changePasswordSuccess = function() {
  $('.info').text('You changed passwords. Don`t forget your credentials!');
  console.log('password changed');
};

const signOutUserSuccess = function() {
  $('.info').text('You signed out. Sign in to play again.');
  console.log('signed out');
};

module.exports = {
  onCreateUserSuccess,
  onError,
  changePasswordSuccess,
  signOutUserSuccess,
  signInSuccess
};
