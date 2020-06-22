import $ from "jquery";
import "bootstrap";
import "popper.js";

import { elements } from "./elements";
// stick header after pageYOffset of 60

// window.addEventListener("load", () => {
//     elements.loader.style.display = 'none';
// });

const scrollEvent = targetElOffsetTop => {
    if (targetElOffsetTop > window.scrollY) {
        // check if header nav is in sticky mode
        if (elements.header_nav.hasClass("sticky")) {
            window.scrollBy(0, targetElOffsetTop - 60 - window.scrollY);
        } else window.scrollBy(0, targetElOffsetTop - 60 - window.scrollY);
    } else {
        window.scrollBy(0, targetElOffsetTop - 60 - window.scrollY);
    }
};

const sticky = 60;
const stickHeader = () => {
    if (window.pageYOffset > sticky) {
        // add class 'sticky' for white background and other styles
        elements.header_navbar.addClass("sticky");
        elements.all_nav_links.addClass("stickyHeader-link");
    } else {
        elements.header_navbar.removeClass("sticky");
        elements.all_nav_links.removeClass("stickyHeader-link");
    }
};

const hideMobileMenu = () => {
    elements.overlay.addClass("overlay-hidden");
    elements.mobile_menu.addClass("mobile-menu-hidden");
    document.body.style.overflow = "auto";
};

window.addEventListener("scroll", stickHeader);

// handling scroll for click event on navlinks
elements.navbar_nav.on("click", e => {
    e.preventDefault();
    const target = $(e.target);
    elements.all_nav_links.removeClass("active");
    target.addClass("active");
    const hrefVal = target.attr("href");

    let targetElOffsetTop = 0;
    targetElOffsetTop = $(`${hrefVal}`).offset().top;
    scrollEvent(targetElOffsetTop);
});

elements.navbar_toggler.on("click", () => {
    elements.overlay.removeClass("overlay-hidden");
    elements.mobile_menu.removeClass("mobile-menu-hidden");
    document.body.style.overflow = "hidden";
});

elements.mobile_close_btn.on("click", () => {
    hideMobileMenu();
});

document.body.addEventListener("click", e => {
    if (!e.target.closest(".mobile-menu") && e.target.tagName !== "BUTTON") {
        hideMobileMenu();
    }
});

elements.mobile_nav.on("click", e => {
    hideMobileMenu();
    const target = $(e.target);
    const hrefVal = target.attr("href");
    let targetElOffsetTop = 0;
    targetElOffsetTop = $(`${hrefVal}`).offset().top;
    scrollEvent(targetElOffsetTop);
});
