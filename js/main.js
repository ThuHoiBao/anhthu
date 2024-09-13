// Menu
const menu = document.querySelector(".navbar__links");
const menuButton = document.querySelector(".navbar__icons");
const overlay = document.querySelector("#overlay");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});
document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed(".text", {
    strings: ["I'm student", "I'm Anh Thu"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });
});
overlay.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});
document.getElementById('works-combobox').addEventListener('change', function() {
  var selectedValue = this.value;
  var workImage = document.getElementById('work-image');
  var workDescription = document.getElementById('work-description');

  if (selectedValue === 'murarch') {
    workImage.src = './img/murarch.jpg';
    workDescription.innerHTML = '<a href="https://emailhostingweb.onrender.com/" target="_blank">Murarch</a>';
  } else if (selectedValue === 'Weak 4') {
    workImage.src = './img/logo.jpg';
    workDescription.innerHTML = '<a href="https://www.facebook.com/profile.php?id=100026084804516&locale=vi_VN" target="_blank">Weak 4</a>';
  } else if (selectedValue === 'exer') {
    workImage.src = './img/baitap.jpg';
    workDescription.innerHTML = '<a  target="_blank">Exercises</a>';
    
  }
});
