function generateBoxes() {
    let container = document.querySelector(".container")
    for(let i=1; i <= 100; i++) {

        let divBox = document.createElement('div');
        divBox.className = i;
        divBox.style.gridArea = i;
        divBox.style.backgroundColor = 'green';
        divBox.style.height = '50px';
        divBox.style.width = '50px';
        container.appendChild(divBox);
    }
}

//generateBoxes();

