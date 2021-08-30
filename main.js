var canvas,ctx,rover_x,rover_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_x = 20;
rover_y = 100;

function AddImage(){
    backgroundimage = new Image();
    backgroundimage.onload = UploadBackground;
    backgroundimage.src = "mars.jpg";

    rover_image = new Image();
    rover_image.onload = UploadRover;
    rover_image.src = "rover.png";
}
function UploadBackground(){
    ctx.drawImage(backgroundimage,0,0,canvas.width,canvas.height);
}
function UploadRover(){ 
    ctx.drawImage(rover_image,rover_x,rover_y,100,100);
}

window.addEventListener("keydown",KeyPressed);

function KeyPressed(e){
    Key_Code = e.keyCode;
    if(Key_Code == 38){
        Up();
    }
    else if(Key_Code == 40){
        Down();
    }
    else if(Key_Code == 37){
        Left();
    }
    else if(Key_Code == 39){
        Right();
    }
}

function Up(){
    if(rover_y >= 5){
        rover_y = rover_y - 5;
        UploadBackground();
        UploadRover();
    }
}
function Down(){
    if(rover_y <= 500){
        rover_y = rover_y + 5;
        UploadBackground();
        UploadRover();
    }
}
function Left(){
    if(rover_x >= 1){
        rover_x= rover_x - 5;
        UploadBackground();
        UploadRover();
    }
}
function Right(){
    if(rover_x <= 700){
        rover_x = rover_x + 5;
        UploadBackground();
        UploadRover();
    }
}