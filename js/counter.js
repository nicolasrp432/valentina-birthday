// Counter Animation Module with easing

/**
 * Animates a numeric counter smoothly with cubic/quartic ease-out
 * @param {HTMLElement} el - Element to write the text content to
 * @param {number} start - Starting number
 * @param {number} end - Target ending number
 * @param {number} duration - Animation duration in ms
 */
export function animateCounter(el, start, end, duration = 2000) {
  if (!el) return;
  
  let startTimestamp = null;
  
  function step(timestamp) {
    if (!startTimestamp) startTimestamp = timestamp;
    const elapsed = timestamp - startTimestamp;
    const progress = Math.min(elapsed / duration, 1);
    
    // Quartic ease-out timing curve
    const easeProgress = 1 - Math.pow(1 - progress, 4);
    
    const current = Math.floor(easeProgress * (end - start) + start);
    el.textContent = current;
    
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      el.textContent = end;
    }
  }
  
  window.requestAnimationFrame(step);
}
