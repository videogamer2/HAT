rightEarX=0;
rightEarY=0;


function preload() {
  partyHat = loadImage('https://cdn-icons-png.flaticon.com/512/5820/5820184.png');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet foi inicializado');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    rightEarX = results[0].pose.rightEar.x-15;
    rightEarY = results[0].pose.rightEar.y-205;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(partyHat, rightEarX, rightEarY, 150, 150);
}

function takeSnapshot(){    
  save('myFilterImage.png');
}
