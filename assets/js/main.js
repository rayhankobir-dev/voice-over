$(document).ready(function () {
  const testmonials = new Swiper(".testmonialSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $(document).ready(function () {
    const buttons = Array.from($(".accordion button"));
    buttons.forEach((button) => {
      $(button).click(() => {
        const arrowUp = $(button).find("svg:first-child");
        const arrowDown = $(button).find("svg:last-child");

        const targetId = $(button).attr("target-id");
        const target = $(`#${targetId}`);
        $(".accordion p").not(target).hide();

        target.fadeToggle("slow");
      });
    });
  });

  Array.from($("#mobile-menu a")).forEach((a) => {
    $(a).click(() => {
      $("#mobile-menu").hide();
    });
  });

  activeNavigation(Array.from($(".nav-items li a")));
  activeNavigation(Array.from($("#mobile-menu a")));

  function activeNavigation(items) {
    items.forEach((a) => {
      $(a).click(() => {
        $(items).not(a).addClass("text-white");
        $(a).removeClass("text-white");
        $(a).addClass("text-blue-600");
      });
    });
  }

  window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width: 768px)").matches) {
      $("#mobile-menu").hide();
    }
  });

  const observer = new IntersectionObserver(
    (items) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          $("#mobile-menu a")
            .not($('a[href="#' + item.target.id + '"]'))
            .removeClass("text-blue-600");
          $('#mobile-menu a[href="#' + item.target.id + '"]').addClass(
            "text-blue-600"
          );
          $(".nav-items li a")
            .not($(`.nav-items li a[href="#${item.target.id}"]`))
            .removeClass("text-blue-600");
          $(`.nav-items li a[href="#${item.target.id}"]`).addClass(
            "text-blue-600"
          );
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(document.getElementById("contact"));
});

function openMobileMenu() {
  $("#mobile-menu").toggle();
}
