import '../vendor/swiper';

const swiper = new Swiper('.trainers__swiper', {
  navigation: {
    nextEl: '.trainers__swiper-button--next',
    prevEl: '.trainers__swiper-button--prev',
  },
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 25,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

const feedbackSwiper = new Swiper('.feedback__swiper', {
  navigation: {
    disabledClass: 'feedback__swiper-button--disabled',
    nextEl: '.feedback__swiper-button--next',
    prevEl: '.feedback__swiper-button--prev',
  },
  slidesPerView: 1,
  spaceBetween: 20,
});

export {swiper, feedbackSwiper};
