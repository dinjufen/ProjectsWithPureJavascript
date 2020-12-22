// Get Elements
const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const toogle = document.querySelector('.toogle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelector('player__slider');

// Build functions
function tooglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
  button.
}

function updateButton() {
  const icon = this.pause ? '►' : '';
  console.log('update the button');
}

// Hook
video.addEventListener('click', tooglePlay);
toogle.addEventListener('click', tooglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);