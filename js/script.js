const swiper = new Swiper('.swiper', {

  slidesPerView: 1,
  spaceBetween: 20,

  direction: 'horizontal',

  allowSlidePrev: true,
  allowSlideNext: true,

  loop: true,
  
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
  },

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,    
      allowSlidePrev: true,
      allowSlideNext: true,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
      allowSlidePrev: true,
      allowSlideNext: true,
    }
  },

  speed: 1000,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});