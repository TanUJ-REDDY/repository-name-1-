song_1= ""
song_2= ""
left_wrist_x = 0
right_wrist_x = 0
left_wrist_y = 0
right_wrist_y = 0
function preload(){
    song_1 = loadSound("mp3.mp3")
    song_2 = loadSound("music.mp3")
}
function setup(){
    canvas = createCanvas(600,500)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    posenet = ml5.poseNet(video,modelLoaded)
    posenet.on('pose',gotposes)
}
function modelLoaded(){
    console.log("posenet is inishilized")
}
function draw(){
    image(video,0,0,600,500)
}
function playsong(){
    song.play()
    song.setVolume(1)
    song.rate(1)
}
function gotposes(results){
    if(results.length>0){
        console.log(results)
        left_wrist_x=results[0].pose.leftWrist.x
        right_wrist_x=results[0].pose.rightWrist.x
        left_wrist_y=results[0].pose.leftWrist.y
        right_wrist_y=results[0].pose.rightWrist.y
        console.log("leftwristx= "+left_wrist_x+"leftwristy= "+left_wrist_y) 
        console.log("rightwristx= "+right_wrist_x+"rightwristy= "+right_wrist_y)
    }
}
