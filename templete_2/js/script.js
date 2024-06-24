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

  // 이미지 롤링
  function startRolling($container) {
    if ($container.length) {
      let position = 0;
      const speed = 1;
      const width = $container.width();
      const totalWidth = $container[0].scrollWidth;

      function roll() {
        position -= speed;
        if (Math.abs(position) >= totalWidth / 2) {
          position = 0;
        }
        $container.css("transform", `translateX(${position}px)`);
        requestAnimationFrame(roll);
      }

      roll();
    }
  }

  function cloneImages($container) {
    $container.find("img").each(function () {
      $container.append($(this).clone());
    });
  }

  const $con2 = $(".con2 .imgRolling");
  cloneImages($con2);
  startRolling($con2);
});
