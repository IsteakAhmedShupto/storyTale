document.querySelector(".nav-open-btn").addEventListener("click", () => {
  document.querySelector(".nav-close-btn").classList.add("show-close-nav-btn");
  document.querySelector(".nav-open-btn").classList.add("hide-open-nav-btn");

  document.querySelector(".nav-lists").classList.add("show-nav-lists");
  document.querySelector(".nav-contact").classList.add("show-nav-contact");
});

document.querySelector(".nav-close-btn").addEventListener("click", () => {
  document
    .querySelector(".nav-close-btn")
    .classList.remove("show-close-nav-btn");
  document.querySelector(".nav-open-btn").classList.remove("hide-open-nav-btn");
  document.querySelector(".nav-lists").classList.remove("show-nav-lists");
  document.querySelector(".nav-contact").classList.remove("show-nav-contact");
});

window.onscroll = () => {
  if (this.scrollY <= 10) {
    document.querySelector(".header").classList.remove("header-scroll");
    document.querySelector(".logo").classList.remove("logo-scroll");
    document.querySelector(".nav-link-anchor-1").classList.remove("nav-scroll");
    document.querySelector(".nav-link-anchor-2").classList.remove("nav-scroll");
    document.querySelector(".nav-link-anchor-3").classList.remove("nav-scroll");
    document.querySelector(".nav-link-anchor-4").classList.remove("nav-scroll");
    document.querySelector(".nav-contact").classList.remove("nav-scroll");
    document.querySelector(".nav-open-btn").classList.remove("open-btn-scroll");
    document
      .querySelector(".nav-close-btn")
      .classList.remove("close-btn-scroll");
  } else {
    document.querySelector(".header").classList.add("header-scroll");
    document.querySelector(".logo").classList.add("logo-scroll");
    document.querySelector(".nav-link-anchor-1").classList.add("nav-scroll");
    document.querySelector(".nav-link-anchor-2").classList.add("nav-scroll");
    document.querySelector(".nav-link-anchor-3").classList.add("nav-scroll");
    document.querySelector(".nav-link-anchor-4").classList.add("nav-scroll");
    document.querySelector(".nav-contact").classList.add("nav-scroll");
    document.querySelector(".nav-open-btn").classList.add("open-btn-scroll");
    document.querySelector(".nav-close-btn").classList.add("close-btn-scroll");
  }
};
