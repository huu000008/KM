$(document).ready(function () {
  // Initialize AOS
  AOS.init({
    once: true,
    duration: 2000,
  });
  // const scroll = new LocomotiveScroll({
  //   el: document.querySelector(".smooth-scroll"),
  //   smooth: true,
  // });

  // Swiper 초기화 함수
  function initSwiper(container, options) {
    if (container.length) {
      return new Swiper(container.find(".swiper-container")[0], options);
    }
  }

  // con0 Swiper
  initSwiper($(".con0"), {
    slidesPerView: 1,
    effect: "fade",
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: $(".con0 .swiper-button-next")[0],
      prevEl: $(".con0 .swiper-button-prev")[0],
    },
  });

  // con1 Swiper
  initSwiper($(".con1"), {
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
      el: $(".con1 .swiper-pagination")[0],
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className}">${$(".con1 .swiper-slide")
          .eq(index)
          .data("title")}</span>`;
      },
    },
    navigation: {
      nextEl: $(".con1 .swiper-button-next")[0],
      prevEl: $(".con1 .swiper-button-prev")[0],
    },
    on: {
      init: function () {
        $(".con1 .total").text($(".con1 .swiper-slide").length);
      },
      slideChange: function () {
        $(".con1 .number").text(this.realIndex + 1);
      },
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });

  // con3 Swiper
  initSwiper($(".con3"), {
    slidesPerView: 1,
    spaceBetween: 40,
    pagination: {
      el: $(".con3 .swiper-pagination")[0],
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className}">${$(".con3 .swiper-slide")
          .eq(index)
          .data("title")}</span>`;
      },
    },
  });

  // 이미지 롤링
  function startRolling($container) {
    if ($container.length) {
      let position = 0;
      const speed = 0.4;
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

  const $con7 = $(".con7");
  cloneImages($con7);
  startRolling($con7);

  // 타이핑 효과
  function typingEffect($element1, $element2, cursor1, cursor2, container) {
    const text1 = $element1.text().trim();
    const text2 = $element2.text().trim();
    const speed = 100;

    $element1.text("");
    $element2.text("");

    let index1 = 0;
    let index2 = 0;

    function typeFirstLine() {
      if (index1 < text1.length) {
        $element1.append(text1.charAt(index1++));
        setTimeout(typeFirstLine, speed);
      } else {
        cursor1.hide();
        cursor2.show();
        typeSecondLine();
      }
    }

    function typeSecondLine() {
      if (index2 < text2.length) {
        $element2.append(text2.charAt(index2++));
        setTimeout(typeSecondLine, speed);
      }
    }

    const typingObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            container.css("visibility", "visible");
            cursor1.show();
            typeFirstLine();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if ($element1.length) {
      typingObserver.observe($element1[0]);
    }
  }

  typingEffect(
    $("#typing1"),
    $("#typing2"),
    $("#cursor1"),
    $("#cursor2"),
    $(".typing-container")
  );

  // 푸터 표시
  function observeFooter($footer) {
    const footerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            $footer.addClass("footer-visible");
          } else {
            $footer.removeClass("footer-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if ($footer.length) {
      footerObserver.observe($footer[0]);
    }
  }

  observeFooter($("#footer"));

  $(".header .btnMenu").on("click", function () {
    $(".header").toggleClass("active");
    // locomotiveScroll.stop();
  });
  $(".header .btnClose").on("click", function () {
    $(".header").toggleClass("active");
    // locomotiveScroll.start();
  });
  $(".header .depth1 > span").on("click", function () {
    $(this).parent().toggleClass("on");
  });
});
