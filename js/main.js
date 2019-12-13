let currentSlide = "surname";
const slideOrder = {
    "surname": {
        slideElement: document.getElementById("surname"),
        crumbElement: document.getElementById("crumb__home"),
        next: "about",
        previous: null,
    },
    "about": {
        slideElement: document.getElementById("about"),
        crumbElement: document.getElementById("crumb__about"),
        next: "why",
        previous: "surname",
    },
    "why": {
        slideElement: document.getElementById("why"),
        crumbElement: document.getElementById("crumb__why"),
        next: null,
        previous: "about",
    }
}

const nextButton = document.getElementById("next");
nextButton.addEventListener("click", (event) => {
    update(slideOrder[currentSlide].next);
    
});

const backButton = document.getElementById("back");
backButton.addEventListener("click", (event) => { 
    update(slideOrder[currentSlide].previous);
    
});

const update = (nextSlide) => {
    disableCurrentPage();
    currentSlide = nextSlide;
    callNextSlide();
    callArrowBehaviour();
}

const disableCurrentPage = () => {
    slideOrder[currentSlide].slideElement.classList.add("d-none");
    slideOrder[currentSlide].crumbElement.classList.remove("active");
}

const callNextSlide = () => {
    slideOrder[currentSlide].slideElement.classList.remove("d-none");
    slideOrder[currentSlide].crumbElement.classList.add("active");
}

const callArrowBehaviour = () => {
    if ( !slideOrder[currentSlide].next ) {
        nextButton.classList.add("d-none");
    } else {
        nextButton.classList.remove("d-none");
    }
    if ( !slideOrder[currentSlide].previous ) {
        backButton.classList.add("d-none");
    } else {
        backButton.classList.remove("d-none");
    }
}
