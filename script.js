let readMoreState = true;
let aboutCollapsedState = true;

const readMoreToggler = document.getElementById('readmore-toggler');
const expandable = document.getElementById('expandable-content');
const ceoImg = document.getElementById('ceo-img');

readMoreToggler.addEventListener('click', () => {
  readMoreState = !readMoreState;
  if (readMoreState) {
    // expandable.style.display = 'none';
    readMoreToggler.innerText = 'Show More >>>';
    expandable.classList.remove('fade-in');
    expandable.classList.add('fade-out');
    return;
  }
  expandable.style.display = 'block';
  readMoreToggler.innerText = '<<< Show Less';
  expandable.classList.remove('fade-out');
  expandable.classList.add('fade-in');
});

expandable.addEventListener('animationend', () => {
  if (expandable.classList.contains('fade-out')) {
    expandable.style.display = 'none';
  }
});

const aboutToggler = document.getElementById('about-toggler');
const expandableAbout = document.getElementById('expandable-about');

aboutToggler.addEventListener('click', () => {
  aboutCollapsedState = !aboutCollapsedState;
  if (aboutCollapsedState) {
    // expandable.style.display = 'none';
    aboutToggler.innerText = 'Show More >>>';
    expandableAbout.classList.remove('fade-in');
    expandableAbout.classList.add('fade-out');
    return;
  }
  expandableAbout.style.display = 'block';
  aboutToggler.innerText = '<<< Show Less';
  expandableAbout.classList.remove('fade-out');
  expandableAbout.classList.add('fade-in');
});

expandableAbout.addEventListener('animationend', () => {
  if (expandableAbout.classList.contains('fade-out')) {
    expandableAbout.style.display = 'none';
  }
});

// Swiper options

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
      slidesPerView: 3,
      spaceBetween: 20,
      allowSlidePrev: true,
      allowSlideNext: true,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
      allowSlidePrev: true,
      allowSlideNext: true,
    },
  },
});

const success = document.querySelector('.success-container');
const viewAllBtn = document.getElementById('view-all');

let timeoutId;

viewAllBtn.addEventListener('click', function (e) {
  if (success.style.maxHeight === '2000px') {
    success.style.maxHeight = '400px';
    success.style.transition = 'all 500ms ease';
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      viewAllBtn.innerText = 'View All';
    }, 500);
    return;
  }
  success.style.maxHeight = '2000px';
  success.style.transition = 'all 500ms ease';
  viewAllBtn.innerText = 'Collapse';
});
