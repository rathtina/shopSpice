let searchForm = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  shoppingCard.classList.remove("active");
  loginCard.classList.remove("active");
  menuCard.classList.remove("active");
};
let shoppingCard = document.querySelector(".shopping-card");
document.querySelector("#shop-btn").onclick = () => {
  shoppingCard.classList.toggle("active");
  searchForm.classList.remove("active");
  loginCard.classList.remove("active");
  menuCard.classList.remove("active");
};
let loginCard = document.querySelector(".loging-form");
document.querySelector("#login-btn").onclick = () => {
  loginCard.classList.toggle("active");
  searchForm.classList.remove("active");
  shoppingCard.classList.remove("active");
  menuCard.classList.remove("active");
};
let menuCard = document.querySelector(".navigation");
document.querySelector("#menu-btn").onclick = () => {
  menuCard.classList.toggle("active");
  searchForm.classList.remove("active");
  shoppingCard.classList.remove("active");
  loginCard.classList.remove("active");
};
window.onscroll = () => {
  searchForm.classList.remove("active");
  shoppingCard.classList.remove("active");
  loginCard.classList.remove("active");
  menuCard.classList.remove("active");
};

var swiper = new Swiper(".product-slider", {
  loop:true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteration: false, 
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  loop:true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteration: false, 
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});
