let imageElement;
let slideNumberElement;
let backButton;
let nextButton;
let slideNumber = 0;


window.onload = function() {
    imageElement = document.getElementById("image");
    slideNumberElement = document.getElementById("slide-number");
    backButton = document.getElementById("back");
    nextButton = document.getElementById("next");

    backButton.onclick = back;
    nextButton.onclick = next;
}

function next() {
    if (slideNumber <= 4) { 
        slideNumber = slideNumber + 1;
        let filePath = `./resources/pic-${slideNumber}.jpg`;
        imageElement.src = filePath;
    
        slideNumberElement.textContent = `Slide ${slideNumber + 1}/6`;
    }
}

function back() {
    if (slideNumber >= 1) {
        slideNumber = slideNumber - 1;
        let filePath = `./resources/pic-${slideNumber}.jpg`;
        imageElement.src = filePath

        slideNumberElement.textContent = `Slide ${slideNumber + 1}/6`;
    }
}