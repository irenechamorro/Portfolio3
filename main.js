
document.addEventListener('DOMContentLoaded', () => {
    let mousePosX = 0,
        mousePosY = 0,
        mouseCircle = document.getElementById('mouse-circle');

    document.onmousemove = (e) => {
        mousePosX = e.pageX;
        mousePosY = e.pageY;
    }

    let delay = 6,
        revisedMousePosX = 0,
        revisedMousePosY = 0;

    function delayMouseFollow() {
        requestAnimationFrame(delayMouseFollow);

        revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
        revisedMousePosY += (mousePosY - revisedMousePosY) / delay; 

        mouseCircle.style.top = revisedMousePosY + 'px';
        mouseCircle.style.left = revisedMousePosX + 'px';
    }
    delayMouseFollow();
});

let box = document.getElementById('box');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let box4 = document.getElementById('box4');
let box5 = document.getElementById('box5');
let body5 = document.getElementById('body');
var circle = document.querySelector('#circle');
// maybe add a cool background swicth between the gradients 
// everytime you ckick you get a little star or simple emoji

box.addEventListener('mouseover', function(){
    box.style.top = "0%"
})

box.addEventListener('mouseout', function(){
    box.style.top = "10%"
    //document.getElementById('genClothing').style.display = "none";

})

box2.addEventListener('mouseover', function(){
    box2.style.top = "10%"
    box.style.top = "0%"
})

box2.addEventListener('mouseout', function(){
    box2.style.top = "20%"
    box.style.top = "10%"
})

box3.addEventListener('mouseover', function(){
    box3.style.top = "10%"
    box2.style.top = "5%"
    box.style.top = "0%"
})

box3.addEventListener('mouseout', function(){
    box3.style.top = "30%"
    box2.style.top = "20%"
    box.style.top = "10%"
})

box4.addEventListener('mouseover', function(){
    box4.style.top = "15%"
    box3.style.top = "10%"
    box2.style.top = "5%"
    box.style.top = "0%"
})

box4.addEventListener('mouseout', function(){
    box4.style.top = "40%"
    box3.style.top = "30%"
    box2.style.top = "20%"
    box.style.top = "10%"
})

box5.addEventListener('mouseover', function(){

})

box5.addEventListener('mouseout', function(){

})


body5.addEventListener('click', function(){
    body5.style.backgroundColor= "white"
})

document.addEventListener('mousemove', function(e){
    circle.style.top = e.pageY
    circle.style.left = e.pageX
})


