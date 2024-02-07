nosex = 0;
nosey = 0;
function preload(){
    clown_nose = loadImage('https://static.vecteezy.com/system/resources/previews/011/421/327/original/red-glossy-ball-png.png')
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO)
    video.size(300,300);
    video.hide();
    
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("posenet esta inicializado");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
    }
}

function draw(){
    image(video,0,0,300,300);
    image(clown_nose,nosex,nosey,20,20);
}

