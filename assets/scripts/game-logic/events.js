'use strict';

//file requirements
const api = require('./api');
const ui = require('./ui');
//const app = require('../app');

// game turn counter, increases with clicks on cells
let gameTurns = 0;
// array for game board values
let gameBoardArray = ['', '', '', '', '', '', '', '', ''];
// game over variable
let gameIsOver = false;
// variable for X/O switching
let player = 'X';

// reset board and 'POST' for new game
const onNewGame = function onNewGame(event) {
  event.preventDefault();
  $('.col-xs-4').text('');
  gameBoardArray = ['', '', '', '', '', '', '', '', ''];
  let data = {};
  player = 'X';
  api.newGame(data)
    .done(ui.newGameSuccess)
    .fail(ui.onError);
};

// allows player to place x/o of space is unocupied
// adds x/o to index value of array
const setGame = function() {

  if (player === 'X' && $(this).text() === '') {
    $(this).text('X');
    player = 'O';
    gameTurns++;


  } else if (player === 'O' && $(this).text() === '') {
    $(this).text('O');
    player = 'X';
    gameTurns++;

  }

  let index = $(this).data('index');
  gameBoardArray[index] = $(this).text();
  api.updateGame(gameBoardArray[index], $(this).text().toLowerCase(), gameIsOver);
  console.log(gameBoardArray);
};

const gameResolution = function() {
  let victor;
  if ((gameBoardArray[0] !== '') && gameBoardArray[0] === gameBoardArray[1] && gameBoardArray[1] === gameBoardArray[2]) {
    victor = gameBoardArray[0];
    gameIsOver = true;
    player = 'X';
    console.log(victor + ' has won.');
  } else if ((gameBoardArray[3] !== '') && gameBoardArray[3] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[5]) {
    gameIsOver = true;
    victor = gameBoardArray[3];
    console.log(victor + ' has won.');
  } else if ((gameBoardArray[6] !== '') && gameBoardArray[6] === gameBoardArray[7] && gameBoardArray[7] === gameBoardArray[8]) {
    gameIsOver = true;
    victor = gameBoardArray[6];
    console.log(victor + ' has won.');
  } else if ((gameBoardArray[0] !== '') && gameBoardArray[0] === gameBoardArray[3] && gameBoardArray[3] === gameBoardArray[6]) {
    gameIsOver = true;
    victor = gameBoardArray[0];
    console.log(victor + ' has won.');
  } else if ((gameBoardArray[1] !== '') && gameBoardArray[1] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[7]) {
    gameIsOver = true;
    victor = gameBoardArray[1];
    console.log(victor + ' has won.');
  } else if ((gameBoardArray[2] !== '') && gameBoardArray[2] === gameBoardArray[5] && gameBoardArray[5] === gameBoardArray[8]) {
    gameIsOver = true;
    victor = gameBoardArray[2];
    console.log(victor + ' has won.');
  } else if ((gameBoardArray[0] !== '') && gameBoardArray[0] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[8]) {
    gameIsOver = true;
    victor = gameBoardArray[0];
    console.log(victor + ' has won.');
  } else if ((gameBoardArray[2] !== '') && gameBoardArray[2] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[6]) {
    gameIsOver = true;
    victor = gameBoardArray[2];
    console.log(victor + ' has won.');
  } else if (gameTurns >= 9) {
    console.log('Tie');
    gameIsOver = true;
  }
};



module.exports = {
  onNewGame,
  gameBoardArray,
  gameTurns,
  gameIsOver,
  setGame,
  gameResolution,
};
