let redlight = document.getElementById('RL');
let yellowlight = document.getElementById('YL');
let greenlight = document.getElementById('GL');


let selectedlight = 1;

let nextbtn = document.getElementById('nextbtn');

nextbtn.addEventListener('click', (event)=>{
    if(selectedlight == 1){
        redlight.style.background = 'gray';
        greenlight.style.background = 'green';
        selectedlight++;
    }
    else if(selectedlight == 2){
        greenlight.style.background = 'gray';
        yellowlight.style.background = 'yellow';
        selectedlight++;
    }
    else if(selectedlight == 3){
        yellowlight.style.background = 'gray';
        redlight.style.background = 'red';
        selectedlight = 1;
    }
})