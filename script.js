
const question = document.getElementById("question");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const music = document.getElementById("bgMusic");


let name = prompt("Enter your name 💕") || "Cutie";
question.innerText = `${name}, will you be my Valentine? 💖`;

let noClickCount = 0;

const messages = [
    "Are you sure? 🥺",
    "Really sure? 😢",
    "Think again 💔",
    "Arreeee yarr, sachiii?💔",
    "Muchhiiiii...??🥺🥺🥺",
    "Please maan jaooo..😭",
    "Piliiitttzzzzz 🥺🥺",
    "I will cry 😭",
    "Last chance 😔",
    "Pleaseeeee 🥺",
    "Kitni gandi ldki ha🥺🥺",
    "Still no?? 🥲",
    "Maaann jaooo na😭😖",
    "Babbyyyyyyy..😭😭😭",
    "Noo.. you are mine..😖",
    "Hihihihiiii..😁"
];


document.body.addEventListener("click", () => {
    if (music) music.play().catch(() => {});
}, { once: true });



noBtn.addEventListener("click", () => {

    if (noClickCount < messages.length) {
        question.innerText = messages[noClickCount];
    }

    noClickCount++;


    if (noClickCount === 3) {
        document.getElementById("loveLetter").style.display = "flex";
    }

   
    const randomX = Math.floor(Math.random() * 300) - 150;
    const randomY = Math.floor(Math.random() * 300) - 150;

    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;

   
    yesBtn.style.transform = `scale(${1 + noClickCount * 0.2})`;
});


yesBtn.addEventListener("click", () => {

    question.innerHTML = `
        💖 YAYYYYY ${name}!!! 💖<br><br>
        Thank you soo much.. You just made me the happiest person alive 🥰<br>
        Loveee youuuu...🤗💞
    `;

    document.querySelector(".buttons").style.display = "none";
    document.body.style.background = "linear-gradient(135deg, #ff758c, #ff7eb3)";

    launchConfetti();
    addTeddy();
});



function launchConfetti() {
    if (typeof confetti === "function") {
        confetti({
            particleCount: 200,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
}


function addTeddy() {
    const teddy = document.createElement("div");
    teddy.innerHTML = "🧸💖";
    teddy.style.fontSize = "70px";
    teddy.style.marginTop = "20px";
    document.querySelector(".container").appendChild(teddy);
}



function closeLetter() {
    document.getElementById("loveLetter").style.display = "none";
}



document.addEventListener("mousemove", (e) => {
    const heart = document.createElement("div");
    heart.classList.add("trail-heart");
    heart.innerText = "💗";
    heart.style.left = e.pageX + "px";
    heart.style.top = e.pageY + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1000);
});


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

}, 600);