import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const breakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  520: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  810: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1120: {
    slidesPerView: 4,
    spaceBetween: 30,
  },
};

let swiper: null | Swiper = null;
if (document.body.clientWidth > 650) {
  swiper = initSwiper("fraction");
} else {
  swiper = initSwiper("bullets");
}

window.addEventListener("resize", () => {
  if (document.body.clientWidth > 650) {
    swiper?.destroy();
    swiper = initSwiper("fraction");
  } else {
    swiper?.destroy();
    swiper = initSwiper("bullets");
  }
});

function initSwiper(paginationType: "bullets" | "fraction") {
  return new Swiper(".swiper", {
    speed: 400,
    spaceBetween: 100,
    modules: [Navigation, Pagination],
    breakpoints: breakpoints,
    pagination: {
      renderFraction: function (currentClass, totalClass) {
        return (
          '<span class="' +
          currentClass +
          '"></span>' +
          " из " +
          '<span class="' +
          totalClass +
          '"></span>'
        );
      },
      el: ".swiper-pagination",
      type: paginationType,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
