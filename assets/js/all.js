"use strict";

var mobileNavBtn = document.querySelector("#mobile-nav-btn");
var mobileMenu = document.querySelector("#mobile-menu");
var mobileLoginBtn = document.querySelector("#mobile-login-btn");
var loginBtn = document.querySelector("#login-btn");
var modalCloseBtn = document.querySelector("#modal-close-btn");
var backdrop = document.querySelector("#backdrop");
var modal = document.querySelector("#modal");
window.addEventListener("DOMContentLoaded", function () {
  mobileNavBtn.addEventListener("click", function () {
    var elHeight = mobileMenu.scrollHeight;
    var isCollapsed = mobileMenu.dataset.collapsed;

    if (isCollapsed === "true") {
      mobileMenu.style.height = "".concat(elHeight, "px");
      mobileMenu.dataset.collapsed = "false";
    } else {
      mobileMenu.style.height = 0;
      mobileMenu.dataset.collapsed = "true";
    }
  });

  var showModal = function showModal(e) {
    e.stopPropagation();
    document.body.classList.add("disabled-scrolling");
    backdrop.classList.remove("hidden");
    backdrop.classList.add("grid");
    document.addEventListener("click", hideModal);
  };

  var hideModal = function hideModal(e) {
    if (e.target.parentElement.id === "modal-close-btn" || !e.target.closest("#modal")) {
      backdrop.classList.remove("grid");
      backdrop.classList.add("hidden");
      document.body.classList.remove("disabled-scrolling");
      document.removeEventListener("click", hideModal);
    }
  };

  mobileLoginBtn.addEventListener("click", showModal);
  loginBtn.addEventListener("click", showModal);
  new Swiper(".swiper", {
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      bulletElement: "li"
    },
    navigation: {
      nextEl: ".carousel-next-btn",
      prevEl: ".carousel-prev-btn"
    }
  });
  var reserveDate = document.querySelector("#reserve-date");
  var validDate = document.querySelector("#valid-date");

  var datepickerInit = function datepickerInit(domEl) {
    new Datepicker(domEl, {
      orientation: "bottom auto"
    });
  };

  if (reserveDate) datepickerInit(reserveDate);
  if (validDate) datepickerInit(validDate);
});
//# sourceMappingURL=all.js.map
