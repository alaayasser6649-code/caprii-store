// ===============================
// CAPRII Luxury Accessories
// script.js
// ===============================

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// Reveal Animation
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll('.product,.about,.contact').forEach((el) => {
    observer.observe(el);
});


// Header Shadow
window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

});


// Shop Button
const shopBtn = document.querySelector(".shop-btn");

if (shopBtn) {

    shopBtn.addEventListener("click", () => {

        document.querySelector("#products").scrollIntoView({
            behavior: "smooth"
        });

    });

}
