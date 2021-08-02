$(document).ready(function () {
  // Кнопка в шапке
  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    document
      .querySelector(".nav-menu")
      .classList.toggle("nav__mobile--visible");
  });
});
