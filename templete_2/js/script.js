$(document).ready(function () {
  // Initialize AOS
  AOS.init({
    once: true, // 애니메이션이 한 번만 실행되도록 설정
  });

  const locomotiveScroll = new LocomotiveScroll();

  // Swiper 초기화 함수
  function initSwiper(container, options) {
    if (container.length) {
      return new Swiper(container.find(".swiper")[0], options);
    }
  }

  // con0 Swiper
  initSwiper($(".con0"), {
    slidesPerView: 1,
    navigation: {
      nextEl: $(".con0 .swiper-button-next")[0],
      prevEl: $(".con0 .swiper-button-prev")[0],
    },
  });

  $(".header .btnMenu").on("click", function () {
    $(".header .menu").toggleClass("active");
  });
  $(".header .menuClose").on("click", function () {
    $(".header .menu").toggleClass("active");
  });
});
