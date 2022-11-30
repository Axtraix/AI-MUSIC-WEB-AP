song1=""
song2=""
left_wrist_x=0
left_wrist_y=0
right_wrist_x=0
right_wrist_y=0
function preload(){
song1=loadSound("metamorphosis.mp4")
song2=loadSound("レプリカント.mp4")
}
function setup(){
canvas=createCanvas(600,400)
canvas.center()
video=createCapture(VIDEO)
video.hide()
posenet=ml5.poseNet(video,modelLoaded)
posenet.on('pose',gotPoses)
}
function draw(){
image(video,0,0,600,400)
}
function modelLoaded(){
console,log("Posenet has been initialized successfully")
}
function gotPoses(results){
if(results.length>0){
left_wrist_x=results[0].pose.leftWrist.X;
right_wrist_x=results[0].pose.rightWrist.X;
left_wrist_x=results[0].pose.leftWrist.Y;
right_wrist_x=results[0].pose.rightWrist.Y;
}
}