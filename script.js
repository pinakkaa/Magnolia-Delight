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



/* =========================
   FLOOR PLAN SLIDER
========================= */

const floorSlider = document.querySelector(".floorplan-slider");
const floorCards = document.querySelectorAll(".floorplan-card");
const floorCurrentSlide = document.getElementById("floorCurrentSlide");
const floorTotalSlides = document.getElementById("floorTotalSlides");

let floorIndex = 0;

floorTotalSlides.textContent = floorCards.length;

function goToFloorSlide(index) {
    floorIndex = (index + floorCards.length) % floorCards.length;
    floorSlider.style.transform = `translateX(-${floorIndex * 100}%)`;
    floorCurrentSlide.textContent = floorIndex + 1;
}

document.querySelector(".floor-next").addEventListener("click", () => {
    goToFloorSlide(floorIndex + 1);
});

document.querySelector(".floor-prev").addEventListener("click", () => {
    goToFloorSlide(floorIndex - 1);
});


/* =========================
   FLOOR PLAN LIGHTBOX
========================= */

const lightbox = document.querySelector(".floorplan-lightbox");
const lightboxImage = document.querySelector(".lightbox-image");

document.querySelectorAll(".floorplan-card img").forEach(img => {
    img.addEventListener("click", () => {
        lightbox.classList.add("active");
        lightboxImage.src = img.src;
    });
});

document.querySelector(".lightbox-close").addEventListener("click", () => {
    lightbox.classList.remove("active");
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove("active");
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        lightbox.classList.remove("active");
    }
});



/* =========================
   MASTERPLAN SLIDER
========================= */

(function () {

    const mplanSlider = document.querySelector(".mplan-slider");
    const mplanCards = document.querySelectorAll(".mplan-card");
    const mplanCurrent = document.getElementById("mplanCurrent");
    const mplanTotal = document.getElementById("mplanTotal");
    const mplanLightbox = document.getElementById("mplanLightbox");
    const mplanLightboxImg = document.getElementById("mplanLightboxImg");
    const mplanLightboxClose = document.getElementById("mplanLightboxClose");

    let mplanIndex = 0;

    mplanTotal.textContent = mplanCards.length;

    function mplanGoTo(index) {
        mplanIndex = (index + mplanCards.length) % mplanCards.length;
        mplanSlider.style.transform = `translateX(-${mplanIndex * 100}%)`;
        mplanCurrent.textContent = mplanIndex + 1;
    }

    document.querySelector(".mplan-next").addEventListener("click", function () {
        mplanGoTo(mplanIndex + 1);
    });

    document.querySelector(".mplan-prev").addEventListener("click", function () {
        mplanGoTo(mplanIndex - 1);
    });

    /* Lightbox */

    mplanCards.forEach(function (card) {
        card.querySelector("img").addEventListener("click", function () {
            mplanLightboxImg.src = this.src;
            mplanLightbox.classList.add("mplan-lightbox-active");
        });
    });

    mplanLightboxClose.addEventListener("click", function () {
        mplanLightbox.classList.remove("mplan-lightbox-active");
    });

    mplanLightbox.addEventListener("click", function (e) {
        if (e.target === mplanLightbox) {
            mplanLightbox.classList.remove("mplan-lightbox-active");
        }
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            mplanLightbox.classList.remove("mplan-lightbox-active");
        }
    });

})();



/* =========================
   LOCATION ACCORDION
========================= */

(function () {

    const locadvItems = document.querySelectorAll(".locadv-item");

    locadvItems.forEach(function (item) {

        item.querySelector(".locadv-header").addEventListener("click", function () {

            const isOpen = item.classList.contains("locadv-open");

            /* Close all */
            locadvItems.forEach(function (el) {
                el.classList.remove("locadv-open");
                el.querySelector(".locadv-arrow").textContent = "▼";
            });

            /* If it wasn't open, open it */
            if (!isOpen) {
                item.classList.add("locadv-open");
                item.querySelector(".locadv-arrow").textContent = "▲";
            }

        });

    });

})();