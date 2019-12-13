let currentSlide = "surname";
const slideOrder = {
    "surname": {
        docElement: document.getElementById("surname"),
        next: "about",
        previous: "why",
    },
    "about": {
        docElement: document.getElementById("about"),
        next: "why",
        previous: "surname",
    },
    "why": {
        docElement: document.getElementById("why"),
        next: "surname",
        previous: "about",
    }
}

const nextButton = document.getElementById("next");
nextButton.addEventListener("click", (event) => {
    slideOrder[currentSlide].docElement.classList.add("d-none");
    currentSlide = slideOrder[currentSlide].next;
    slideOrder[currentSlide].docElement.classList.remove("d-none");
});

const backButton = document.getElementById("back");
backButton.addEventListener("click", (event) => {
    slideOrder[currentSlide].docElement.classList.add("d-none");
    currentSlide = slideOrder[currentSlide].previous;
    slideOrder[currentSlide].docElement.classList.remove("d-none");
});