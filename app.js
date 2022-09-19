const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

// Buttons

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

// Counter

let counter = 1;
const size = carouselImages[0].clientWidth; // orjinal width verecek

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; // ilk fotodan başlamamızı sağlıyo

// Button Listeners

nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return; // çok hızlı next tuşuna basınca foto kaybolmasını engeller
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return; // çok hızlı prev tuşuna basınca foto kaybolmasını engeller
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

// Next ya da prev butonlarına basınca infinite şekilde foto gelmesini sağladık.

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none"; // Bunu silersek sürekli sola gitmez, fotolar bitince en başa döner, kötü efekt olur.
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none"; // Bunu silersek sürekli sola gitmez, fotolar bitince en başa döner, kötü efekt olur.
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});
