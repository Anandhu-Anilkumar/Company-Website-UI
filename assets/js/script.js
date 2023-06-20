// Navigation
let links = document.getElementsByClassName("nav-link");
let toggleButton = document.getElementsByClassName("navbar-toggler");
let companyName = document.getElementById("cw-company-name");

window.addEventListener("scroll", function () {
    let nav = document.getElementById("cw-navbar")
    if (window.scrollY > 32) {
        nav.classList.add("cw-nav__sticky-nav");
    } else {
        nav.classList.remove("cw-nav__sticky-nav");
    }
});

for (let index = 0; index < links.length; index++) {
    links[index].addEventListener("click", function () {
        for (let i = 0; i < links.length; i++) {
            links[i].classList.remove("active");
        }
        links[index].classList.add("active");
    });
}

toggleButton[0].addEventListener("click", function () {
    if (companyName[0].style.display == "none") {
        companyName[0].style.display = "block";
    } else {
        companyName[0].style.display = "none";
    }
});


// Slider Banner
$(document).ready(function () {
    $('.cw-slider-banner').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});


// Clients Testimonial
$(document).ready(function () {
    $('.cw-testimonial__wrapper').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});