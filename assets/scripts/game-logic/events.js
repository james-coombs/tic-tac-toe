'use strict';

const api = require('./api');

const ui = require('./ui');

const app = require('../app');

let turns = 1;

let gameBoardArray = ['', '', '', '', '', '', '', '', ''];

const onNewGame = function onNewGame (event) {
  event.preventDefault();
  $('.col-xs-4').html('');
  let data = {};
  api.newGame (data)
    .done(ui.newGameSuccess)
    .fail(ui.onError);
};

const setCharacter = function (event) {
  let id = this.id;

  event.preventDefault();

  if (app.player === 'x') {
    app.player = 'o';
    let cellclicked = event.target;
    $(cellclicked).html('O');
    gameBoardArray[id] = app.player;
    console.log(gameBoardArray);

  } else if (app.player === 'o') {
    app.player = 'x';
    let cellclicked = event.target;
    $(cellclicked).html('X');

    gameBoardArray[id] = app.player;
    console.log(gameBoardArray);
  }
};

// valid move
const isValidMove = function (event) {
  event.preventDefault();
  if ($('.col-xs-4').is(':empty')){
    setCharacter();
  } else {
      console.log('pick a different cell');
  }
};

const clearGameBoardArray = function clearGameBoardArray() {
  event.preventDefault();
  gameBoardArray = [];
  console.log('string');
};

//update board

//track turns
// const trackTurns = function () {
//   event.preventDefault;
//   let turns = 1;
//   setCharacter runs, turns++;
//   if turns value % 2 === 0;
//   allow 'X';
//
//   else allow 'O';
// };

// turns val = 0
//if turns % 1 = O
// if turns % 2 = X

//append array

//if
// horz winner


//if
// vert winner

//if
// diag winner

//else increace turn

// if array full and no winner then draw



// const gameOver = function () {
//
// if (gameBoardArray[0] === gameBoardArray[1] && gameBoardArray[0] === gameBoardArray[2] !== ' ' && gameBoardArray[0] ||
//   gameBoardArray[3] === gameBoardArray[4] && gameBoardArray[3] === gameBoardArray[5] !== ' ' ||
//   gameBoardArray[6] === gameBoardArray[7] && gameBoardArray[6] === gameBoardArray[8] !== ' ' ||
//   gameBoardArray[0] === gameBoardArray[3] && gameBoardArray[0] === gameBoardArray[6] !== ' ' ||
//   gameBoardArray[1] === gameBoardArray[4] && gameBoardArray[1] === gameBoardArray[7] !== ' ' ||
//   gameBoardArray[2] === gameBoardArray[5] && gameBoardArray[2] === gameBoardArray[8] !== ' ' ||
//   gameBoardArray[0] === gameBoardArray[4] && gameBoardArray[0] === gameBoardArray[8] !== ' ' ||
//   gameBoardArray[2] === gameBoardArray[4] && gameBoardArray[2] === gameBoardArray[6] !== ' ');
//
//   console.log('A winner is you');
// };

module.exports = {
  onNewGame,
  gameBoardArray,
  setCharacter,
  clearGameBoardArray,
  isValidMove,
  turns,
};
