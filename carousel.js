new Swiper('.project-wrapper', {
  loop: false,
  spaceBetween : 1,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 }
  }
});
