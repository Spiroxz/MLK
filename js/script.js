const navbarNav = document.querySelector(".navbar-nav");
// ketika di klik
document.querySelector("#menu-teh").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar tutup
const menuteh = document.querySelector("#menu-teh");
document.addEventListener("click", function (e) {
  if (!menuteh.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
