/* =========================
   LUXORA GALLERY SLIDER
========================= */

const luxoraGalleryTrack = document.querySelector(".luxora-gallery-track");
const luxoraGallerySlides = document.querySelectorAll(".luxora-gallery-slide");
const luxoraGalleryPrevBtn = document.querySelector(".luxora-gallery-prev");
const luxoraGalleryNextBtn = document.querySelector(".luxora-gallery-next");
const luxoraGalleryDots = document.querySelectorAll(".luxora-gallery-dot");

let luxoraGalleryIndex = 0;

/* Update Slider */

function updateLuxoraGallerySlider() {

    luxoraGalleryTrack.style.transform =
        `translateX(-${luxoraGalleryIndex * 100}%)`;

    luxoraGalleryDots.forEach(dot => {
        dot.classList.remove("active");
    });

    luxoraGalleryDots[luxoraGalleryIndex].classList.add("active");
}

/* Next Slide */

function nextLuxoraGallerySlide() {

    luxoraGalleryIndex++;

    if (luxoraGalleryIndex >= luxoraGallerySlides.length) {
        luxoraGalleryIndex = 0;
    }

    updateLuxoraGallerySlider();
}

/* Prev Slide */

function prevLuxoraGallerySlide() {

    luxoraGalleryIndex--;

    if (luxoraGalleryIndex < 0) {
        luxoraGalleryIndex = luxoraGallerySlides.length - 1;
    }

    updateLuxoraGallerySlider();
}

/* Buttons */

luxoraGalleryNextBtn.addEventListener(
    "click",
    nextLuxoraGallerySlide
);

luxoraGalleryPrevBtn.addEventListener(
    "click",
    prevLuxoraGallerySlide
);

/* Dots */

luxoraGalleryDots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        luxoraGalleryIndex = index;

        updateLuxoraGallerySlider();

    });

});

/* Auto Slide */

setInterval(() => {

    nextLuxoraGallerySlide();

}, 5000);





const slider = document.querySelector(".floorplan-slider");

document.querySelector(".floor-next").addEventListener("click", () => {

    slider.scrollBy({
        left: 450,
        behavior: "smooth"
    });

});

document.querySelector(".floor-prev").addEventListener("click", () => {

    slider.scrollBy({
        left: -450,
        behavior: "smooth"
    });

});


// LIGHTBOX

const lightbox = document.querySelector(".floorplan-lightbox");
const lightboxImage = document.querySelector(".lightbox-image");

document.querySelectorAll(".floorplan-card img")
.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.classList.add("active");

        lightboxImage.src = img.src;

    });

});

document.querySelector(".lightbox-close")
.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click", (e) => {

    if(e.target === lightbox){

        lightbox.classList.remove("active");

    }

});

document.addEventListener("keydown", (e) => {

    if(e.key === "Escape"){

        lightbox.classList.remove("active");

    }

});