// Audio Controller Module
const audioEl      = document.getElementById('audio');
const audioBtn     = document.getElementById('audio-btn');
const iconPlay     = document.getElementById('icon-play');
const iconPause    = document.getElementById('icon-pause');

let isPlaying = false;

function updateAudioUI() {
  if (isPlaying) {
    iconPlay.style.display  = 'none';
    iconPause.style.display = 'block';
  } else {
    iconPlay.style.display  = 'block';
    iconPause.style.display = 'none';
  }
}

export function playMusic() {
  if (!audioEl) return;
  audioEl.play().then(() => {
    isPlaying = true;
    updateAudioUI();
  }).catch((err) => {
    console.warn("Audio autoplay blocked or failed:", err);
  });
}

export function pauseMusic() {
  if (!audioEl) return;
  audioEl.pause();
  isPlaying = false;
  updateAudioUI();
}

export function toggleMusic() {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
}

export function loadMusic() {
  if (audioEl && typeof audioEl.load === 'function') {
    audioEl.load();
  }
}

// Initialize button listener
if (audioBtn) {
  audioBtn.addEventListener('click', toggleMusic);
}
