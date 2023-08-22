$(document).ready(function () {
  $(".con-2 .slick-1").slick({
    vertical: true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
  });
  $(".con-2 .slick-2").slick({
    vertical: true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
  });
  $(".con-2 .slick-3").slick({
    vertical: true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
  });

  const setActiveTab = (headerItem) => {
    const tabHeader = headerItem.parentElement;
    const tabContainer = tabHeader.nextElementSibling;
    const index = [...tabHeader.children].indexOf(headerItem);

    [...tabHeader.children].forEach((item) => item.classList.remove("active"));
    headerItem.classList.add("active");
    [...tabContainer.children].forEach((child, idx) => {
      child.classList.toggle("active", idx === index);
    });
  };

  const initializeActiveTabs = () => {
    document.querySelectorAll(".tab-header").forEach((tabHeader) => {
      setActiveTab(
        tabHeader.querySelector(".item.active") ||
          tabHeader.querySelector(".item")
      );
    });
  };

  document.querySelectorAll(".tab-wrap").forEach((tabWrap) => {
    tabWrap.addEventListener("click", (e) => {
      if (e.target.classList.contains("item")) {
        setActiveTab(e.target);
      }
    });
  });

  initializeActiveTabs();

  const accordionWraps = document.querySelectorAll(".accordion-wrap");

  accordionWraps.forEach(function (accordionWrap) {
    accordionWrap.addEventListener("click", function () {
      this.classList.toggle("active");

      accordionWraps.forEach(function (otherWrap) {
        if (otherWrap !== accordionWrap) {
          otherWrap.classList.remove("active");
        }
      });
    });
  });

  const fadeInSection = document.querySelectorAll(".fade-in");

  const options = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  fadeInSection.forEach((section) => {
    observer.observe(section);
  });

  const counterElements = document.querySelectorAll(".counter");
  const duration = 2000;
  const interval = 10;

  counterElements.forEach((counterElement) => {
    const originalText = counterElement.textContent;
    const targetNumber = parseFloat(originalText.replace(/,/g, ""));
    const hasDot = originalText.includes(".");
    const step = (targetNumber * interval) / duration;
    let currentNumber = 0;

    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          function updateCounter() {
            if (currentNumber < targetNumber) {
              currentNumber += step;
              if (currentNumber > targetNumber) {
                currentNumber = targetNumber;
              }

              let formattedNumber = currentNumber.toFixed(hasDot ? 1 : 0);
              if (originalText.includes(",")) {
                formattedNumber = formattedNumber.replace(
                  /\B(?=(\d{3})+(?!\d))/g,
                  ","
                );
              }

              counterElement.textContent = formattedNumber;
              requestAnimationFrame(updateCounter);
            }
          }

          updateCounter();
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(counterElement);
  });

  const scrollIndicator = document.getElementById("scrollIndicator");

  function toggleScrollIndicatorClass() {
    if (window.scrollY > 0) {
      scrollIndicator.classList.add("on");
    } else {
      scrollIndicator.classList.remove("on");
    }
  }

  window.addEventListener("scroll", toggleScrollIndicatorClass);

  $(".button-menu").click(function () {
    $(".header").toggleClass("on");
  });
});
