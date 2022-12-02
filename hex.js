const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
let btn = document.getElementById('btn');
let bgcolor= document.querySelector('.color');

btn.addEventListener('click', function(){
let hexColor = '#';
for(let i=0; i<6; i++){
hexColor += hex[getRandomNum()];
}
document.body.style.backgroundColor = hexColor;
bgcolor.textContent = hexColor;
});

function getRandomNum(){
    let clr = Math.floor(Math.random()*hex.length);
    console.log('this is random clr', clr);
    return clr;
}

