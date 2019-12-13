console.log("ok");

const slideOne = document.getElementById("surname");

const slideTwo = document.getElementById("about");

const slideThree = document.getElementById("why");

const nextButton = document.getElementById("next");
nextButton.addEventListener("click", (event) => {
    console.log("deu");
    slideOne.classList.add("d-none");
    console.log("deu");
    slideTwo.classList.remove("d-none");
})
