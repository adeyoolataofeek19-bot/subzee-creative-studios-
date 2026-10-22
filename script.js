/* ========================================
   SUBZEE CREATIVE STUDIO
   STAGE 1: INTERACTIONS
======================================== */

"use strict";

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const mainNavigation = document.getElementById("mainNavigation");
    const currentYear = document.getElementById("currentYear");

    // Update the copyright year automatically.
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // Mobile navigation.
    if (menuToggle && mainNavigation) {

        menuToggle.addEventListener("click", function () {

            const isOpen = mainNavigation.classList.toggle("open");

            menuToggle.classList.toggle("active", isOpen);

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );

        });

        // Close the menu after a navigation link is selected.
        mainNavigation.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                mainNavigation.classList.remove("open");
                menuToggle.classList.remove("active");

                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            });

        });

        // Close the menu if the user taps outside the header.
        document.addEventListener("click", function (event) {

            const clickedInsideHeader = event.target.closest(".site-header");

            if (!clickedInsideHeader) {

                mainNavigation.classList.remove("open");
                menuToggle.classList.remove("active");

                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            }

        });

    }

});

// PORTFOLIO IMAGE VIEWER
const portfolioImages = document.querySelectorAll(".portfolio-image");
const imageLightbox = document.getElementById("imageLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

portfolioImages.forEach(function (image) {
    image.addEventListener("click", function () {
        lightboxImage.src = image.src;
        imageLightbox.classList.add("show");
    });
});

closeLightbox.addEventListener("click", function () {
    imageLightbox.classList.remove("show");
});

imageLightbox.addEventListener("click", function (event) {
    if (event.target === imageLightbox) {
        imageLightbox.classList.remove("show");
    }
});

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}