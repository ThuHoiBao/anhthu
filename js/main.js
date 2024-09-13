// Menu
const menu = document.querySelector(".navbar__links");
const menuButton = document.querySelector(".navbar__icons");
const overlay = document.querySelector("#overlay");


document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed(".text", {
    strings: ["I'm student", "I'm Anh Thu"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });
});
menuButton.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});
