let menubtn = document.querySelector(".menubtn");
let list = document.querySelector(".list");

menubtn.onclick = () => {
  list.classList.toggle("d-none");
  list.classList.toggle("open-list");
};
const navbar = document.querySelector("nav");
window.onscroll = () => {
  if (window.scrollY > 40) {
    navbar.classList.add("nav-active");
  } else {
    navbar.classList.remove("nav-active");
  }
};
