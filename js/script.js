let currentSlide = 0;
const totalSlides = 30;
const slidesContainer = document.getElementById("slidesContainer");
const slideNumberText = document.getElementById("slideNumber");
const progressBar = document.getElementById("progressBar");

// 1. Dynamic Slide Generation
function loadSlides() {
    for (let i = 1; i <= totalSlides; i++) {
        const img = document.createElement("img");
        // Matches your naming: Slide1.png, Slide2.png...
        img.src = `assets/slides/Slide${i}.png`; 
        img.classList.add("slide");
        img.alt = `Cloud Computing Slide ${i}`;
        img.loading = "lazy"; // Cloud Optimization: Lazy loading
        if (i === 1) img.classList.add("active");
        slidesContainer.appendChild(img);
    }
    document.getElementById("loader").style.display = "none";
}

const slides = () => document.querySelectorAll(".slide");

function updateUI(index) {
    const allSlides = slides();
    allSlides.forEach(slide => slide.classList.remove("active"));
    allSlides[index].classList.add("active");
    
    // Update Slide Text
    slideNumberText.innerText = `Slide ${index + 1} of ${totalSlides}`;
    
    // Update Progress Bar
    const progressPercent = ((index + 1) / totalSlides) * 100;
    progressBar.style.width = `${progressPercent}%`;
}

function nextSlide() {
    const allSlides = slides();
    currentSlide = (currentSlide + 1) % allSlides.length;
    updateUI(currentSlide);
}

function prevSlide() {
    const allSlides = slides();
    currentSlide = (currentSlide - 1 + allSlides.length) % allSlides.length;
    updateUI(currentSlide);
}

// 2. Keyboard Navigation (Makes it feel like a real PPT)
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") prevSlide();
});

// 3. Fullscreen Feature
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

// Initialize
window.onload = loadSlides;