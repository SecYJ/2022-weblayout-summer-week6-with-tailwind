const mobileNavBtn = document.querySelector("#mobile-nav-btn");
const mobileMenu = document.querySelector("#mobile-menu");

mobileNavBtn.addEventListener("click", () => {
    const elHeight = mobileMenu.scrollHeight;
    const isCollapsed = mobileMenu.dataset.collapsed;

    if (isCollapsed === "true") {
        mobileMenu.style.height = `${elHeight}px`;
        mobileMenu.dataset.collapsed = "false";
    } else {
        mobileMenu.style.height = 0;
        mobileMenu.dataset.collapsed = "true";
    }
    // expandMenu(mobileMenu);
});
