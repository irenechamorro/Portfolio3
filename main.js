let color1 = '#FFDBE9';
let color2 = '#D1FEB8';
let flag = true; 
let button = document.getElementById('button');
let trigger1 = document.getElementById('trigger1');
let trigger2 = document.getElementById('trigger2');
let trigger3 = document.getElementById('trigger3');
let trigger4 = document.getElementById('trigger4');
let trigger5 = document.getElementById('trigger5');
let trigger6 = document.getElementById('trigger6');
let quit = false;
let exit = document.getElementById('exit');
let exit1 = document.getElementById('exit1');
let exit2 = document.getElementById('exit2');
let exit3 = document.getElementById('exit3');
let exit4 = document.getElementById('exit4');
let exit5 = document.getElementById('exit5');

button.addEventListener('click', function(){
    if (flag == true){
        button.style.background = color1;
        trigger1.style.backgroundColor = "white";
        trigger2.style.backgroundColor = "white";
        trigger3.style.backgroundColor = "white";
        trigger4.style.backgroundColor = "white";
        trigger5.style.backgroundColor = "white";
        trigger6.style.backgroundColor = "white";
        flag = false;
    }
    else if (flag == false){
        button.style.background = color2;
        trigger1.style.backgroundColor = "#ccff00";
        trigger2.style.backgroundColor = "#ccff00";
        trigger3.style.backgroundColor = "#ccff00";
        trigger4.style.backgroundColor = "#ccff00";
        trigger5.style.backgroundColor = "#ccff00";
        trigger6.style.backgroundColor = "#ccff00";
        flag = true;
    }
})

trigger1.addEventListener('click', function(){
    if (quit == false){
    document.getElementById('genClothing').style.display = "block";
}
})

exit.addEventListener('click', function(){
    document.getElementById('genClothing').style.display = "none";
    document.getElementById('portfolio').style.display = "none";
    document.getElementById('oddPhobias').style.display = "none";
    document.getElementById('dataVis').style.display = "none";
    document.getElementById('holiday').style.display = "none";
    document.getElementById('processing').style.display = "none";
})


trigger2.addEventListener('click', function(){
    if (quit == false){
    document.getElementById('portfolio').style.display = "block";
}
})

exit1.addEventListener('click', function(){
    document.getElementById('genClothing').style.display = "none";
    document.getElementById('portfolio').style.display = "none";
    document.getElementById('oddPhobias').style.display = "none";
    document.getElementById('dataVis').style.display = "none";
    document.getElementById('holiday').style.display = "none";
    document.getElementById('processing').style.display = "none";
})


trigger3.addEventListener('click', function(){
    if (quit == false){
    document.getElementById('dataVis').style.display = "block";
}
})

exit2.addEventListener('click', function(){
    document.getElementById('genClothing').style.display = "none";
    document.getElementById('portfolio').style.display = "none";
    document.getElementById('oddPhobias').style.display = "none";
    document.getElementById('dataVis').style.display = "none";
    document.getElementById('holiday').style.display = "none";
    document.getElementById('processing').style.display = "none";
})



trigger4.addEventListener('click', function(){
    if (quit == false){
    document.getElementById('oddPhobias').style.display = "block";
}
})

exit3.addEventListener('click', function(){
    document.getElementById('genClothing').style.display = "none";
    document.getElementById('portfolio').style.display = "none";
    document.getElementById('oddPhobias').style.display = "none";
    document.getElementById('dataVis').style.display = "none";
    document.getElementById('holiday').style.display = "none";
    document.getElementById('processing').style.display = "none";
})



trigger5.addEventListener('click', function(){
    if (quit == false){
    document.getElementById('holiday').style.display = "block";
}
})

exit4.addEventListener('click', function(){
    document.getElementById('genClothing').style.display = "none";
    document.getElementById('portfolio').style.display = "none";
    document.getElementById('oddPhobias').style.display = "none";
    document.getElementById('dataVis').style.display = "none";
    document.getElementById('holiday').style.display = "none";
    document.getElementById('processing').style.display = "none";
})




trigger6.addEventListener('click', function(){
    if (quit == false){
    document.getElementById('processing').style.display = "block";
}
})

exit5.addEventListener('click', function(){
    document.getElementById('genClothing').style.display = "none";
    document.getElementById('portfolio').style.display = "none";
    document.getElementById('oddPhobias').style.display = "none";
    document.getElementById('dataVis').style.display = "none";
    document.getElementById('holiday').style.display = "none";
    document.getElementById('processing').style.display = "none";
})


