import { loadMusic, playMusic } from './audio.js';
import { startTyping } from './typewriter.js';
import { animateCounter } from './counter.js';
import { initRSVP } from './rsvp.js';

const cover      = document.getElementById('cover');
const openBtn    = document.getElementById('open-btn');
const content    = document.getElementById('content');
const audioBar   = document.getElementById('audio-bar');
const tNum       = document.querySelector('.t-num');
const msgSign    = document.getElementById('message-sign');
const inviteCard = document.getElementById('invite-card');

function init() {
  // Initialize RSVP button listener
  initRSVP();
  
  // Pre-load audio elements
  loadMusic();
  
  if (!openBtn || !cover || !content || !audioBar) return;
  
  openBtn.addEventListener('click', () => {
    // Play the background music
    playMusic();
    
    // Hide the entrance cover screen
    cover.classList.add('hidden');
    
    // Show main content after transition delay
    setTimeout(() => {
      content.classList.add('visible');
      audioBar.classList.add('visible');
      window.scrollTo({ top: 0, behavior: 'instant' });
      
      // Animate counter from 0 to 25 over 2.2 seconds
      if (tNum) {
        animateCounter(tNum, 0, 25, 2200);
      }
      
      // Start the typewriter message animation
      setTimeout(() => {
        startTyping(() => {
          // Callback: Reveal signature and proposal card once finished typing
          setTimeout(() => {
            if (msgSign) msgSign.classList.add('visible');
            setTimeout(() => {
              if (inviteCard) inviteCard.classList.add('visible');
            }, 650);
          }, 500);
        });
      }, 900);
    }, 300);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
