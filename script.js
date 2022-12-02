
const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025', 'blue', 'orange'];
let btn = document.getElementById('btn');
let bgcolor= document.querySelector('.color');

btn.addEventListener('click', function () { 
    //get random number between 0 and 3 in order to select colors array (colors)
    let randomNumber = getRandomNum();
    document.body.style.backgroundColor = colors[randomNumber];
    bgcolor.textContent = colors[randomNumber];
 })


 function getRandomNum(){
    let clr = Math.floor(Math.random()*colors.length);
    console.log('this is random clr', clr);
    return clr;
}