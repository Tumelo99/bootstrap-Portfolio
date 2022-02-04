var trainSpeed = 50;
var slow = 250;
var trainPosition = 0;
var animation;

alert("add a start button and extend the track");
//instead of clicking the train, click the start button

var start = document.getElementById("startButton");
start.addEventListener("click", speedUp);

var stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);

function speedUp() {
    if (trainSpeed > 10) {
        trainSpeed -= 30; //10
    }
    console.log("train speed: " + trainSpeed);

    clearInterval(animation);
    animation = setInterval(frame, trainSpeed);

    function frame() {
        trainPosition += 2;
        train.style.left = trainPosition + 'px';
        console.log(trainPosition);
        checkPosition(trainPosition);
    }
}

function checkPosition(currentPosition) {
    if (currentPosition === 1400) {
        alert(":O!");
        console.log("Crash!");
        clearInterval(animation);   
        trainPosition = 0;
        var left = document.getElementById("train");
        left.style.left = "0px"
        if(left.style.left == "0px"){
            trainSpeed -= 30;
        }
        
    }
}

function stopTrain() {
    if (trainPosition < 1400) {
        clearInterval(animation);
        alert("Whew! That was close!");
    }
}