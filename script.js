/* ==========================================
   GM SHORTHAND & TYPING CENTRE
   SCRIPT - PART 1
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       LOADER
    ========================== */

    window.addEventListener("load", () => {
        const loader = document.querySelector(".loader");

        if (loader) {
            loader.style.opacity = "0";

            setTimeout(() => {
                loader.style.display = "none";
            }, 400);
        }
    });

    /* ==========================
       STICKY HEADER
    ========================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {
    header.classList.add("scrolled");
} else {
    header.classList.remove("scrolled");
}

    });

    /* ==========================
       SMOOTH SCROLL
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /* ==========================
       BACK TO TOP
    ========================== */

    const backBtn = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {

        if (!backBtn) return;

        if (window.scrollY > 500) {

            backBtn.style.opacity = "1";
            backBtn.style.visibility = "visible";

        } else {

            backBtn.style.opacity = "0";
            backBtn.style.visibility = "hidden";

        }

    });

    if (backBtn) {

        backBtn.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

});

/* ==========================================
   SCRIPT - PART 2
   COUNTERS + SCROLL REVEAL
========================================== */

/* ==========================
   ANIMATED COUNTERS
========================== */

const counters = document.querySelectorAll(".stat-item h2");

const counterObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const originalText = counter.innerText;

if (originalText === "24x7" || originalText === "24×7") {
    observer.unobserve(counter);
    return;
}

const target = parseInt(originalText.replace(/\D/g, ""));
const suffix = originalText.replace(/[0-9]/g, "");

        let current = 0;

        const increment = Math.max(1, Math.ceil(target / 80));

        const updateCounter = () => {

            current += increment;

            if (current >= target) {

                counter.innerText = target + suffix;

            } else {

                counter.innerText = current + suffix;

                requestAnimationFrame(updateCounter);

            }

        };

        updateCounter();

        observer.unobserve(counter);

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});


/* ==========================
   SCROLL REVEAL
========================== */

const revealElements = document.querySelectorAll(

    ".course-card, .why-card, .testimonial-card, .contact-card, .stat-item, .feature-card"

);

revealElements.forEach(el => {

    el.style.opacity = "0";

    el.style.transform = "translateY(40px)";

    el.style.transition = "all .7s ease";

});

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.15

});

revealElements.forEach(el => revealObserver.observe(el));


/* ==========================
   FLOATING WHATSAPP
========================== */

const whatsapp = document.querySelector(".floating-whatsapp");

if (whatsapp) {

    setInterval(() => {

        whatsapp.animate([

            { transform: "scale(1)" },

            { transform: "scale(1.12)" },

            { transform: "scale(1)" }

        ], {

            duration: 900,

            easing: "ease"

        });

    }, 3500);

}

/* ==========================================
   GOOGLE REVIEW SLIDER
========================================== */

const reviewCards = document.querySelectorAll(".review-card");
const reviewDots = document.querySelectorAll(".review-dot");

const prevReview = document.querySelector(".prev-review");
const nextReview = document.querySelector(".next-review");

let currentReview = 0;
let reviewInterval;

function showReview(index){

    reviewCards.forEach(card=>card.classList.remove("active"));

    reviewDots.forEach(dot=>dot.classList.remove("active"));

    reviewCards[index].classList.add("active");

    reviewDots[index].classList.add("active");

}

function nextSlide(){

    currentReview++;

    if(currentReview>=reviewCards.length){

        currentReview=0;

    }

    showReview(currentReview);

}

function prevSlide(){

    currentReview--;

    if(currentReview<0){

        currentReview=reviewCards.length-1;

    }

    showReview(currentReview);

}

if(nextReview){

    nextReview.addEventListener("click",()=>{

        nextSlide();

        restartSlider();

    });

}

if(prevReview){

    prevReview.addEventListener("click",()=>{

        prevSlide();

        restartSlider();

    });

}

reviewDots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        currentReview=index;

        showReview(currentReview);

        restartSlider();

    });

});

function startSlider(){

    reviewInterval=setInterval(nextSlide,5000);

}

function restartSlider(){

    clearInterval(reviewInterval);

    startSlider();

}

const slider=document.querySelector(".review-slider");

if(slider){

    slider.addEventListener("mouseenter",()=>{

        clearInterval(reviewInterval);

    });

    slider.addEventListener("mouseleave",()=>{

        startSlider();

    });

}

showReview(currentReview);

startSlider();

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

