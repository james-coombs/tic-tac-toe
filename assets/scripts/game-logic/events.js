'use strict';

//file requirements
const api = require('./api');
const ui = require('./ui');
const getFormFields = require('../../../lib/get-form-fields');

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
  $('.game-cell').removeClass('trans-grey-bg');
  player = 'x';
  gameIsOver = false;
  gameTurns = 0;
  gameBoardArray = ['', '', '', '', '', '', '', '', '', ];
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
  api.getGameById(data)
    .done(ui.getGameByIdSuccess)
    .fail(ui.onError);
};

// const createOldGameArray = function (data) {
// $('.cell-0').text(data.game.cells[0]);
// $('.cell-1').text(data.game.cells[1]);
// $('.cell-2').text(data.game.cells[2]);
// $('.cell-3').text(data.game.cells[3]);
// $('.cell-4').text(data.game.cells[4]);
// $('.cell-5').text(data.game.cells[5]);
// $('.cell-6').text(data.game.cells[6]);
// $('.cell-7').text(data.game.cells[7]);
// $('.cell-8').text(data.game.cells[8]);
// };

// const renderOldGame = function () {
//   event.preventDefault();
//   api.getGameById()
//     .done(createOldGameArray);
// };

const onGetGamesPlayed = function (data) {
  event.preventDefault();
  api.getGamesPlayed(data)
    .done(ui.getGamesPlayedSuccess)
    .fail(ui.onError);
};

const gameResolutionXorO = function() {
  let victor;
  if ((gameBoardArray[0] === 'x') && gameBoardArray[0] === gameBoardArray[1] && gameBoardArray[1] === gameBoardArray[2]) {
    victor = gameBoardArray[0];
    gameIsOver = true;
    $('.info').text('The winner is  ' + victor + '. Press the New Game button to play a new game');
  } else if ((gameBoardArray[3] === 'x') && gameBoardArray[3] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[5]) {
    gameIsOver = true;
    victor = gameBoardArray[3];
    $('.info').text('The winner is  ' + victor + '. Press the New Game button to play a new game');
  } else if ((gameBoardArray[6] === 'x') && gameBoardArray[6] === gameBoardArray[7] && gameBoardArray[7] === gameBoardArray[8]) {
    gameIsOver = true;
    victor = gameBoardArray[6];
    $('.info').text('The winner is  ' + victor + '. Press the New Game button to play a new game');
  } else if ((gameBoardArray[0] === 'x') && gameBoardArray[0] === gameBoardArray[3] && gameBoardArray[3] === gameBoardArray[6]) {
    gameIsOver = true;
    victor = gameBoardArray[0];
    $('.info').text('The winner is  ' + victor + '. Press the New Game button to play a new game');
  } else if ((gameBoardArray[1] === 'x') && gameBoardArray[1] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[7]) {
    gameIsOver = true;
    victor = gameBoardArray[1];
    $('.info').text('The winner is  ' + victor + '. Press the New Game button to play a new game');
  } else if ((gameBoardArray[2] === 'x') && gameBoardArray[2] === gameBoardArray[5] && gameBoardArray[5] === gameBoardArray[8]) {
    gameIsOver = true;
    victor = gameBoardArray[2];
    $('.info').text('The winner is  ' + victor + '. Press the New Game button to play a new game');
  } else if ((gameBoardArray[0] === 'x') && gameBoardArray[0] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[8]) {
    gameIsOver = true;
    victor = gameBoardArray[0];
    $('.info').text('The winner is  ' + victor + '. Press the New Game button to play a new game');
  } else if ((gameBoardArray[2] === 'x') && gameBoardArray[2] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[6]) {
    gameIsOver = true;
    victor = gameBoardArray[2];
    $('.info').text('The winner is  ' + victor + '. Press the New Game button to play a new game');
  }else if ((gameBoardArray[0] === 'o') && gameBoardArray[0] === gameBoardArray[1] && gameBoardArray[1] === gameBoardArray[2]) {
    victor = gameBoardArray[0];
    gameIsOver = true;
    $('.info').text('The winner is  ' + victor + '. Press the New Game button to play a new game');
  } else if ((gameBoardArray[3] === 'o') && gameBoardArray[3] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[5]) {
    gameIsOver = true;
    victor = gameBoardArray[3];
    $('.info').text('The winner is  ' + victor + '. Press the New Game button to play a new game');
  } else if ((gameBoardArray[6] === 'o') && gameBoardArray[6] === gameBoardArray[7] && gameBoardArray[7] === gameBoardArray[8]) {
    gameIsOver = true;
    victor = gameBoardArray[6];
    $('.info').text('The winner is  ' + victor + '. Press the New Game button to play a new game');
  } else if ((gameBoardArray[0] === 'o') && gameBoardArray[0] === gameBoardArray[3] && gameBoardArray[3] === gameBoardArray[6]) {
    gameIsOver = true;
    victor = gameBoardArray[0];
    $('.info').text('The winner is  ' + victor + '. Press the New Game button to play a new game');
  } else if ((gameBoardArray[1] === 'o') && gameBoardArray[1] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[7]) {
    gameIsOver = true;
    victor = gameBoardArray[1];
    $('.info').text('the winner is  ' + victor + '. Press the New Game button to play a new game');
  } else if ((gameBoardArray[2] === 'o') && gameBoardArray[2] === gameBoardArray[5] && gameBoardArray[5] === gameBoardArray[8]) {
    gameIsOver = true;
    victor = gameBoardArray[2];
    $('.info').text('The winner is  ' + victor + '. Press the New Game button to play a new game');
  } else if ((gameBoardArray[0] === 'o') && gameBoardArray[0] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[8]) {
    gameIsOver = true;
    victor = gameBoardArray[0];
    $('.info').text('The winner is  ' + victor + '. Press the New Game button to play a new game');
  } else if ((gameBoardArray[2] === 'o') && gameBoardArray[2] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[6]) {
    gameIsOver = true;
    victor = gameBoardArray[2];
    $('.info').text('The winner is  ' + victor + '. Press the New Game button to play a new game');
  }
};

const gameResolutionTie = function() {
  if (gameTurns === 9) {
    $('.info').text('It is a tie. Press the New Game button to play a new game.');
    gameIsOver = true;
  }
};

const hideBoardAfterResolution = function () {
  if (gameIsOver === true) {
    // $('.game-board').hide();
  }
};

const setGame = function() {
  let i;
  if (player === 'x' && $(this).text() === '') {
    $(this).text('x').css("font-size", 80 + "px");
    $(this).addClass('trans-grey-bg');
    gameTurns++;
    player = 'o';
    $('.info').text('it is ' + player + '\'s move');
  }
  if (player === 'o' && $(this).text() === '') {
    $(this).text('o').css("font-size", 80 + "px");
    $(this).addClass('trans-grey-bg');
    gameTurns++;
    player = 'x';
    $('.info').text('it is ' + player + '\'s move');
  }
  i = $(this).data('index');
  gameBoardArray[i] = $(this).text();
  gameResolutionXorO();
  gameResolutionTie();
  hideBoardAfterResolution();
  api.updateGame(i, $(this).text(), gameIsOver);
};

module.exports = {
  onNewGame,
  onGetGameById,
  gameBoardArray,
  gameTurns,
  gameIsOver,
  setGame,
  gameResolutionXorO,
  gameResolutionTie,
  onGetGamesPlayed,
  hideBoardAfterResolution,
};
