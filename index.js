document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.header__burger');
  const navMenu = document.querySelector('.nav__menu');
  const body = document.querySelector('body');
  const navLinks = document.querySelectorAll('.nav__menu a'); // ссылки внутри меню

  burger.addEventListener('click', () => {
    navMenu.classList.toggle('open-menu');
    burger.classList.toggle('open-menu');
    body.classList.toggle('lock');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open-menu');
      burger.classList.remove('open-menu');
      body.classList.remove('lock');
    });
  });
});


const heroSwiper = new Swiper('.hero__swiper', {
  slidesPerView: 1,
  speed: 800,
  loop: true,
  grabCursor: true,
    autoplay: {
    delay: 3000,      
    disableOnInteraction: false, 
  },

  pagination: {
    el: '.swiper-hero-pagination',
    type: 'bullets',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-hero__button-next',
    prevEl: '.swiper-hero__button-prev',
  },
});

const clientsSwiper = new Swiper('.clients__swiper', {
  slidesPerView: 3,
  speed: 800,
  grabCursor: true,
  loop: true,
  spaceBetween: 40,
  autoHight: true,
  pagination: {
    el: '.swiper-clients-pagination',
    type: 'bullets',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-clients__button-next',
    prevEl: '.swiper-clients__button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    650: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    991: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

const docSwiper = new Swiper('.swiper-documents', {
  slidesPerView: 6.5,
  speed: 800,
  grabCursor: true,
  loop: true,
  spaceBetween: 20,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    450: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    650: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

    991: {
      slidesPerView: 4,
      spaceBetween: 40,
    },

    1199: {
      slidesPerView: 6,
      spaceBetween: 40,
    },
  },
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const headerOffset = 116;
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);

    if (target) {
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});