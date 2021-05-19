const hotelSwiper = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});
const reviewsSwiper = new Swiper('.reviews-slider__container', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

var menuButton = document.querySelector(".menu-button");
var menuVisible = document.querySelector(".navbar-mobile");
var menuFixed = document.querySelector(".navbar");
var bread = document.querySelector(".breadcrumb");

menuButton.addEventListener('click', function(){
  menuVisible.classList.toggle('navbar-mobile--visible');
  menuFixed.classList.toggle('navbar--fixed');
  bread.classList.toggle('breadcrumb--padding');
});



window.addEventListener("resize", function() {
    if (window.innerWidth > 768) {
  menuVisible.classList.remove('navbar-mobile--visible');
  menuFixed.classList.remove('navbar--fixed');
  bread.classList.remove('breadcrumb--padding');
}
    }, false);