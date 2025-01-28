const yesBtn = document.querySelector(".yes-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const flowersContainer = document.querySelector(".flowers-container");

// Flower emoji that will appear on click
const flowerEmoji = "🌸";

// Change text, gif, and add flowers when the button is clicked
yesBtn.addEventListener("click", () => {
    // Change question text and gif
    question.innerHTML = "MEEEEEEEEEEEEEEEEEEEE";
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGNhdXh1b252b2F2b2U4cHRlNGkwMDZsajllaGF1cDJyb2p4NXl2YiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/G6N0pDDgDpLjUvNoyQ/giphy.gif";

    // Add a lot of flowers
    for (let i = 0; i < 30; i++) {
        const flower = document.createElement("div");
        flower.classList.add("flower");
        flower.textContent = flowerEmoji;
        flowersContainer.appendChild(flower);
    }

    // Disable button after it's clicked
    yesBtn.disabled = true;
});
