canvas=document.getElementById("palm");
ctx=canvas.getContext("2d");


var RH=100;
var RW=90;
var RY=10;
var RX=10;

background_img=" mars.jpg ";
Rover_img=" rover.png ";


function add() {
    RTX= new Image();
    RTX.onload=RTX_load;
    RTX.src=background_img;

    ETX= new Image();
    ETX.onload=ETX_load;
    ETX.src=Rover_img;
}


function RTX_load() {
    ctx.drawImage(RTX,0,0,canvas.width,canvas.height);
}
function ETX_load() {
    ctx.drawImage(ETX,RX,RY,RW,RH);
}