const colors = ['green','red','rgb(133,122,200)','#f15225'];
let color = document.querySelector('.color');
let btn = document.getElementById('btn');
let bg = document.querySelector('.bg');

btn.addEventListener('click', function(){
    // get rondem between 0-3 form colors arr
    var r = getRandomNum();
    document.body.style.backgroundColor = colors[r];
    color.textContent = colors[r];
    btn.style.backgroundColor = colors[r];
    bg.style.backgroundColor = colors[r];
});

function getRandomNum(){
    return Math.floor(Math.random()*colors.length);
}

