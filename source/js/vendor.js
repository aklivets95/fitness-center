// Swiper 7.4.1
import './vendor/swiper';
import './vendor/focus-visible-polyfill';

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
