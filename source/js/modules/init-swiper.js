import '../vendor/swiper';

const swiperContainer = document.querySelector('.trainers__swiper');
const swiperSlide = swiperContainer.querySelectorAll('.trainers__swiper-slide');

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

function setTabIndex() {
  swiper.slides[swiper.activeIndex].setAttribute('tabindex', '0');
  swiper.slides[swiper.activeIndex + 1].setAttribute('tabindex', '0');
  swiper.slides[swiper.activeIndex + 2].setAttribute('tabindex', '0');
  swiper.slides[swiper.activeIndex + 3].setAttribute('tabindex', '0');
}

for (let slide of swiperSlide) {
  slide.setAttribute('tabindex', '-1');
  setTabIndex();
}

swiper.on('activeIndexChange', () => {
  let newSwiperSlide = swiperContainer.querySelectorAll('.trainers__swiper-slide');
  for (let slide of newSwiperSlide) {
    slide.setAttribute('tabindex', '-1');
    setTabIndex();
  }
});

const feedbackSwiper = new Swiper('.feedback__swiper', {
  navigation: {
    disabledClass: 'feedback__swiper-button--disabled',
    nextEl: '.feedback__swiper-button--next',
    prevEl: '.feedback__swiper-button--prev',
  },
  slidesPerView: 1,
  spaceBetween: 20,
  autoHeight: true,
});


export {swiper, feedbackSwiper};
