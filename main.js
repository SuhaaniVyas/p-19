drawn_sketch = "label";
score = 0;
timer = 0;
timer_check= {};
draw= ['pencil', 'bed', 'dog'];
random_no = Math.floor((Math.random()*draw.length)+1);
sketch = random_no; 

function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}

function clearCanvas() {
    background("white");
}

function preload() {
    classifier = ml5.imageClassifier('DoodleNet');
}
if (drawn_sketch == sketch) {
    document.getElementById("label").innerHTML= "set";
    document.getElementById("score").innerHTML= "Score: " + (score + 1);

}

function draw() {
    strokeWeight(13);
    stroke(0);
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
    
}
function check_sketch() {
    timer
}
function classifyCanvas() {
    classifier.classify(canvas, gotResult);
}


function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    console.error(error);
    document.getElementById('label').innerHTML= 'Label: ' + results[0].label;

    document.getElementById('confidence').innerHTML = 'Confidence: ' + Math.round(results[0].confidence *100) + '%';
    utterThis = new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);
}