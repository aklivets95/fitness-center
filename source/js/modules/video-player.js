const video = document.querySelector('.gym__video-player');
const button = document.querySelector('.gym__video-button');
const image = document.querySelector('.gym__video-container img');

const playVideoButton = () => {
  button.addEventListener('click', () => {
    video.src += '?autoplay=1';
    button.style.opacity = '0';
    image.style.opacity = '0';
    setTimeout(() => {
      image.style.display = 'none';
      button.style.display = 'none';
    }, 1000);
  });
};


export {playVideoButton};
