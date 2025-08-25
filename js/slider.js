//SEPARATION

var $swiperSelector = $('.swiper-container');

$swiperSelector.each(function(index) {
  var $this = $(this);
  $this.addClass('swiper-slider-' + index);
  
  var dragSize = $this.data('drag-size') ? $this.data('drag-size') : 100;
  var freeMode = $this.data('free-mode') ? $this.data('free-mode') : false;

  var swiper = new Swiper('.swiper-slider-' + index, {
    slidesPerView: "auto",
    loop: true,
    crossFade: true,
    mousewheel: {
      sensitivity: 0,
      thresholdDelta: 20,
    },
    freeMode: freeMode,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
 });
});
//SEPARATION
document.getElementById("myModal").style.display = "none";

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "flex";
  document.getElementById("crosshair-h").style.display = "none";
  document.getElementById("crosshair-v").style.display = "none";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
  document.getElementById("crosshair-h").style.display = "block";
  document.getElementById("crosshair-v").style.display = "block";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Keyboard navigation
document.onkeydown = function(e) {
  e = e || window.event;
  if (e.keyCode == '37') {
    // Left arrow key
    plusSlides(-1);
  } else if (e.keyCode == '39') {
    // Right arrow key
    plusSlides(1);
  }
};

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "flex";
}
