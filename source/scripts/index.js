const headerNav = document.querySelector(".header__nav");
const headerButton = document.querySelector(".header__button");

headerButton.addEventListener("click", function () {
  headerNav.classList.toggle("header__nav--opened");
});
