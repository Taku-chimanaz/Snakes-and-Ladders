const diceRollDisplay = document.querySelector(".diceroll-display");

function playerOneTurn() {

    const player = 1;
    const randomNumber = [1, 2, 3, 4, 5, 6];
    const randomDiceScore = randomNumber[Math.floor(Math.random() * randomNumber.length)]
    diceRollDisplay.textContent = randomDiceScore;
    movePlayerPosition(randomDiceScore, player);  
    
}

function playerTwoTurn() {

    const player = 2
    const randomNumber = [1, 2, 3, 4, 5, 6];
    const randomDiceScore = randomNumber[Math.floor(Math.random() * randomNumber.length)]
    diceRollDisplay.textContent = randomDiceScore;
    movePlayerPosition(randomDiceScore, player);

}

function movePlayerPosition(randomDiceScore, player)  {

    switch(player) {
        case 1:
            player = document.querySelector('.player1');
            break;
        case 2:
            player = document.querySelector('.player2');
            break;
        default:
            alert("No valid player found🙄🙄🙄");
            break;
    }
    let nextPosition;
    let currentPosition = player.parentElement.className;

    if(currentPosition == "players-container"){
        nextPosition = document.querySelector(`.div${randomDiceScore}`);
        nextPosition.appendChild(player);
    }else{
        let nextPosNumber = Number(currentPosition.substr(3)) + randomDiceScore
        if(nextPosNumber >= 100) {
            nextPosition = document.querySelector(`.div100`);
            nextPosition.appendChild(player);
            alert(`${player.className} You Won🎇🎇🥳🥳`)
        }else {
            nextPosition = document.querySelector(`.div${nextPosNumber}`);
            nextPosition.appendChild(player);
        }
        
        
    }
    nextPosition = nextPosition.className;
    setTimeout(() => {
        upLadders(nextPosition, player);
        downSnake(nextPosition, player);
    }, 1000)

}



function upLadders(nextPosition, player) {

    switch(nextPosition){

        case 'div1':
            document.querySelector('.div38').appendChild(player);
            break;
        case 'div4':
            document.querySelector('.div14').appendChild(player);
            break;
        case 'div9':
            document.querySelector('.div39').appendChild(player);
            break;
        case 'div21':
            document.querySelector('.div42').appendChild(player);
            break;
        case 'div28':
            document.querySelector('.div84').appendChild(player);
            break;
        case 'div51':
            document.querySelector('.div67').appendChild(player);
            break;
        case 'div71':
            document.querySelector('.div91').appendChild(player);
            break;
        case 'div80':
            document.querySelector('.div100').appendChild(player);
            alert("You Won🎇🎇🥳🥳");
            break;
        default:
            break;

    }
}

function downSnake(nextPosition, player) {

    switch(nextPosition){

        case 'div16':
            document.querySelector('.div6').appendChild(player);
            break;
        case 'div47':
            document.querySelector('.div26').appendChild(player);
            break;
        case 'div49':
            document.querySelector('.div11').appendChild(player);
            break;
        case 'div56':
            document.querySelector('.div53').appendChild(player);
            break;
        case 'div62':
            document.querySelector('.div19').appendChild(player);
            break;
        case 'div64':
            document.querySelector('.div60').appendChild(player);
            break;
        case 'div87':
            document.querySelector('.div24').appendChild(player);
            break;
        case 'div88':
            document.querySelector('.div73').appendChild(player);
            break;
        case 'div95':
            document.querySelector('.div75').appendChild(player);
            break;
        case 'div98':
            document.querySelector('.div78').appendChild(player);
            break
        default:
            break;

    }
}


export { playerOneTurn, playerTwoTurn, movePlayerPosition, upLadders, downSnake }