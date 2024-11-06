window.onload = function() {
    activate();
}

const activate = () => {
    var btn = document.getElementById("button"); 
    var saber = document.getElementById("saberstyle");
    var widthIncrease = 0;
    var widthDecrease = 100;
    var id = setInterval(frame, 10)

    function frame() {
        if (btn.value == "On") {
            if(widthIncrease >= 100) {
                clearInterval(id);
            } else {
                widthIncrease++;
                saber.style.width = widthIncrease + "%";
                document.getElementById("sabervalue").innerHTML = widthIncrease + "%";
            }
        } else {
            if(widthDecrease <= 0) {
                clearInterval(id);
            } else {
                widthDecrease--;
                saber.style.width = widthDecrease + "%";
                document.getElementById("sabervalue").innerHTML = widthDecrease + "%";
            }
        }
    }

    if (btn.value == "Off") {
        btn.value = "On";
        btn.innerText = "OFF";
        soundPlayer = new Audio("Lightsaber.mp3");
        soundPlayer.play();
        soundPlayer.loop = true;
    } else {
        btn.value = "Off";
        btn.innerText = "ON";
        soundPlayer.pause();
        soundPlayer.currentTime = 0;
    }

}