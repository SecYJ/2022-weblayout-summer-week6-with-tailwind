const mobileNavBtn = document.querySelector("#mobile-nav-btn");
const mobileMenu = document.querySelector("#mobile-menu");
const mobileLoginBtn = document.querySelector("#mobile-login-btn");
const loginBtn = document.querySelector("#login-btn");
const modalCloseBtn = document.querySelector("#modal-close-btn");
const backdrop = document.querySelector("#backdrop");
const modal = document.querySelector("#modal");

window.addEventListener("DOMContentLoaded", () => {
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
    });

    const showModal = (e) => {
        e.stopPropagation();
        document.body.classList.add("disabled-scrolling");
        backdrop.classList.remove("hidden");
        backdrop.classList.add("grid");
        document.addEventListener("click", hideModal);
    };

    const hideModal = (e) => {
        if (
            e.target.parentElement.id === "modal-close-btn" ||
            !e.target.closest("#modal")
        ) {
            backdrop.classList.remove("grid");
            backdrop.classList.add("hidden");
            document.body.classList.remove("disabled-scrolling");
            document.removeEventListener("click", hideModal);
        }
    };

    mobileLoginBtn.addEventListener("click", showModal);
    loginBtn.addEventListener("click", showModal);

    new Swiper("#feedback-carousel", {
        effect: "fade",
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            bulletElement: "li",
        },

        navigation: {
            nextEl: ".carousel-next-btn",
            prevEl: ".carousel-prev-btn",
        },
    });

    new Swiper("#learning-skill-carousel", {
        // slidesPerView: 1,
        slidesPerView: 10,
        // breakpoints: {
        //     768: {
        //         slidesPerView: 6,
        //     },
        //     1024: {
        //         slidesPerView: 10,
        //     },
        // },
        // spaceBetween: 30,
        loop: true,
        spaceBetween: 16,
        autoplay: {
            disableOnInteraction: false,
            delay: 2000,
        },
        // loop: true,
        // loopedSlides: 10,
        // slidesPerColumn: 6,
        // centeredSlides: true,
        // cssMode: true,
        // longSwipes: false,
    });

    const reserveDate = document.querySelector("#reserve-date");
    const validDate = document.querySelector("#valid-date");

    const datepickerInit = (domEl) => {
        new Datepicker(domEl, {
            orientation: "bottom auto",
        });
    };

    if (reserveDate) datepickerInit(reserveDate);
    if (validDate) datepickerInit(validDate);
});
