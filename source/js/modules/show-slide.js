const trainersSlides = document.querySelectorAll('.trainers__swiper-slide');

const showSlideContent = () => {
  trainersSlides.forEach((slide) => {
    slide.addEventListener('click', () => {
      slide.classList.toggle('trainers__swiper-slide--touch-stile');
    });
  });
};

export {showSlideContent};
