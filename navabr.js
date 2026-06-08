// navbar background on scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 100){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }
});

// mobile menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// enquiry popup
document.getElementById("navbarEnquireBtn")
.addEventListener("click", () => {
    document.getElementById("projectEnquiryPopup")
    .classList.add("active");
});

// smooth scroll
document.querySelectorAll('.nav-links a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );

        target.scrollIntoView({
            behavior: 'smooth'
        });

        navLinks.classList.remove("active");
    });
});


let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY <= 10) {
        // At the very top — always show
        document.querySelector(".navbar").style.transform = "translateY(0)";
    } else if (currentScrollY > lastScrollY) {
        // Scrolling DOWN — hide navbar
        document.querySelector(".navbar").style.transform = "translateY(-100%)";
    } else {
        // Scrolling UP — show navbar
        document.querySelector(".navbar").style.transform = "translateY(0)";
    }

    lastScrollY = currentScrollY;
});


// close popup on close button click
document.getElementById("projectEnquiryClose")
.addEventListener("click", () => {
    document.getElementById("projectEnquiryPopup")
    .classList.remove("active");
});

// close popup on outside click
document.getElementById("projectEnquiryPopup")
.addEventListener("click", (e) => {
    if (e.target === document.getElementById("projectEnquiryPopup")) {
        document.getElementById("projectEnquiryPopup")
        .classList.remove("active");
    }
});