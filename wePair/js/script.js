document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
  });

  var scrollElements = document.querySelectorAll(".scroll");

  var headerElement = document.querySelector(".header");

  window.addEventListener("scroll", function () {
    var scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    var isScrollWithinAnyElement = Array.from(scrollElements).some(
      (element) => {
        var elementStart = element.offsetTop;
        var elementEnd = elementStart + element.offsetHeight;

        return elementStart <= scrollPosition && elementEnd > scrollPosition;
      }
    );

    if (isScrollWithinAnyElement) {
      headerElement.classList.add("on");
    } else {
      headerElement.classList.remove("on");
    }

    var con1Element = document.querySelector(".con-1");
    var con6Element = document.querySelector(".con-6");
    var con1Start = con1Element.offsetTop;
    var con1End = con1Start + con1Element.offsetHeight;
    var con6Start = con6Element.offsetTop;
    var con6End = con6Start + con6Element.offsetHeight;

    if (con1Start <= scrollPosition && con1End > scrollPosition) {
      headerElement.classList.add("simple");
    } else {
      headerElement.classList.remove("simple");
    }

    if (con6Start <= scrollPosition && con6End > scrollPosition) {
      headerElement.classList.add("color");
    } else {
      headerElement.classList.remove("color");
    }
  });

  // Intersection Observer 생성
  const targetElements = document.querySelectorAll(".fade-in");
  const options = {
    threshold: 0.5,
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // 타겟 요소가 화면에 보이면 클래스를 추가하고, 그렇지 않으면 제거합니다.
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  }, options);

  // Intersection Observer로 감시할 대상 요소를 등록합니다.
  targetElements.forEach((element) => {
    observer.observe(element);
  });
});
