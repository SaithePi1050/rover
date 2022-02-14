var canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

marsimages = ["mars1.jpeg", "mars2.jpeg", "mars3.jpeg", "mars.jpg"];

var mars = Math.random()*4;
var random = Math.floor(mars);
var image = marsimages[random];
var roverwidth = 100;
var roverhight = 100;
var roverx = 20;
var rovery = 20;

var masimage = "";
var roverimage = ""; 

function add() 
{
    masimage = new Image();
    masimage.onload = loadmars;
    masimage.src = image;

    roverimage = new Image();
    roverimage.onload = loadrover;
    roverimage.src = "rover.png";
}

function loadmars() 
{
    ctx.drawImage(masimage, 0, 0, canvas.width, canvas.height);
}

function loadrover()
{
    ctx.drawImage(roverimage, roverx, rovery, roverwidth, roverhight);
}

window.addEventListener("keydown",keypress);

function keypress(e) 
{
   keypress = e.keyCode; 
   console.log(keypress);
   
   if (keypress == "38") {
       up();
   }
   if  (keypress == "39") {
        right();
   }
    if (keypress == "40") {
        down();
    }
    if (keypress == "37") {
        left();
    }
}

function up() 
{
    if (rovery >= 0) {
        rovery = rovery - 10;
        loadmars();
        loadrover();
    }
}

function down() 
{
    if (rovery <= 500) {
        rovery = rovery + 10;
        loadmars();
        loadrover();
    }
}

function right() 
{
    if (roverx <= 700) {
        roverx = rovery + 10;
        loadmars();
        loadrover();
    }
}

function left() 
{
    if (roverx >= 0) {
        roverx = rovery - 10;
        loadmars();
        loadrover();
    }
}