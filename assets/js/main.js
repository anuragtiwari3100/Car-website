/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navClose = document.getElementById("nav-close"),
  nav_toggle = document.getElementById("nav-toggle");
if (nav_toggle) {
  nav_toggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navlink = document.querySelectorAll(".nav__link");
function linkActiv() {
  navMenu.classList.remove("show-menu");
}
navlink.forEach((n) => {
  n.addEventListener("click", linkActiv);
});
/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  window.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);
/*=============== POPULAR SWIPER ===============*/
let swiperPopular = new Swiper(".popular__container", {
  loop: true,
  spaceBetween: 24,
  slidesPerView: "auto",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1024: {
      spaceBetween: 48,
    },
  },
});
/*=============== MIXITUP FILTER FEATURED ===============*/
let mixerFeatured = mixitup(".featured__content", {
  selectors: {
    target: ".featured__card",
  },
  animation: {
    duration: 300,
  },
});
/* Link active featured */
const linkFeatured = document.querySelectorAll(".featured__item");
function activeFeatured() {
  linkFeatured.forEach((l) => l.classList.remove("active-featured"));
  this.classList.add("active-featured");
}
linkFeatured.forEach((l) => l.addEventListener("click", activeFeatured));
/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  window.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const section = document.querySelectorAll("section[id]");

const sectionActive = () => {
  const scrollDown = window.scrollY;
  section.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(`.nav__menu a[href*=${sectionId}]`);

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", sectionActive);
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reser:true
});
sr.reveal(
  `.home__title, .popular__container,.features__img,.featured__filters`
);
sr.reveal(`.home__subtitle`, { delay: 500 });
sr.reveal(`.home__elec`, { delay: 600 });
sr.reveal(`.home__img`, { delay: 800 });
sr.reveal(`.home__car-data`, { delay: 900, interval: 100, origin: "bottom" });
sr.reveal(`.home__button`, { delay: 100, origin: "bottom" });
sr.reveal(`.about__group,.offer__data`, { origin: "left" });
sr.reveal(`.about__data,.offer__img`, { origin: "right" });
sr.reveal(`.features__map`, { delay: 600, origin: "bottom" });
sr.reveal(`.features__card`, { interval: 300 });
sr.reveal(`.featured__card ,.logos__container,.footer__content`, {
  interval: 100,
});
