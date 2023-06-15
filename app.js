document.addEventListener('DOMContentLoaded', function() {
    const backgroundMusic = document.getElementById('background-music');
    backgroundMusic.play();
});

function pauseBackgroundMusic() {
    const backgroundMusic = document.getElementById('background-music');
    backgroundMusic.pause();
}

window.addEventListener('beforeunload', pauseBackgroundMusic);

