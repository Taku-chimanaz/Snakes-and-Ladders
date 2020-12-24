function generateBoxes() {
    let container = document.querySelector(".container");

    for(let i=100; i > 0; i--) {

        let divBox = document.createElement('div');
        container.appendChild(divBox);
        divBox.className = i;
        divBox.style.gridArea = `${i}`;
        divBox.style.backgroundColor = 'green';
        divBox.style.height = '60px';
        divBox.style.width = '75px';
        
    }
}

generateBoxes();

