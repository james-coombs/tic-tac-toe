'use strict';

//file requirements
const api = require('./api');
const ui = require('./ui');
const getFormFields = require('../../../lib/get-form-fields');
//const app = require('../app');

// game turn counter, increases with clicks on cells
let gameTurns = 0;
// array for game board values
let gameBoardArray = ['', '', '', '', '', '', '', '', '', ];
// game over variable
let gameIsOver = false;
// variable for X/O switching
let player = 'x';

// reset board and 'POST' for new game
const onNewGame = function onNewGame(event) {
  event.preventDefault();
  player = 'x';
  gameIsOver = false;
  gameTurns = 0;
  $('.col-xs-4').text('');
  $('.game-board').show();
  let data = {};
  player = 'x';
  api.newGame(data)
    .done(ui.newGameSuccess)
    .fail(ui.onError);
};

const onGetGameById = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  //console.log(data);
  $('.game-board').show();
  api.getGameById(data)
    .done(ui.getGameByIdSuccess)
    .fail(ui.onError);
};

// const preventPlay = function() {
//   if (gameIsOver === true) {
//     $('.game-cell').click(function() {
//       return false;
//     });
//   }
// };

const gameResolutionX = function() {
  let victor;
  if ((gameBoardArray[0] === 'x') && gameBoardArray[0] === gameBoardArray[1] && gameBoardArray[1] === gameBoardArray[2]) {
    victor = gameBoardArray[0];
    gameIsOver = true;
    console.log(victor + ' has won.');
    $('#info').text('the winner is  ' + victor);
  } else if ((gameBoardArray[3] === 'x') && gameBoardArray[3] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[5]) {
    gameIsOver = true;
    victor = gameBoardArray[3];
    console.log(victor + ' has won.');
    $('#info').text('the winner is  ' + victor);
  } else if ((gameBoardArray[6] === 'x') && gameBoardArray[6] === gameBoardArray[7] && gameBoardArray[7] === gameBoardArray[8]) {
    gameIsOver = true;
    victor = gameBoardArray[6];
    console.log(victor + ' has won.');
    $('#info').text('the winner is  ' + victor);
  } else if ((gameBoardArray[0] === 'x') && gameBoardArray[0] === gameBoardArray[3] && gameBoardArray[3] === gameBoardArray[6]) {
    gameIsOver = true;
    victor = gameBoardArray[0];
    console.log(victor + ' has won.');
    $('#info').text('the winner is  ' + victor);
  } else if ((gameBoardArray[1] === 'x') && gameBoardArray[1] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[7]) {
    gameIsOver = true;
    victor = gameBoardArray[1];
    console.log(victor + ' has won.');
    $('#info').text('the winner is  ' + victor);
  } else if ((gameBoardArray[2] === 'x') && gameBoardArray[2] === gameBoardArray[5] && gameBoardArray[5] === gameBoardArray[8]) {
    gameIsOver = true;
    victor = gameBoardArray[2];
    console.log(victor + ' has won.');
    $('#info').text('the winner is  ' + victor);
  } else if ((gameBoardArray[0] === 'x') && gameBoardArray[0] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[8]) {
    gameIsOver = true;
    victor = gameBoardArray[0];
    console.log(victor + ' has won.');
    $('#info').text('the winner is  ' + victor);
  } else if ((gameBoardArray[2] === 'x') && gameBoardArray[2] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[6]) {
    gameIsOver = true;
    victor = gameBoardArray[2];
    console.log(victor + ' has won.');
    $('#info').text('the winner is  ' + victor);
  }
};

