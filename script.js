


const burgerMenu = document.querySelector("#burger-menu");
const burgerMenuNav = document.querySelector("#burger-menu-nav");

burgerMenu.addEventListener("click", () => {
  burgerMenuNav.classList.toggle("active");
  burgerMenu.classList.toggle("active");
  burgerMenu.style.zIndex = "101";
  burgerMenu.classList.toggle("burger-menu-fixed");
})