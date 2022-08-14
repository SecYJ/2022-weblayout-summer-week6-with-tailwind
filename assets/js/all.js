"use strict";

var mobileNavBtn = document.querySelector("#mobile-nav-btn");
var mobileMenu = document.querySelector("#mobile-menu");
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
//# sourceMappingURL=all.js.map
