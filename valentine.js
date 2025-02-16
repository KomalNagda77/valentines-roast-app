function createHearts() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.classList.add('heart');

    // Set random position and size
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random speed
    heart.style.fontSize = Math.random() * 20 + 20 + 'px'; // Random size

    document.body.appendChild(heart);

    // Remove heart after animation ends
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Generate hearts every 500ms
setInterval(createHearts, 500);

const yesButton = document.querySelector('.yes-btn');
const noButton = document.querySelector('.no-btn');

// Function to move the "No" button away when hovered
const moveNoButton = () => {
    let maxX = window.innerWidth - noButton.offsetWidth - 20;
    let maxY = window.innerHeight - noButton.offsetHeight - 20;

    let newX = Math.random() * maxX;
    let newY = Math.random() * maxY;

    noButton.style.position = "absolute";
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
};

// Redirect to the quiz page when "Yes" is clicked
yesButton.addEventListener('click', () => {
    window.location.assign('mystery-gift.html');
});

// When "No" is hovered → Moves away
noButton.addEventListener('mouseenter', moveNoButton);

function revealGift(gift){
    let message="";
    if(gift=='letter'){
        message="💌 Oops, no one wrote that for you.";
    }else if(gift=="hug"){
        message="🤗 Loading.. forever. Sorry, no hug for you.";
    }else if (gift=="surprise"){
        message="🪞 Here, date yourself."
    }

alert(message);

setTimeout(() => {
    window.location.href = 'finalroast.html';  // Redirect to the final roast page
}, 1500);
    
}
// Brutally Savage Roast Messages
// Brutally Savage Roast Messages
const roastMessages = [
    "🏆 Achievement Unlocked: Eternal Singleness. Even AI is rejecting you.",
    "💔 This app just gave you more love than your entire dating history.",
    "🤣 At least now you can say someone asked you out… even if it was a website.",
    "🕵️‍♂️ Your love life is like Bigfoot – lots of rumors, zero proof.",
    "😬 Cupid saw your application and said 'Nah, I’ll pass.'",
    "🚨 Your dating standards are high, but your chances are low.",
    "🪦 Love might be dead, but at least your phone battery isn’t. 📱",
    "🌍 Even Google Maps can’t find your love life.",
    "🎭 Your love life is a Shakespearean tragedy, minus the romance.",
    "📵 You swipe right, but the universe swipes left.",
    "🎬 Your relationship status: Coming Soon… never.",
    "🐶 Even your pet has more romantic prospects than you."
];

// Function to break heart and trigger confetti
function breakHeart() {
    const heart = document.getElementById("heart");
    const finalMessage = document.getElementById("final-message");

    // Select a random roast message
    const roast = roastMessages[Math.floor(Math.random() * roastMessages.length)];
    finalMessage.innerText = roast; // Display the roast message

    // Change heart to a broken heart 💔 after 1 second
    setTimeout(() => {
        heart.innerText = "💔";
    }, 1000);

    // Trigger confetti after 1.5 seconds
    setTimeout(() => {
        confetti({
            particleCount: 200,
            spread: 120,
            origin: { y: 0.6 }
        });
    }, 1000);

    // Remove floating hearts (Only if they exist from previous pages)
    document.querySelectorAll(".heart").forEach(el => el.remove());

    // Shake effect on the page for dramatic effect
    setTimeout(() => {
        document.body.classList.add("shake");
    }, 1800);
}

// Function to restart the game
function restartGame() {
    window.location.href = "index.html"; // Redirects to home page
}

// Start animation when page loads
window.onload = breakHeart;
;


