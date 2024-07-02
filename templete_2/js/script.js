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
    loop: true,
    effect: "fade",
    navigation: {
      nextEl: $(".con3 .swiper-button-next")[0],
      prevEl: $(".con3 .swiper-button-prev")[0],
    },
  });

  initSwiper($(".con4"), {
    slidesPerView: "auto",
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: $(".con4 .swiper-button-next")[0],
      prevEl: $(".con4 .swiper-button-prev")[0],
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

  const $con2 = $(".con2 .imgRolling");
  cloneImages($con2);
  startRolling($con2);

  $(".header .menu .depth_1").on("mouseenter", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  $(".header .menu .depth_1").on("mouseleave", function () {
    $(this).removeClass("active");
  });

  function animateSentences($el) {
    $el.find(".__sentence").each(function (i) {
      var $sentence = $(this);
      gsap.set($sentence.find("span"), {
        y: "150%",
        skewY: 30,
      });
      gsap.to($sentence.find("span"), {
        y: "0%",
        skewY: 0,
        delay: i * 0.1,
        duration: 3,
        ease: "power2.out",
        stagger: {
          amount: 0.5,
          from: "start",
        },
      });
    });
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var $el = $(entry.target);
          animateSentences($el);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  $(".__anim-sentence").each(function () {
    observer.observe(this);
  });
});
