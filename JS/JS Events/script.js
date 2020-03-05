const potato = document.getElementById('potato');
const tomato = document.getElementById('tomato');
const stuff = document.getElementById('stuff');
const things = document.getElementById('things');
const response = document.getElementById('response');
const my_input = document.getElementById('my_input');

const btnClicked = evt => {
    switch(evt.target.id) {
        case 'potato':
            response.innerHTML = my_input.value;
            break;
        case 'tomato':
            response.innerHTML = 'I LOVE tomatoes!';
            break;
        case 'stuff':
            response.innerHTML = "Don't touch my stuff!";
            break;
        case 'things':
            let rand = Math.floor(Math.random() * 50) +1;
            response.innerHTML = `Look at all ${rand} of the things.`;
            break;
    }
}

potato.addEventListener('click', btnClicked);
tomato.addEventListener('dblclick', btnClicked);
stuff.addEventListener('mouseover', btnClicked);
things.addEventListener('mouseout', btnClicked);