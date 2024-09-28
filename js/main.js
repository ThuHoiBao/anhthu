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
document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed(".text1", {
    strings: ["Information"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed(".text3", {
    strings: ["Exercise List"],
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

  if (selectedValue === 'email') {
    workImage.src = './img/email.jpg';
    workDescription.innerHTML = '<a href="https://chuong6-1.onrender.com" target="_blank">Email List</a>';
  }
  else if (selectedValue === 'murarch') {
    workImage.src = './img/murarch.jpg';
    workDescription.innerHTML = '<a href="https://chuong6-2.onrender.com" target="_blank">Murach Survey</a>';
  }
  else if (selectedValue === 'exer5') {
    workImage.src = './img/exercise5.png';
    workDescription.innerHTML = '<a href="https://exercise-5-e0vq.onrender.com" target="_blank">Chapter 5 exercises</a>';
  }
  else if (selectedValue === 'exer') {
    workImage.src = './img/baitap.jpg';
    workDescription.innerHTML = '<a  target="_blank">Exercises</a>';
    
  }
  else if (selectedValue === 'exer7') {
    workImage.src = './img/cart.jpg';
    workDescription.innerHTML = '<a href="https://chuong7cart.onrender.com" target="_blank">Shopping Cart</a>';
  }
});
