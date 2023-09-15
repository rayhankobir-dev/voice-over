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
});
