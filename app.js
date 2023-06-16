const backgroundMusic = new Audio('/audio/music.mp3'); // Replace 'path/to/your/music.mp3' with the actual path to your music file

const musicButton = document.getElementById('music-button');
let isMusicPlaying = false;

musicButton.addEventListener('click', function() {
    if (isMusicPlaying) {
        backgroundMusic.pause();
        isMusicPlaying = false;
        musicButton.classList.remove('playing');
    } else {
        backgroundMusic.play();
        isMusicPlaying = true;
        musicButton.classList.add('playing');
    }
});
