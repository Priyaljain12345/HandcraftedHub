
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 5,
    depth: 100,
    modifier: 3,
    slideShadows: true,
  },
  autoplay: {
    delay: 1000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

