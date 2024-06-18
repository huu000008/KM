var swiper = new Swiper(".con0 .swiper", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".con0 .swiper-button-next",
    prevEl: ".con0 .swiper-button-prev",
  },
});
var swiper = new Swiper(".con1 .swiper", {
  slidesPerView: 3,
  spaceBetween: 40,
  loop: true,
  speed: 1000,
  allowTouchMove: true,
  waitForTransition: false,
  autoplay: {
    delay: 3200,
    disableOnInteraction: false,
  },
  autoplay: false,
  pagination: {
    el: ".con1 .swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      var slides = document.querySelectorAll(".con1 .swiper-slide");
      var title = slides[index].getAttribute("data-title");
      return '<span class="' + className + '">' + title + "</span>";
    },
  },
});
