// Gallery Main
const slider = document.querySelector('.slider-inner');
const progressBar = document.querySelector('.prog-bar-inner');

let sliderGrabbed = false;

slider.parentElement.addEventListener('scroll', (e) => {
    progressBar.style.width = `${getScrollPercentage()}%`
})

slider.addEventListener('mousedown', (e) => {
    sliderGrabbed = true;
    slider.style.cursor = 'grabbing';
})

slider.addEventListener('mouseup', (e) => {
    sliderGrabbed = false;
    slider.style.cursor = 'grab';
})

slider.addEventListener('mouseleave', (e) => {
    sliderGrabbed = false;
})

slider.addEventListener('mousemove', (e) => {
    if (sliderGrabbed) {
        slider.parentElement.scrollLeft -= e.movementX;
    }
})

slider.addEventListener('wheel', (e) => {
    e.preventDefault()
    slider.parentElement.scrollLeft += e.deltaY;
})

function getScrollPercentage() {
    return ((slider.parentElement.scrollLeft / (slider.parentElement.scrollWidth - slider.parentElement.clientWidth)) * 100);
}

// Dark & Light Mode Toggle
const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
toggle.onclick = function () {
    toggle.classList.toggle('active')
    body.classList.toggle('active')
}

// Menu Toggle
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const closeNav = document.querySelector(".close");


navToggle.addEventListener("click", () => {
    navShow();
});

closeNav.addEventListener("click", () => {
    hideNav();
});


function navShow() {
    nav.style.transition = "all 0.3s ease 0.5s";
    nav.classList.add("open")
}

function hideNav() {
    nav.style.transition = "all 0.3s ease";
    nav.classList.remove("open")
}