let currentSlide = "surname"; // Stores the showing slide
const slideOrder = { // Stores slide's properties and order of slides
    "surname": {
        slideElement: document.getElementById("surname"),
        crumbElement: document.getElementById("crumb__surname"),
        next: "about",
        previous: null, // First slide
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
        next: null, // Final slide
        previous: "about",
    }
}
//  || Button listeners

// Right arrow function
const nextButton = document.getElementById("next");
nextButton.addEventListener("click", (event) => {
    update(slideOrder[currentSlide].next);
});

// Left arrow function
const backButton = document.getElementById("back");
backButton.addEventListener("click", (event) => { 
    update(slideOrder[currentSlide].previous);
});

// || Keyboard listener

//Keyboard navigation works only if slideOrder 'next'/'previous' property of currentSlide isn't null
document.addEventListener("keydown", (event) => {
    if (event.key == "ArrowRight" && slideOrder[currentSlide].next != null) {
        update(slideOrder[currentSlide].next);
    } else if (event.key == "ArrowLeft" && slideOrder[currentSlide].previous != null) {
        update(slideOrder[currentSlide].previous);
    }
});

// || Control slides

// Main function that calls 3 other functions to move carousel
const update = (nextSlide) => {
    disableCurrentPage(); // Disables showing slide
    currentSlide = nextSlide; // Moves current to following slide
    callNextSlide(); // Sets new slide
    callArrowBehaviour(); // Sets arrows
}

// 1. Disables current slide
const disableCurrentPage = () => {
    slideOrder[currentSlide].slideElement.classList.add("d-none");
    slideOrder[currentSlide].crumbElement.classList.remove("active");
}

// 2. Calls next slide
const callNextSlide = () => {
    slideOrder[currentSlide].slideElement.classList.remove("d-none");
    slideOrder[currentSlide].crumbElement.classList.add("active");
}
// 3. Controlls what arrows appear/disapper with slide
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

// || Automated loop

const changeSlide = () => {
    let nextSlide =  slideOrder[currentSlide].next;
    if (nextSlide == null) {
        nextSlide = "surname";
    }
    update(nextSlide);
}

// || Loop play/pause button

let slideInterval = null; // Placeholder for slide interval event
let playing = false; // Automated loop starts only upon click on play button

const loopButton = document.getElementById("loop"); // Gets element in html

loopButton.addEventListener("click", (event) => { // Event listener
    if (playing) {
        pauseSlideShow();
    } else {
        changeSlide(); // Upon click, goes to next slide
        playSlideShow(); // From next slide starts slideshow
    }
})
const playSlideShow = () => { // Execution: play
    loopButton.classList.remove("fa-play-circle"); // Removes play icon
    loopButton.classList.add("fa-pause-circle"); // Adds pause icon
    playing = true;
    slideInterval = setInterval(changeSlide, 3000); // Automated loop starts
}
const pauseSlideShow = () => { // Execution: pause
    loopButton.classList.remove("fa-pause-circle"); // Removes pause icon
    loopButton.classList.add("fa-play-circle"); // Adds play icon
    playing = false;
    clearInterval(slideInterval); // Automated loop stops
}

// || Move through navbar crumbs

const navLink = document.getElementById("navbar");
navLink.addEventListener("click", (event) => {
    update(event.target.id.slice(7));
});


// || Viewport height fix for mobile

//For details, see https://css-tricks.com/the-trick-to-viewport-units-on-mobile/

// Gets the viewport height and multiples it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;

// Then sets the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// Listens to the resize event
window.addEventListener('resize', () => {
    // Executes the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });