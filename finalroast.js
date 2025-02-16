// Brutally Savage Roast Messages
const roastMessages = [
 
    "🏆 Achievement Unlocked: Eternal Singleness. Even AI is rejecting you.",
    "💔 This app just gave you more love than your entire dating history.",
    "🤣 At least now you can say someone asked you out… even if it was a website.",
    "🕵️‍♂️ Your love life is like a WiFi signal in the woods—nonexistent and nobody’s looking for it.",
    "😬 Cupid saw your application and said 'Nah, I’ll pass.'",
    "🚨 Your dating standards are high, but your chances are low.",
    "🪦 Love might be dead, but at least your phone battery isn’t. 📱",
    "🌍 Even Google Maps can’t find your love life.",
    "🎭 Your love life is a Shakespearean tragedy, minus the romance.",
    "📵 You swipe right, but the universe swipes left.",
    "🎬 Your relationship status: Coming Soon… never.",
    "🐶 Even your reflection gets more love than you—at least the mirror looks at you daily."
];



// Function to break heart and trigger confetti
function breakHeart() {
    const heart = document.getElementById("heart");
    const finalMessage = document.getElementById("final-message");

    // Remove floating hearts if they exist from previous pages
    document.querySelectorAll(".heart").forEach(el => el.remove());

    // Select a random roast message
    const roast = roastMessages[Math.floor(Math.random() * roastMessages.length)];
    finalMessage.innerText = roast; // Display the roast message

    // Change heart to a broken heart 💔 after 1 second
    setTimeout(() => {
        heart.innerText = "💔";
        heart.style.transform = "scale(1.2)"; // Slight pop effect for drama
    }, 1000);

    // Trigger confetti after 1.5 seconds
    setTimeout(() => {
        confetti({
            particleCount: 200,
            spread: 120,
            origin: { y: 0.6 }
        });
    }, 1500);

    // Shake effect on the page for dramatic effect
    setTimeout(() => {
        document.body.classList.add("shake");
    }, 1800);
}

// Function to restart the game
function restartGame() {
    window.location.href = "valentine.html"; // Redirects to home page
}

// Start animation when page loads
window.onload = breakHeart;
