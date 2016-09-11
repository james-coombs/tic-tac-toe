'use strict';

//file requirements
const api = require('./api');
const ui = require('./ui');
const getFormFields = require('../../../lib/get-form-fields');
//const app = require('../app');

// game turn counter, increases with clicks on cells
let gameTurns = 0;
// array for game board values
let gameBoardArray = new Array(9);
// game over variable
let gameIsOver = false;
// variable for X/O switching
let player = 'X';

// reset board and 'POST' for new game
const onNewGame = function onNewGame(event) {
  event.preventDefault();
  $('.col-xs-4').text('');
  gameBoardArray = [];
  let data = {};
  player = 'X';
  api.newGame(data)
    .done(ui.newGameSuccess)
    .fail(ui.onError);
};

const onGetGameById = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log(data);
  api.getGameById(data)
    .done(ui.getGameByIdSuccess)
    .fail(ui.onError);
};

const preventPlay = function() {
  if (gameIsOver === true) {
    $('game-cell').click(function() {
      return false;
    });
  }
};

const gameResolution = function() {
  let victor;
  if ((gameBoardArray[0] === 'X') && gameBoardArray[0] === gameBoardArray[1] && gameBoardArray[1] === gameBoardArray[2]) {
    victor = gameBoardArray[0];
    gameIsOver = true;
    console.log(victor + ' has won.');
  } else if ((gameBoardArray[3] === 'X') && gameBoardArray[3] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[5]) {
    gameIsOver = true;
    victor = gameBoardArray[3];
    console.log(victor + ' has won.');
  } else if ((gameBoardArray[6] === 'X') && gameBoardArray[6] === gameBoardArray[7] && gameBoardArray[7] === gameBoardArray[8]) {
    gameIsOver = true;
    victor = gameBoardArray[6];
    console.log(victor + ' has won.');
  } else if ((gameBoardArray[0] === 'X') && gameBoardArray[0] === gameBoardArray[3] && gameBoardArray[3] === gameBoardArray[6]) {
    gameIsOver = true;
    victor = gameBoardArray[0];
    console.log(victor + ' has won.');
  } else if ((gameBoardArray[1] === 'X') && gameBoardArray[1] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[7]) {
    gameIsOver = true;
    victor = gameBoardArray[1];
    console.log(victor + ' has won.');
  } else if ((gameBoardArray[2] === 'X') && gameBoardArray[2] === gameBoardArray[5] && gameBoardArray[5] === gameBoardArray[8]) {
    gameIsOver = true;
    victor = gameBoardArray[2];
    console.log(victor + ' has won.');
  } else if ((gameBoardArray[0] === 'X') && gameBoardArray[0] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[8]) {
    gameIsOver = true;
    victor = gameBoardArray[0];
    console.log(victor + ' has won.');
  } else if ((gameBoardArray[2] === 'X') && gameBoardArray[2] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[6]) {
    gameIsOver = true;
    victor = gameBoardArray[2];
    console.log(victor + ' has won.');
    if ((gameBoardArray[0] === 'O') && gameBoardArray[0] === gameBoardArray[1] && gameBoardArray[1] === gameBoardArray[2]) {
      victor = gameBoardArray[0];
      gameIsOver = true;
      console.log(victor + ' has won.');
    } else if ((gameBoardArray[3] === 'O') && gameBoardArray[3] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[5]) {
      gameIsOver = true;
      victor = gameBoardArray[3];
      console.log(victor + ' has won.');
    } else if ((gameBoardArray[6] === 'O') && gameBoardArray[6] === gameBoardArray[7] && gameBoardArray[7] === gameBoardArray[8]) {
      gameIsOver = true;
      victor = gameBoardArray[6];
      console.log(victor + ' has won.');
    } else if ((gameBoardArray[0] === 'O') && gameBoardArray[0] === gameBoardArray[3] && gameBoardArray[3] === gameBoardArray[6]) {
      gameIsOver = true;
      victor = gameBoardArray[0];
      console.log(victor + ' has won.');
    } else if ((gameBoardArray[1] === 'O') && gameBoardArray[1] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[7]) {
      gameIsOver = true;
      victor = gameBoardArray[1];
      console.log(victor + ' has won.');
    } else if ((gameBoardArray[2] === 'O') && gameBoardArray[2] === gameBoardArray[5] && gameBoardArray[5] === gameBoardArray[8]) {
      gameIsOver = true;
      victor = gameBoardArray[2];
      console.log(victor + ' has won.');
    } else if ((gameBoardArray[0] === 'O') && gameBoardArray[0] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[8]) {
      gameIsOver = true;
      victor = gameBoardArray[0];
      console.log(victor + ' has won.');
    } else if ((gameBoardArray[2] === 'O') && gameBoardArray[2] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[6]) {
      gameIsOver = true;
      victor = gameBoardArray[2];
      console.log(victor + ' has won.');
  } else if (gameTurns === 9) {
    console.log('Tie');
    gameIsOver = true;
  }
}
};

const setGame = function() {
let i;
  if (player === 'X' && $(this).text() === '') {
    $(this).text('X');
    gameTurns++;
    player = 'O';
    console.log(gameBoardArray);
  } if (player === 'O' && $(this).text() === '') {
    $(this).text('O');
    gameTurns++;
    player = 'X';
    console.log(gameBoardArray);
  }
  i = $(this).data('index');
  gameBoardArray[i] = $(this).text();
  gameResolution();
  api.updateGame(i, $(this).text().toLowerCase(), gameIsOver);
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
  gameResolution,
  preventPlay,
};
