// List of random texts
const randomTexts = [
    "It's not a bug! It's a feature! I swear!",
    "Gabriel looks like a dog"
];

// Function to generate a random number
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

// Function to display random text on page load
function displayRandomText() {
    const randomIndex = getRandomNumber(randomTexts.length);
    const randomText = randomTexts[randomIndex];
    const randomTextElement = document.getElementById("random-text");
    randomTextElement.textContent = randomText;
}

// Display random text on page load
window.addEventListener("load", displayRandomText);

//Created by ChatGPT