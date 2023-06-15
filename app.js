const backgroundMusic = document.getElementById('background-music');

// Function to pause the background music
function pauseBackgroundMusic() {
    backgroundMusic.pause();
}

// Add a beforeunload event listener to pause the music when leaving the page
window.addEventListener('beforeunload', pauseBackgroundMusic);

