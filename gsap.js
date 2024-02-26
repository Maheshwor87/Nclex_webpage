const header = document.getElementById('header');
const navbar = document.getElementById('top-nav');
const menuBtn = document.getElementById('hamburger-button');
const menuIcon = document.getElementById('hamburger-icon');
const mobileNav = document.getElementById('mobile-nav');

let lastScrollTop = 0;

menuBtn.addEventListener('click', () => {
  if (mobileNav.classList.contains('expanded')) {
    mobileNav.classList.remove('expanded');
    menuIcon.innerText = 'menu';
  } else {
    mobileNav.classList.add('expanded');
    menuIcon.innerText = 'close';
  }
});

function pageOffsetChecker() {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (window.innerWidth > 768) {
    if (scrollTop > 85) {
      navbar.classList.add('top-scrolled');
    } else {
      navbar.classList.remove('top-scrolled');
    }
  } else {
    if (scrollTop > 30) {
      navbar.classList.add('top-scrolled');
    } else {
      navbar.classList.remove('top-scrolled');
    }
  }
  lastScrollTop = scrollTop;
}
pageOffsetChecker();

window.addEventListener('scroll', pageOffsetChecker);

let isDesktop = window.innerWidth > 1023;
// window.addEventListener('resize', () => {
//   isDesktop = window.innerWidth > 1023;
// });

let headerTranslate;
let headerDuration;

if (isDesktop) {
  headerTranslate = 100;
  headerDuration = 1;
} else {
  headerTranslate = 50;
  headerDuration = 0.5;
}

gsap.registerPlugin(ScrollTrigger);

