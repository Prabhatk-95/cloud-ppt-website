let currentSlide = 0;
const totalSlides = 30;
const slidesContainer = document.getElementById("slidesContainer");

for (let i = 1; i <= totalSlides; i++) {
    const img = document.createElement("img");
    img.src = `assets/slides/Slide${i}.png`; 
    img.classList.add("slide");
    if (i === 1) img.classList.add("active");
    slidesContainer.appendChild(img);
}

const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}
