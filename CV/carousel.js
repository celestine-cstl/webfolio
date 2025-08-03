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







function ajusterLigneTimeline() {
  const ligne = document.querySelector(".vertical-line");
  const blocks = document.querySelectorAll(".timeline .block");

  if (!ligne || blocks.length === 0) return;

  const lastBlock = blocks[blocks.length - 1];
  const lastPointOffset = lastBlock.offsetTop + 1.1 * parseFloat(getComputedStyle(lastBlock).fontSize) + 8; // 1.1em + demi-point

  ligne.style.height = `${lastPointOffset}px`;
}

window.addEventListener("load", ajusterLigneTimeline);
window.addEventListener("resize", ajusterLigneTimeline);
