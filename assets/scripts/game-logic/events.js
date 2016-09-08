'use strict';

const api = require('./api');

const ui = require('./ui');

let gameBoardArray = ['', '', '', '', '', '', '', '', ''];

const onNewGame = function onNewGame (event) {
  event.preventDefault();
  $('.col-xs-4').html('');
//  $('.col-xs-4').data('val', '0');
  let data = {};
  api.newGame(data)
    .done(ui.newGameSuccess)
    .fail(ui.onError);
};

const setCharacter = function (event) {
  event.preventDefault();
  let cellclicked = event.target;
  $(cellclicked).html('X');
};

  // if player x
  //$('.col-xs-4').html('X');
  //if player o
  //$('.col-xs-4').html('O');


    //  let position = 0;
    //  for (let i = 0; i < gameBoardArray.length; i++) {
    //   if (i === position) {
    //     gameBoardArray[i] = 'X';
    //     console.log(gameBoardArray);

module.exports = {
  onNewGame,
  gameBoardArray,
  setCharacter,
};
