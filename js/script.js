const swiper = new Swiper('.youtube-swiper', {

  slidesPerView: 1,
  spaceBetween: 20,

  direction: 'horizontal',

  allowSlidePrev: true,
  allowSlideNext: true,
  
  loop: true,

  speed: 1000,
  
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


  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


const gallerySwiper = new Swiper('.gallery-swiper', {

  slidesPerView: 1,
  spaceBetween: 20,

  direction: 'horizontal',

  allowSlidePrev: true,
  allowSlideNext: true,

  loop: true,

  speed: 5000,
  
  autoplay: {
    delay: 0,
    pauseOnMouseEnter: false,
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


  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});