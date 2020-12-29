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

export { generatePlayers };
