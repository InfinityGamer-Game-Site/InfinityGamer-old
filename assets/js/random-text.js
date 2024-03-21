// List of random texts
const randomTexts = [
    "it's not a bug it's a feature",
    "gabriel looks like a dog",
    "mitochondria is the powerhouse of the cell",
    "i forgor",
    "new update coming soon i think",
    "did you know? penguins can fly, but only on tuesdays",
    "did you know? if you lick a toad, you'll gain the ability to speak fluent French for exactly 24 hours",
    "did you know? the eiffel tower was originally constructed upside down, but they flipped it over at the last minute because it looked better that way",
    "did you know? if you stare directly at the sun for 10 seconds, you'll gain the ability to see into the future, but only for things that have already happened",
    "did you know? sharks are afraid of rubber ducks and will swim away as soon as they see one"
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