document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    // duration: 1000,
    // once: true,
  });
  var con0 = document.querySelector(".con0");
  if (con0) {
    var swiper = new Swiper(con0.querySelector(".swiper"), {
      slidesPerView: 1,
      navigation: {
        nextEl: con0.querySelector(".swiper-button-next"),
        prevEl: con0.querySelector(".swiper-button-prev"),
      },
    });
  }
  var con1 = document.querySelector(".con1");
  if (con1) {
    var swiper = new Swiper(con1.querySelector(".swiper"), {
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
        el: con1.querySelector(".swiper-pagination"),
        clickable: true,
        renderBullet: function (index, className) {
          var slides = con1.querySelectorAll(".swiper-slide");
          var title = slides[index].getAttribute("data-title");
          return '<span class="' + className + '">' + title + "</span>";
        },
      },
      navigation: {
        nextEl: con1.querySelector(".swiper-button-next"),
        prevEl: con1.querySelector(".swiper-button-prev"),
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
  }
  const con7 = document.querySelector(".con7");
  if (con7) {
    let con7Width = con7.offsetWidth;

    function cloneImages() {
      const images = con7.querySelectorAll("img");
      images.forEach((image) => {
        const clone = image.cloneNode(true);
        con7.appendChild(clone);
      });
    }

    function startRolling() {
      let position = 0;
      const speed = 1;

      function roll() {
        position -= speed;
        if (Math.abs(position) >= con7Width) {
          position = 0;
          removeOldImages();
          cloneImages();
        }
        con7.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(roll);
      }

      function removeOldImages() {
        const images = con7.querySelectorAll("img");
        const half = Math.floor(images.length / 2);
        for (let i = 0; i < half; i++) {
          con7.removeChild(images[i]);
        }
      }

      cloneImages();
      roll();
    }
    startRolling();
  }

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

  const typingElement1 = document.getElementById("typing1");
  const typingElement2 = document.getElementById("typing2");
  const cursorElement1 = document.getElementById("cursor1");
  const cursorElement2 = document.getElementById("cursor2");
  const footerElement = document.getElementById("footer");

  const text1 = typingElement1.textContent.trim(); // 첫 번째 줄 텍스트를 가져와서 앞뒤 공백 제거
  const text2 = typingElement2.textContent.trim(); // 두 번째 줄 텍스트를 가져와서 앞뒤 공백 제거

  const speed = 100;

  typingElement1.textContent = ""; // 텍스트 초기화
  typingElement2.textContent = ""; // 텍스트 초기화

  let index1 = 0;
  let index2 = 0;

  function typeFirstLine() {
    if (index1 < text1.length) {
      typingElement1.innerHTML += text1.charAt(index1);
      index1++;
      setTimeout(typeFirstLine, speed);
    } else {
      cursorElement1.style.display = "none"; // 첫 번째 줄 타이핑이 끝나면 커서 숨기기
      cursorElement2.style.display = "inline-block"; // 두 번째 줄 커서 보이기
      typeSecondLine(); // 첫 번째 줄 타이핑이 끝나면 바로 두 번째 줄 타이핑 시작
    }
  }

  function typeSecondLine() {
    if (index2 < text2.length) {
      typingElement2.innerHTML += text2.charAt(index2);
      index2++;
      setTimeout(typeSecondLine, speed);
    } else {
      // cursorElement2.style.display = "none"; // 두 번째 줄 타이핑이 끝나면 커서 숨기기
    }
  }

  const observerOptions = {
    root: null, // 뷰포트
    rootMargin: "0px",
    threshold: 0.1, // 요소가 10% 이상 보일 때
  };

  const typingObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelector(".typing-container").style.visibility =
          "visible"; // 요소가 보일 때 타이핑 효과 시작
        cursorElement1.style.display = "inline-block"; // 첫 번째 줄 커서 보이기
        typeFirstLine(); // 첫 번째 줄 타이핑 시작
        typingObserver.disconnect(); // 한 번만 실행되도록 옵저버 해제
      }
    });
  }, observerOptions);

  typingObserver.observe(typingElement1);

  // Footer가 화면에 보이면 클래스 추가
  const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        footerElement.classList.add("footer-visible");
      } else {
        footerElement.classList.remove("footer-visible");
      }
    });
  }, observerOptions);

  footerObserver.observe(footerElement);
});