if (isDesktop) {
  // Hero section
  const tWelcome = gsap.timeline();
  tWelcome
    .to('#welcome-text', {
      y: 0,
      duration: 1,
    })
    .to('#countries', {
      y: 0,
      delay: -0.7,
      duration: 1,
    })
    .to('#unlock-text', {
      x: 0,
      delay: -0.3,
      opacity: 1,
      duration: 1.4,
    })
    .to('#your-path-text', {
      x: 0,
      opacity: 1,
      delay: -1.1,
      duration: 1.4,
    })
    .to('#inquiry-button', {
      opacity: 1,
      delay: -0.2,
      duration: 0.3,
    });

  // Nclex nepal at a glance section
  const tglance = gsap.timeline({
    scrollTrigger: {
      trigger: '.glance',
    },
  });
  tglance
    .from('.glance', {
      y: 100,
      opacity: 0,
      duration: 0.8,
    })
    .from('.passers', {
      y: 70,
      opacity: 0,
      delay: -0.3,
      duration: 0.6,
    })
    .from('.visas', {
      y: 70,
      opacity: 0,
      duration: 0.6,
      delay: -0.4,
    })
    .from('.processing', {
      y: 70,
      opacity: 0,
      duration: 0.6,
      delay: -0.4,
    })
    .from('.excellence', {
      y: 70,
      opacity: 0,
      duration: 0.6,
      delay: -0.4,
    });

  // Courses Section

  gsap.from('.courses', {
    y: headerTranslate,
    opacity: 0,
    duration: headerDuration,
    scrollTrigger: '.courses',
  });

  const timeCourse = gsap.timeline({
    scrollTrigger: {
      trigger: isDesktop ? '#course-card-wrapper' : '#course',
    },
  });

  timeCourse.from('#course-card-wrapper', {
    y: 150,
    opacity: 0,
    duration: 0.8,
  });

  // About us section

  gsap.from('.about-us-content-wrapper', {
    y: 100,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: '.about-us-content-wrapper',
  });

  // CEO Section

  const tceo = gsap.timeline({
    scrollTrigger: {
      trigger: '#ceo-message',
    },
  });

  tceo
    .from('#ceo-image', {
      opacity: 0,
      duration: 0.8,
      delay: 0.5,
    })
    .from('#ceo-message', {
      opacity: 0,
      duration: 0.8,
      delay: -0.3,
    })

    .from('#esteemed-text', {
      opacity: 0,
      duration: 0.8,
      delay: -0.7,
    });

  // How we do it section

  gsap.from('.how-we-do', {
    y: headerTranslate,
    opacity: 0,
    duration: headerDuration,
    scrollTrigger: '.how-we-do',
  });

  const timeHow = gsap.timeline({
    scrollTrigger: {
      trigger: '#how-we-do',
    },
  });
  timeHow.from('#how-we-do', {
    y: 100,
    opacity: 0,
    duration: 0.6,
  });

  // Success stories section

  gsap.from('.success-stories', {
    y: headerTranslate,
    opacity: 0,
    duration: headerDuration,
    scrollTrigger: '.success-stories',
  });
  gsap.from('#testimonials-header', {
    y: headerTranslate,
    opacity: 0,
    duration: headerDuration,
    scrollTrigger: '#testimonials-header',
  });
  gsap.from('.why-nclex', {
    y: headerTranslate,
    opacity: 0,
    duration: headerDuration,
    scrollTrigger: '.why-nclex',
  });
  gsap.from('.card', {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: '.card',
  });
  gsap.from('#future-text', {
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: '#future-text',
  });
  gsap.from('#embark-text', {
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: '#embark-text',
  });
  gsap.from('#warmth-text', {
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: '#warmth-text',
  });

  // Animation for glance cards

  // Animation for success stories
  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: '#success-stories',
      start: '10% bottom',
    },
  });

  if (isDesktop) {
    tl1
      .to('.third-card', {
        x: 0,
        opacity: 1,
        duration: 0.8,
      })
      .to('.second-card', {
        x: 0,
        opacity: 1,
        duration: 0.8,
        delay: -0.4,
      })
      .to('.first-card', {
        x: 0,
        opacity: 1,
        duration: 0.8,
        delay: -0.4,
      });
  } else {
    tl1
      .to('.first-card', {
        x: 0,
        opacity: 1,
        duration: 0.8,
      })
      .to('.second-card', {
        x: 0,
        opacity: 1,
        duration: 0.8,
        delay: -0.4,
      })
      .to('.third-card', {
        x: 0,
        opacity: 1,
        duration: 0.8,
        delay: -0.4,
      });
  }

  // Animation for testimonials
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: '#testimonials-header',
    },
  });
  tl2
    .to('.testimonial-1', {
      x: 0,
      opacity: 1,
      duration: 0.8,
    })
    .to('.testimonial-2', {
      x: 0,
      opacity: 1,
      duration: 0.8,
      delay: -0.4,
    })
    .to('.testimonial-3', {
      x: 0,
      opacity: 1,
      duration: 0.8,
      delay: -0.4,
    });

  // Animation for banner

  const tban = gsap.timeline({
    scrollTrigger: {
      trigger: isDesktop ? '.want-to-text' : '#banner',
      start: '10% bottom',
    },
  });
  tban
    .to('.want-to-text', {
      y: 0,
      opacity: 1,
      duration: 0.6,
    })
    .to('.join-btn', {
      y: 0,
      opacity: 1,
      duration: 0.6,
      delay: -0.4,
    });

  // Animation for why nclex  nepal
  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: '.reason-1',
    },
  });

  tl3
    .to('.reason-3', {
      scale: 1,
      opacity: 1,
      duration: 0.4,
      delay: -0.2,
    })
    .to('.reason-2', {
      scale: 1,
      opacity: 1,
      duration: 0.4,
      delay: -0.2,
    })
    .to('.reason-1', {
      scale: 1,
      opacity: 1,
      duration: 0.4,
      delay: -0.2,
    });

  const tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: '.reason-5',
      start: '10% bottom',
    },
  });

  tl4
    .to('.reason-4', {
      scale: 1,
      opacity: 1,
      duration: 0.4,
    })
    .to('.reason-5', {
      scale: 1,
      opacity: 1,
      duration: 0.4,
      delay: -0.2,
    })
    .to('.reason-6', {
      scale: 1,
      opacity: 1,
      duration: 0.4,
      delay: -0.2,
    });

  // Events section
  gsap.from('#events', {
    y: headerTranslate,
    opacity: 0,
    duration: headerDuration,
    scrollTrigger: '#events',
  });

  gsap.from('.event-banner-container', {
    y: 100,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: '.event-banner-container',
  });

  const eventAnimation = gsap.to('.click-text-event', {
    y: 0,
    opacity: 1,
    duration: 0.4,
    ease: 'ease.inOut',
    paused: true,
  });

  const eventImage = document.querySelector('.event-banner-container');
  eventImage.addEventListener('mouseenter', () => {
    eventAnimation.play();
  });
  eventImage.addEventListener('mouseleave', () => {
    eventAnimation.reverse();
  });

  // Products section
  gsap.from('#products', {
    y: headerTranslate,
    opacity: 0,
    duration: headerDuration,
    scrollTrigger: '#products',
  });

  gsap.from('.our-product-container', {
    y: 100,
    opacity: 0,
    duration: 0.6,
    delay: 0.2,
    scrollTrigger: '.our-product-container',
  });

  const demoAnimation = gsap.to('.click-text', {
    y: 0,
    opacity: 1,
    duration: 0.4,
    ease: 'ease.inOut',
    paused: true,
  });

  const productImage = document.querySelector('.our-product-container');
  productImage.addEventListener('mouseenter', () => {
    demoAnimation.play();
  });
  productImage.addEventListener('mouseleave', () => {
    demoAnimation.reverse();
  });
}
