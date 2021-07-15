const hex = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let color = document.querySelector('.color');
let btn = document.getElementById('btn');
let bg = document.querySelector('.bg');

btn.addEventListener('click', function(){
    // get rondem between 0-3 form colors arr
    let hexColor = '#';
    for(let i = 0; i < 6;i++){
        hexColor += hex[getRandomHex()];
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
    btn.style.backgroundColor = hexColor;
    bg.style.backgroundColor = hexColor;
});

function getRandomHex(){
    return Math.floor(Math.random() * hex.length);
}