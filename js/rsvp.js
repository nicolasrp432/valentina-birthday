// RSVP Handler Module
const btnYes       = document.getElementById('btn-yes');
const invActions   = document.getElementById('invite-actions');
const confirmState = document.getElementById('confirm-state');

export function initRSVP() {
  if (!btnYes || !invActions || !confirmState) return;

  btnYes.addEventListener('click', () => {
    invActions.style.opacity = '0';
    setTimeout(() => {
      invActions.style.display = 'none';
      confirmState.style.display = 'block';
      
      // Allow display block to render before adding the visible class for transitions
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          confirmState.classList.add('visible');
        });
      });
    }, 350);
  });
}
