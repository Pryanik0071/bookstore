$(document).ready(function () {
  // Кнопка в шапке
  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    document
      .querySelector(".nav-menu")
      .classList.toggle("nav__mobile--visible");
  });

  // Modal Window
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);

  closeModalButton.on("click", closeModal);

  $(document).keydown(function (e) {
    var modalIsOpen = $(".modal__dialog").hasClass("modal__dialog--visible");
    if (e.keyCode === 27 && modalIsOpen) {
      closeModal(e);
    }
  });

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }

  $('input[type="tel"]').mask("+7 (000) 000-00-00");

  // Валидация
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      rules: {
        "phone-modal": {
          required: true,
          minlength: 18,
        },
        phone: {
          required: true,
          minlength: 18,
        },
      },
      messages: {
        "name-modal": "Name is required",
        name: "Name is required",
        "phone-modal": {
          required: "Phone is required",
          minlength: jQuery.validator.format("Format input +7 (999) 999-99-99"),
        },
        phone: {
          required: "Phone is required",
          minlength: jQuery.validator.format("Format input +7 (999) 999-99-99"),
        },
        "email-news": "Email is required",
        "email-modal": "Email is required",
        email: "Email is required",
      },
    });
  });

  // Слайдер Category
  const swiperCategory = new Swiper(".category-container", {
    // Optional parameters

    // Navigation arrows
    navigation: {
      nextEl: ".category-button--next",
      prevEl: ".category-button--prev",
    },

    longSwipes: true,
  });

  // Слайдер Неизданного
  const swiperUnreleased = new Swiper(".unreleased-container", {
    slidesPerView: "auto",

    // Navigation arrows
    navigation: {
      nextEl: ".unreleased-button--next",
      prevEl: ".unreleased-button--prev",
    },

    // Keyboard control
    keyboard: {
      enabled: true,
    },
  });
});
