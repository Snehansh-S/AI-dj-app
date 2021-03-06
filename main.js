song1="";
song2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function gotPoses(results){
    console.log(results);
}
function modelLoaded(){
    console.log("Posenet Model is initialized!");
}
function draw(){
    image(video,0,0,600,500);
}
function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
