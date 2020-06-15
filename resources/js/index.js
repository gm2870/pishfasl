import "jquery";
import "bootstrap";
import "popper.js";



import {elements} from './elements';
// stick header after pageYOffset of 60

// window.addEventListener("load", () => {
//     elements.loader.style.display = 'none';
// });

const scrollEvent = targetElOffsetTop  => {
    if(targetElOffsetTop > window.scrollY){

        // check if header nav is in sticky mode
        if(elements.header_nav.classList.contains('sticky')){
            window.scrollBy(0,(targetElOffsetTop - 60 ) - window.scrollY);
        }
        else window.scrollBy(0,(targetElOffsetTop - 170) - window.scrollY);

    }else{
        window.scrollBy(0,(targetElOffsetTop-60) - window.scrollY);
    }
};

const sticky = 60;
const stickHeader = () => {
    if (window.pageYOffset > sticky) {
        // add class 'sticky' for white background and other styles
        elements.header_navbar.classList.add("sticky");
        elements.all_nav_links.forEach(el => {
            el.classList.add('stickyHeader-link');
        } );
    } else {
        elements.header_navbar.classList.remove("sticky");
        elements.all_nav_links.forEach(el => {
            el.classList.remove('stickyHeader-link');
        } );
    }
};

const hideMobileMenu = () => {
    elements.overlay.classList.add('overlay-hidden');
    elements.mobile_menu.classList.add('mobile-menu-hidden');
    document.body.style.overflow = 'auto';
};

window.addEventListener("scroll", stickHeader);

// handling scroll for click event on navlinks 
    elements.navbar_nav.addEventListener('click', e => {
        e.preventDefault();
        elements.all_nav_links.forEach(el => {
            el.classList.remove('active')
        });
        e.target.classList.add('active');  
        const target = e.target.innerHTML;
        let targetElOffsetTop = 0;
        targetElOffsetTop = document.querySelector(`#${target}`).offsetTop;
        scrollEvent(targetElOffsetTop);
    });

elements.navbar_toggler.addEventListener('click', () => {
    elements.overlay.classList.remove('overlay-hidden');
    elements.mobile_menu.classList.remove('mobile-menu-hidden');
    document.body.style.overflow = 'hidden';

});

elements.mobile_close_btn.addEventListener('click', () => {
    hideMobileMenu();
});

document.body.addEventListener('click', e => {
    if( !e.target.closest('.mobile-menu') && e.target.tagName !== 'BUTTON'){
        hideMobileMenu();
    }
});

    elements.mobile_nav.addEventListener('click', e => {
        hideMobileMenu();
             
        const target = e.target.innerHTML;
        let targetElOffsetTop = 0;
        targetElOffsetTop = document.querySelector(`#${target}`).offsetTop;
        scrollEvent(targetElOffsetTop);
    });