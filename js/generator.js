//Selector

let playerOneButton = document.querySelector(".player1-button");
let playerTwoButton = document.querySelector(".player2-button");
let diceRollDisplay = document.querySelector(".diceroll-display");


// Event Listener

playerOneButton.addEventListener('click', playerOneTurn);
playerTwoButton.addEventListener('click', playerTwoTurn);


// Functions



//This will generate the boxes of the game
function generateGameBoxes() {
    
    let container = document.querySelector(".container");

    for(let i=100; i > 0; i--) {

        let divBox = document.createElement('div');
        container.appendChild(divBox);
        divBox.className = `div${i}`;
        divBox.textContent = i;
        divBox.style.color = "white";
        divBox.style.textAlign = "left"
        divBox.style.backgroundColor = 'green';
        divBox.style.height = '50px';
        divBox.style.width = '75px';
        
    }
}

generateGameBoxes();


//This will generate the players
function generatePlayers() {

    const playerColors = ['red', 'blue'];
    let playersContainer = document.querySelector(".players-container");

    playerColors.forEach( color => {
        
       
        let playerDiv = document.createElement('div');

        switch(color) {
            case 'red':
                playerDiv.className = 'player1';
                break;
            case 'blue':
                playerDiv.className = 'player2';
                break;
            default:
                 alert("Could not get the colors");
                break;
            }

        playersContainer.appendChild(playerDiv);
        



    })
}

generatePlayers();

let playerOneDiv = document.querySelector(".player1");
let playerTwoDiv = document.querySelector(".player2");


//This function will be triggered when the player one plays
function playerOneTurn() {

    const player = 1;
    const randomNumber = [1, 2, 3, 4, 5, 6];
    const randomDiceScore = randomNumber[Math.floor(Math.random() * randomNumber.length)]
    diceRollDisplay.textContent = randomDiceScore;
    movePlayerPosition(randomDiceScore, player);  
    
}


//This function will be triggered when the player two plays
function playerTwoTurn() {

    const player = 2
    const randomNumber = [1, 2, 3, 4, 5, 6];
    const randomDiceScore = randomNumber[Math.floor(Math.random() * randomNumber.length)]
    diceRollDisplay.textContent = randomDiceScore;
    movePlayerPosition(randomDiceScore, player);

}

//This will move the player to the next position
function movePlayerPosition(randomDiceScore, player)  {

    switch(player) {
        case 1:
            player = playerOneDiv;
            break;
        case 2:
            player = playerTwoDiv;
            break;
        default:
            alert("No valid player found🙄🙄🙄");
            break;
    }
    let nextposition;
    let currentPosition = player.parentElement.className;

    if(currentPosition == "players-container"){
        nextposition = document.querySelector(`.div${randomDiceScore}`);
        nextposition.appendChild(player);
    }else{
        nextposition = document.querySelector(`.div${ Number(currentPosition.substr(3)) + randomDiceScore}`);
        nextposition.appendChild(player);
        
    }
}




