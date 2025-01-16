// Redirect to "Creator Webpage" button click
document.getElementById('creator-btn').addEventListener('click', () => {
    alert('Yara Shaer CE2025');
});

// Redirect to "Berghs School" button click
document.getElementById('berghs-btn').addEventListener('click', () => {
    window.location.href = 'https://www.berghs.se/en/';
});

// Sparkling effect on mouse click
document.addEventListener('click', (event) => {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${event.clientX}px`;
    sparkle.style.top = `${event.clientY}px`;

    document.body.appendChild(sparkle);

    // Remove sparkle after animation
    setTimeout(() => {
        sparkle.remove();
    }, 800);
});

const audioElement = document.getElementById('background-audio');
const playButton = document.getElementById('play-audio-btn');

playButton.addEventListener('click', () => {
    // Unmute and play the audio
    audioElement.muted = false; // Unmute
    audioElement.play()
        .then(() => {
            console.log('Audio is playing');
        })
        .catch(error => {
            console.error('Error playing audio:', error);
        });
});