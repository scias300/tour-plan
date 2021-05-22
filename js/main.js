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

var modalWindow = document.querySelector(".modal__window");
var modalOverlay = document.querySelector(".modal__overlay");
var modalOpen = document.querySelectorAll(".modal-open");
var modalClose = document.querySelector(".modal__close");

for (var i = 0; i < modalOpen.length; i++){
  modalOpen[i].addEventListener('click', function(){
  modalWindow.classList.add('modal__window--visible');
  modalOverlay.classList.add('modal__overlay--visible');
});
}

modalClose.addEventListener('click', function(evt){
  evt.preventDefault();
  modalWindow.classList.remove('modal__window--visible');
  modalOverlay.classList.remove('modal__overlay--visible');
});

document.addEventListener('keyup', function(event){
    if (event.keyCode == '27'){
      event.preventDefault();
      modalWindow.classList.remove('modal__window--visible');
      modalOverlay.classList.remove('modal__overlay--visible');
    }
});