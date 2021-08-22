function playAudio() {
    var audio = document.querySelector('audio');
    var audioButton = document.getElementById('audioButton');
    audio.loop = true;

    console.log(audioButton);

    if (audio.paused) {
        audioButton.style.backgroundImage = "url('assets/img/play.png')";
        audio.play();
        return;
    }
    
    audioButton.style.backgroundImage = "url('assets/img/mute.png')";
    audio.pause();
}