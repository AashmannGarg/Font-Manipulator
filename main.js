noseX=0;
noseY=0;
rightWristX=0;
leftWristX=0;
difference=0;

function preload() {

}

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560, 100);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("The Posenet Is Initialised");
}

function draw() {
    background('#33FCFF');
    document.getElementById("text_size").innerHTML="width and height of the text is "+ difference+"px";
    textSize(difference);
    fill("#FFF933");
    stroke("#FF3333");
    text("Aashmann",50,200);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("noseX="+noseX+" , noseY="+noseY);
        console.log("leftWristX="+leftWristX+" , rightWristX="+rightWristX+" , difference= "+difference);
    }
}