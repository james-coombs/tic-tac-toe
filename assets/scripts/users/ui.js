'use strict';

const app = require('../app.js');

const onCreateUserSuccess = function(data) {
  if (data) {
    $('.info').text('You created user id ' + data.user.id + ', sign in to your new account to play.');
    $('.game-actions').hide();
    $('#new-game-button').hide();
  }
};

const signInSuccess = function(data) {
  app.user = data.user;
  $('.info').text('You are signed in as user id ' + data.user.id + ', press the new game button to play.');
  $('.game-actions').show();
  $('#new-game-button').show();
  $('.game-querys').show();
};

const createUserOnError = function() {
  $('.info').text('Something went wrong!');
  $('.game-actions').hide();
  $('#new-game-button').hide();
};

const changePasswordSuccess = function() {
  $('.info').text('You changed passwords. Don\'t forget your credentials!');
};

const signOutUserSuccess = function() {
  $('#new-game-button').hide();
  $('.game-actions').hide();
  $('.game-querys').hide();
};

module.exports = {
  onCreateUserSuccess,
  createUserOnError,
  changePasswordSuccess,
  signOutUserSuccess,
  signInSuccess
};
