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