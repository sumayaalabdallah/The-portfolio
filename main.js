//for Hamburger menu
            document.addEventListener('DOMContentLoaded', () => {
                // Get all "navbar-burger" elements
                const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
                // Add a click event on each of them
                $navbarBurgers.forEach(el => {
                    el.addEventListener('click', () => {
                        // Get the target from the "data-target" attribute
                        const target = el.dataset.target;
                        const $target = document.getElementById(target);
                        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                        el.classList.toggle('is-active');
                        $target.classList.toggle('is-active');
                    });
                });
            });
 // scroll reveal animation
ScrollReveal({
    reset: true, 
    distance: '80px',
    duration: 2000,
    delay: 250
});

ScrollReveal().reveal('.home-content , .heading1 , .heading2,.t, .input ', { origin: 'top'});
ScrollReveal().reveal('.home-img img , .services-container , .portfolio-box , contact form , .skills-content,.textarea , .btn , .b', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1 , .about-img img , .heading3 , .l', { origin: 'left'});
ScrollReveal().reveal('.home-content h3 , .home-content p, .about-content, .r , .star, .heading4', { origin: 'right'});

// tabs
function openTab(evt, tabName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("content-tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" is-active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " is-active";
}



var typed = new Typed(".typed", {
    strings: ["FRONT-END DEVELOPER ", "WEB-DESIGNER"],
    backSpeed: 40,
    typeSpeed: 40,
    loop: true,
  });