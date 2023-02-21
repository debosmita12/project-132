
function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
}
img="";
status="";
function preload()
{
 img= loadImage('butterflies and bees.jpg');
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#000000");
    text("bee", 45,75);
    noFill();
    stroke("#FFFF00");
    rect(30, 60, 340, 350);
    fill("#000000");
    text("butterfly",350,120);
    noFill();
    stroke("#FFA500");
    rect(297, 100, 330,300);
}
function modelLoaded()
{
    console.log("Model Loaded")
    status=true;
    objectDetector.detect(img, gotResults);
}
function gotResults(error,results)
{ 
 if (error)
 {
    console.log(error);
 }
 console.log(results);
}