let canvas = document.getElementById('snake');
let contex = canvas.getContext('2d');
let box = 32;

function crairBG(){
    contex.fillStyle = "lightgreen";
    contex.fillRect(0, 0, 16 * box, 16 * box)
}

crairBG();