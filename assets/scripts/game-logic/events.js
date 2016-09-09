'use strict';

const api = require('./api');

const ui = require('./ui');

const app = require('../app.js');

let gameBoardArray = ['', '', '', '', '', '', '', '', ''];

const onNewGame = function onNewGame (event) {
  event.preventDefault();
  let data = {};
  $('.col-xs-4').html('');
//  $('.col-xs-4').data('val', '0');
  api.newGame(data)
    .done(ui.newGameSuccess)
    .fail(ui.onError);
};

// const setCharacter = function (event) {
//   event.preventDefault();
//   if (app.player === 'x') {
//     let cellclicked = event.target;
//     $(cellclicked).html('X');
//   } else if (app.player === 'o') {
//     let cellclicked = event.target;
//     $(cellclicked).html('O');
//   }
// };

const setCharacter = function (event) {
  event.preventDefault();
  if (app.player === 'x') {
    app.player = 'o';
    let cellclicked = event.target;
    $(cellclicked).html('O');
  } else if (app.player === 'o') {
    app.player = 'x';
    let cellclicked = event.target;
    $(cellclicked).html('X');
  }
};

// const setArray = function (event) {
//   event.preventDefault();
//   let data = $('#top-left').contents();
//   console.log(data);
//
// };


    //  let position = 0;
    //  for (let i = 0; i < gameBoardArray.length; i++) {
    //   if (i === position) {
    //     gameBoardArray[i] = 'X';
    //     console.log(gameBoardArray);

module.exports = {
  onNewGame,
  gameBoardArray,
  setCharacter,
  //setArray,
};
