function toggleMenu() {
  document.getElementById("nav-list").classList.toggle("open");
  document.querySelector("#intro-section").classList.toggle("background");
  document.querySelector(".hamburger").classList.toggle("active");
  document.querySelector(".close").classList.toggle("active");
}

let x = document.getElementById("nav-icon-div");
x.onclick = toggleMenu;
