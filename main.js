var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var car1_w = 170;
var car1_h = 70;
var car1_i = "car1.png";
var car1_x = 10;
var car1_y = 10;

var car2_w = 170;
var car2_h = 70;
var car2_i = "car2.png";
var car2_x = 80;
var car2_y = 80;

var b_img = "carracing.png";

var b_imgTag, car1_imgTag, car2_imgTag;

function add() {
    b_imgTag = new Image();
    b_imgTag.onload = uploadBackground()
    b_imgTag.src = b_img;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1()
    car1_imgTag.src = car1_i;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2()
    car2_imgTag.src = car2_i;
}

//uploadImg

function uploadBackground() {
    ctx.drawImage(b_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_w, car1_h);
}

function uploadcar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_w, car2_h);
}

canvas.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    if (keyPressed == 38) {
        car1_up();
    }
    if (keyPressed == 40) {
        car1_down();
    }
    if (keyPressed == 37) {
        car1_left();
    }
    if (keyPressed == 39) {
        car1_right();
    }
    if (keyPressed == 87) {
        car2_up();
    }
    if (keyPressed == 83) {
        car2_down();
    }
    if (keyPressed == 65) {
        car2_left();
    }
    if (keyPressed == 68) {
        car2_right();
    }
}