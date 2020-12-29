import { generateGameBoxes, ladders, snakes } from './generatorBoxes.js'
import { generatePlayers } from './playerGenerator.js'
import { playerOneTurn, playerTwoTurn } from './position.js'

const playerOneButton = document.querySelector(".player1-button");
const playerTwoButton = document.querySelector(".player2-button");
const diceRollDisplay = document.querySelector("diceroll-display");

playerOneButton.addEventListener('click', playerOneTurn);
playerTwoButton.addEventListener('click', playerTwoTurn);

generateGameBoxes();
generatePlayers();