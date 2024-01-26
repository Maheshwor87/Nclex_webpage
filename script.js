gsap.registerPlugin(ScrollTrigger);

if (window.innerWidth > 1024) {
  gsap.from('.welcome', {
    y: -60,
    opacity: 0,
    duration: 1,
    scrollTrigger: '.welcome',
  });
  gsap.from('.glance', {
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: '.glance',
  });
  gsap.from('.courses', {
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: '.courses',
  });
  gsap.from('.how-we-do', {
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: '.how-we-do',
  });
  gsap.from('.success-stories', {
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: '.success-stories',
  });
  gsap.from('.why-nclex', {
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: '.why-nclex',
  });
  gsap.from('.card', {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: '.card',
  });

  // Animation for success stories
  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: '#success-stories',
      start: '10% bottom',
    },
  });
  tl1
    .from('.third-card', {
      x: -100,
      opacity: 0,
      duration: 0.8,
    })
    .from('.second-card', {
      x: -100,
      opacity: 0,
      duration: 0.8,
      delay: -0.4,
    })
    .from('.first-card', {
      x: -100,
      opacity: 0,
      duration: 0.8,
      delay: -0.4,
    });

  // Animation for testimonials
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: '#testimonials',
      start: '10% bottom',
    },
  });
  tl2
    .from('.testimonial-3', {
      x: -100,
      opacity: 0,
      duration: 0.8,
    })
    .from('.testimonial-2', {
      x: -100,
      opacity: 0,
      duration: 0.8,
      delay: -0.4,
    })
    .from('.testimonial-1', {
      x: -100,
      opacity: 0,
      duration: 0.8,
      delay: -0.4,
    });

  // Animation for banner

  const tban = gsap.timeline({
    scrollTrigger: {
      trigger: '#banner',
      start: '10% bottom',
    },
  });
  tl2
    .from('.want-to-text', {
      y: 80,
      opacity: 0,
      duration: 0.6,
    })
    .from('.join-btn', {
      y: 80,
      opacity: 0,
      duration: 0.6,
      delay: -0.4,
    });

  // Animation for why nclex  nepal
  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: '.reason-1',
      start: '10% bottom',
    },
  });

  tl3
    .from('.reason-4', {
      scale: 0,
      opacity: 0,
      duration: 0.4,
    })
    .from('.reason-3', {
      scale: 0,
      opacity: 0,
      duration: 0.4,
      delay: -0.2,
    })
    .from('.reason-2', {
      scale: 0,
      opacity: 0,
      duration: 0.4,
      delay: -0.2,
    })
    .from('.reason-1', {
      scale: 0,
      opacity: 0,
      duration: 0.4,
      delay: -0.2,
    });

  const tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: '.reason-5',
      start: '10% bottom',
    },
  });

  tl3
    .from('.reason-8', {
      scale: 0,
      opacity: 0,
      duration: 0.4,
    })
    .from('.reason-7', {
      scale: 0,
      opacity: 0,
      duration: 0.4,
      delay: -0.2,
    })
    .from('.reason-6', {
      scale: 0,
      opacity: 0,
      duration: 0.4,
      delay: -0.2,
    })
    .from('.reason-5', {
      scale: 0,
      opacity: 0,
      duration: 0.4,
      delay: -0.2,
    });
}

// document.addEventListener('DOMContentLoaded', () => {
//   const navbar = document.getElementById('header');
// });
const header = document.getElementById('header');
const navbar = document.getElementById('top-nav');

let lastScrollTop = 0;
window.addEventListener('scroll', function () {
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
});

console.log(window.location.href.includes('success-stories-header'));
