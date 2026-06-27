// Typewriter Effect Module

const MESSAGE = "Ya sabes que me gusta destacar siempre, pero lo que hago por ti lo hago de corazón y sin esperar nada a cambio... Por todo el cariño que te tengo, te deseo un muy feliz cumpleaños, Valentina. Pásala increíble hoy. 😉";
const TYPING_SPEED = 28; // ms per character

const typedEl = document.getElementById('typed');
const cursor  = document.getElementById('cursor');

export function startTyping(onComplete) {
  if (!typedEl || !MESSAGE) {
    if (typeof onComplete === 'function') onComplete();
    return;
  }

  let i = 0;
  const len = MESSAGE.length;

  function tick() {
    if (i < len) {
      typedEl.textContent += MESSAGE[i];
      i++;
      // Add random variation to feel more natural / human
      const randomSpeedOffset = Math.random() * 12 - 6;
      setTimeout(tick, TYPING_SPEED + randomSpeedOffset);
    } else {
      if (cursor) {
        cursor.classList.add('done');
      }
      if (typeof onComplete === 'function') {
        onComplete();
      }
    }
  }

  tick();
}
