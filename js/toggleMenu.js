function toggleMenu() {
  document.getElementById("navList").classList.toggle("open");
  document.querySelector(".intro-container").classList.toggle("background");
  document.querySelector(".hamburger").classList.toggle("active");
  document.querySelector(".close").classList.toggle("active");
}

let x = document.getElementById("hamburgerIcon");
x.onclick = toggleMenu;
