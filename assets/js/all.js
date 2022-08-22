"use strict";

var mobileNavBtn = document.querySelector("#mobile-nav-btn");
var mobileMenu = document.querySelector("#mobile-menu");
var loginBtn = document.querySelector("#login");
var modal = document.querySelector("#modal");
mobileNavBtn.addEventListener("click", function () {
  var elHeight = mobileMenu.scrollHeight;
  var isCollapsed = mobileMenu.dataset.collapsed;

  if (isCollapsed === "true") {
    mobileMenu.style.height = "".concat(elHeight, "px");
    mobileMenu.dataset.collapsed = "false";
  } else {
    mobileMenu.style.height = 0;
    mobileMenu.dataset.collapsed = "true";
  } // expandMenu(mobileMenu);

});
loginBtn.addEventListener("click", function () {
  // document.body.classList.add("fixed-modal");
  document.body.style.overflow = "hidden";
  document.body.style.paddingRight = "17px";
  modal.showModal();
});
var datepicker = new Datepicker(document.querySelector("#reserve-date"), {
  orientation: "bottom auto"
});
//# sourceMappingURL=all.js.map
