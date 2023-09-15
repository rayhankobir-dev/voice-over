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

  //handle accordion here
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

  //handler mobile menu and responsiveness
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
    { threshold: 0.1 }
  );

  observer.observe(document.getElementById("contact"));

  //demo audios controlls
  Array.from($(".play-button")).forEach((button) => {
    $(button).click(() => {
      const playIcon = button.querySelector(".fa-solid.fa-circle-play");
      const pauseIcon = button.querySelector(".fa-solid.fa-circle-pause");
      const audio = button.querySelector("audio");

      const playButtons = Array.from($(".play-button"));
      const visiblePlayButtons = playButtons.filter(function (playButton) {
        return playButton !== button;
      });

      Array.from(visiblePlayButtons).forEach((item) => {
        const playIcon = item.querySelector(".fa-solid.fa-circle-play");
        const pauseIcon = item.querySelector(".fa-solid.fa-circle-pause");
        $(playIcon).removeClass("hidden");
        $(pauseIcon).addClass("hidden");
        item.querySelector("audio").pause();
      });

      if (audio.paused) {
        $(playIcon).addClass("hidden");
        $(pauseIcon).removeClass("hidden");
        audio.play();
      } else {
        $(pauseIcon).addClass("hidden");
        $(playIcon).removeClass("hidden");
        audio.pause();
      }
    });
  });
});

// handle openning mobile menu
function openMobileMenu() {
  $("#mobile-menu").toggle();
}

// handle hero section audio play pause
function playPauseAudio(button) {
  const audio = document.getElementById("myAudio");
  const playIcon = button.querySelector(".fa-solid.fa-circle-play");
  const pauseIcon = button.querySelector(".fa-solid.fa-circle-pause");

  if (audio.paused) {
    $(playIcon).addClass("hidden");
    $(pauseIcon).removeClass("hidden");
    audio.play();
  } else {
    $(pauseIcon).addClass("hidden");
    $(playIcon).removeClass("hidden");
    audio.pause();
  }
}
