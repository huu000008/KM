$(document).ready(function () {
  // Initialize AOS
  AOS.init({
    once: true,
    duration: 2000,
  });

  // const locomotiveScroll = new LocomotiveScroll();

  // Swiper 초기화 함수
  function initSwiper(container, options) {
    if (container.length) {
      return new Swiper(container.find(".swiper")[0], options);
    }
  }

  initSwiper($(".con0"), {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: $(".con0 .swiper-button-next")[0],
      prevEl: $(".con0 .swiper-button-prev")[0],
    },
  });

  initSwiper($(".con3"), {
    slidesPerView: 1,
    navigation: {
      nextEl: $(".con3 .swiper-button-next")[0],
      prevEl: $(".con3 .swiper-button-prev")[0],
    },
  });

  initSwiper($(".con4"), {
    slidesPerView: "auto",
    navigation: {
      nextEl: $(".con4 .swiper-button-next")[0],
      prevEl: $(".con4 .swiper-button-prev")[0],
    },
  });

  initSwiper($(".con6"), {
    slidesPerView: 1,
    spaceBetween: 40,
    pagination: {
      el: $(".con6 .swiper-pagination")[0],
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className}">${$(".con6 .swiper-slide")
          .eq(index)
          .data("title")}</span>`;
      },
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
    $container.find(".img").each(function () {
      $container.append($(this).clone());
    });
  }

  const $con2 = $(".con2 .imgRolling");
  cloneImages($con2);
  startRolling($con2);
});
