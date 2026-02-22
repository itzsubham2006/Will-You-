const question = document.getElementById("question");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const music = document.getElementById("bgMusic");

let name = prompt("Enter your name 💕");
question.innerText = `${name}, will you be my Valentine? 💖`;

let noClickCount = 0;

const messages = [
    "Are you sure? 🥺",
    "Really sure? 😢",
    "Think again 💔",
    "Please reconsider 😭",
    "Don't break my heart 💕",
    "I will cry 😭",
    "Last chance 😔",
    "Still no?? 🥲"
];


document.body.addEventListener("click", () => {
    music.play();
}, { once: true });

noBtn.addEventListener("click", () => {

    if (noClickCount < messages.length) {
        question.innerText = messages[noClickCount];
        noClickCount++;
    }

    const randomX = Math.floor(Math.random() * 300) - 150;
    const randomY = Math.floor(Math.random() * 300) - 150;

    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;

    yesBtn.style.transform = `scale(${1 + noClickCount * 0.2})`;
});

yesBtn.addEventListener("click", () => {

    question.innerHTML = `Yayyyyy ${name}!!! 💖💖💖<br>You made me the happiest person 🥰`;

    document.querySelector(".buttons").style.display = "none";

    document.body.style.background = "linear-gradient(135deg, #ff758c, #ff7eb3)";

    launchConfetti();
});


function launchConfetti() {
    confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 }
    });
}


setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 10) + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);

}, 500);