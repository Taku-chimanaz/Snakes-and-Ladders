function generateGameBoxes() {
    
    let container = document.querySelector(".container");

    for(let i=100; i > 0; i--) {

        let divBox = document.createElement('div');
        container.appendChild(divBox);
        divBox.className = `div${i}`;
        divBox.style.color = "white";
        divBox.style.textAlign = "left";
        divBox.style.display = "flex";
        divBox.style.backgroundColor = 'green';
        divBox.style.height = '50px';
        divBox.style.width = '75px';
        ladders(divBox, i);
        snakes(divBox, i);
        
    }
}

function ladders(divBox, i) {

    switch(i){

        case 1:
            divBox.textContent = `${i}    L to 38`;
            break;
        case 4:
            divBox.textContent = `${i}    L to 14`;
            break;
        case 9:
            divBox.textContent = `${i}    L to 39`;
            break;
        case 21:
            divBox.textContent = `${i}    L to 42`;
            break;
        case 28:
            divBox.textContent = `${i}    L to 84`;
            break;
        case 51:
            divBox.textContent = `${i}    L to 67`;
            break;
        case 71:
            divBox.textContent = `${i}    L to 91`;
            break;
        case 80:
            divBox.textContent = `${i}    L to 100`;
            break;
        default:
            divBox.textContent = `${i}`;
            break;

    }
}


function snakes(divBox, i) {

    switch(i){

        case 16:
            divBox.textContent = `${i}    S to 6`;
            break;
        case 47:
            divBox.textContent = `${i}    S to 26`;
            break;
        case 49:
            divBox.textContent = `${i}    S to 11`;
            break;
        case 56:
            divBox.textContent = `${i}    S to 53`;
            break;
        case 62:
            divBox.textContent = `${i}    S to 19`;
            break;
        case 64:
            divBox.textContent = `${i}    S to 60`;
            break;
        case 87:
            divBox.textContent = `${i}    S to 24`;
            break;
        case 88:
            divBox.textContent = `${i}    S to 73`;
            break;
        case 95:
            divBox.textContent = `${i}    S to 75`;
            break;
        case 98:
            divBox.textContent = `${i}    S to 78`;
            break
        default:
            break;

    }
}



export { generateGameBoxes, ladders, snakes };