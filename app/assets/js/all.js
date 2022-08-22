const mobileNavBtn = document.querySelector("#mobile-nav-btn");
const mobileMenu = document.querySelector("#mobile-menu");
const loginBtn = document.querySelector("#login");
const modal = document.querySelector("#modal");

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

loginBtn.addEventListener("click", () => {
    // document.body.classList.add("fixed-modal");
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "17px";
    modal.showModal();
});

const datepicker = new Datepicker(document.querySelector("#reserve-date"), {
    orientation: "bottom auto",
});
