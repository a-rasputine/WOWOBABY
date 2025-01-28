const yesBtn = document.querySelector(".yes-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the button is clicked
yesBtn.addEventListener("click", () => {
    // Change question text and gif
    question.innerHTML = "MEEEEEEEEEEEEEEEEEEEE";
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGNhdXh1b252b2F2b2U4cHRlNGkwMDZsajllaGF1cDJyb2p4NXl2YiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/G6N0pDDgDpLjUvNoyQ/giphy.gif";

    // Disable button after it's clicked
    yesBtn.disabled = true;
});