const gameResolutionO = function() {
  let victor;
  if ((gameBoardArray[0] === 'O') && gameBoardArray[0] === gameBoardArray[1] && gameBoardArray[1] === gameBoardArray[2]) {
    victor = gameBoardArray[0];
    gameIsOver = true;
    console.log(victor + ' has won.');
    $('#info').text('the winner is  ' + victor);
  } else if ((gameBoardArray[3] === 'o') && gameBoardArray[3] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[5]) {
    gameIsOver = true;
    victor = gameBoardArray[3];
    //console.log(victor + ' has won.');
    $('#info').text('the winner is  ' + victor);
  } else if ((gameBoardArray[6] === 'o') && gameBoardArray[6] === gameBoardArray[7] && gameBoardArray[7] === gameBoardArray[8]) {
    gameIsOver = true;
    victor = gameBoardArray[6];
    //console.log(victor + ' has won.');
    $('#info').text('the winner is  ' + victor);
  } else if ((gameBoardArray[0] === 'o') && gameBoardArray[0] === gameBoardArray[3] && gameBoardArray[3] === gameBoardArray[6]) {
    gameIsOver = true;
    victor = gameBoardArray[0];
    //console.log(victor + ' has won.');
    $('#info').text('the winner is  ' + victor);
  } else if ((gameBoardArray[1] === 'o') && gameBoardArray[1] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[7]) {
    gameIsOver = true;
    victor = gameBoardArray[1];
    //console.log(victor + ' has won.');
    $('#info').text('the winner is  ' + victor);
  } else if ((gameBoardArray[2] === 'o') && gameBoardArray[2] === gameBoardArray[5] && gameBoardArray[5] === gameBoardArray[8]) {
    gameIsOver = true;
    victor = gameBoardArray[2];
    //console.log(victor + ' has won.');
    $('#info').text('the winner is  ' + victor);
  } else if ((gameBoardArray[0] === 'o') && gameBoardArray[0] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[8]) {
    gameIsOver = true;
    victor = gameBoardArray[0];
    //console.log(victor + ' has won.');
    $('#info').text('the winner is  ' + victor);
  } else if ((gameBoardArray[2] === 'o') && gameBoardArray[2] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[6]) {
    gameIsOver = true;
    victor = gameBoardArray[2];
    //console.log(victor + ' has won.');
    $('#info').text('the winner is  ' + victor);
  }
};

const gameResolutionTie = function() {
  if (gameTurns >= 9) {
    //console.log('Tie');
    $('#info').text('it is a Tie');
    gameIsOver = true;
  }
};

const setGame = function() {
  let i;

  if (player === 'x' && $(this).text() === '') {
    $(this).text('x');
    gameTurns++;
    player = 'o';
    $('#info').text('it is ' + player + 's move');
  }
  if (player === 'o' && $(this).text() === '') {

    $(this).text('o');
    gameTurns++;
    player = 'x';
    $('#info').text('it is ' + player + 's move');
  }
  i = $(this).data('index');
  gameBoardArray[i] = $(this).text();
  gameResolutionX();
  gameResolutionO();
  gameResolutionTie();
  api.updateGame(i, $(this).text(), gameIsOver);
  console.log(gameBoardArray);
};

// allows player to place x/o of space is unocupied
// adds x/o to index value of array

//let index = (event.target);
//let cellClicked = (event.target);
//   let id;
//   if (player === 'X' && $(this).text() === '') {
//     $(event.target).text('X');
//     gameTurns++;
//     gameBoardArray[(this)] = player;
//     console.log(gameBoardArray);
//     gameResolution();
//     api.updateGame(id, player, gameIsOver);
//     player = 'O';
//
//   }
//   else if (player === 'O' && $(this).text() === '') {
//     gameTurns++;
//     $(event.target).text('O');
//     id = player;
//     console.log(gameBoardArray);
//     gameResolution();
//     api.updateGame(id, player, gameIsOver);
//     console.log(gameBoardArray);
//     player = 'X';
//   }
// };

module.exports = {
  onNewGame,
  onGetGameById,
  gameBoardArray,
  gameTurns,
  gameIsOver,
  setGame,
  gameResolutionX,
  gameResolutionO,
  gameResolutionTie,
};
