document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    // duration: 1000,
    // once: true,
  });

  var swiper = new Swiper(".con0 .swiper", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".con0 .swiper-button-next",
      prevEl: ".con0 .swiper-button-prev",
    },
  });
  var con1 = document.querySelector(".con1");
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
    navigation: {
      nextEl: ".con1 .swiper-button-next",
      prevEl: ".con1 .swiper-button-prev",
    },
    on: {
      init: function () {
        var totalSlides = con1.querySelectorAll(".swiper-slide").length;
        con1.querySelector(".total").textContent = totalSlides;
      },
      slideChange: function () {
        var currentIndex = this.realIndex + 1;
        con1.querySelector(".number").textContent = currentIndex;
      },
    },
  });

  var tabs = document.querySelectorAll(".tab");
  var contents = document.querySelectorAll(".tab-content");

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var target = tab.getAttribute("data-tab");

      tabs.forEach(function (item) {
        item.classList.remove("tab-active");
      });
      contents.forEach(function (content) {
        content.classList.remove("tab-content-active");
      });

      tab.classList.add("tab-active");
      document.getElementById(target).classList.add("tab-content-active");
    });
  });

  if (tabs.length > 0) {
    tabs[0].click();
  }

  const slider = document.getElementById("image-slider");
  let scrollAmount = 0;
  const scrollStep = 1; // 스크롤 속도

  function loopScroll() {
    scrollAmount -= scrollStep;
    if (Math.abs(scrollAmount) >= slider.offsetWidth / 2) {
      scrollAmount = 0; // 무한 롤링을 위해 스크롤을 초기화
    }
    slider.style.transform = `translateX(${scrollAmount}px)`;
    requestAnimationFrame(loopScroll);
  }

  loopScroll();
});
