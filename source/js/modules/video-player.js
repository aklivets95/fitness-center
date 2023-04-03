const video = document.querySelector('.gym__video-player');
let isPlay = false;

video.addEventListener('click', () => {
  if (!isPlay) {
    video.play();
    video.volume = 0.3;
    isPlay = true;
  } else {
    video.pause();
    isPlay = false;
  }
});
