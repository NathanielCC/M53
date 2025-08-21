const place = [
    "London",
    "Hong Kong",
    "Singapore",
    "Tokyo"
];

const description = [
    "London, the vibrant capital of England, is a bustling metropolis known for its rich history and diverse culture.",
    "Hong Kong, a bustling metropolis on the southern coast of China, is known for its striking skyline and vibrant urban life.",
    "Singapore, a vibrant city-state in Southeast Asia, is renowned for its stunning skyline and multicultural atmosphere.",
    "Tokyo, the bustling capital of Japan, is a vibrant metropolis that seamlessly blends tradition and innovation."
];

const icons = [
    "London.png",
    "Hong_Kong.png",
    "Singapore.png",
    "Tokyo.png"
];

const place_image = [
    "London_bg.png",
    "Hong_kong_bg.png",
    "Singapore_bg.png",
    "Tokyo_bg.png"
];

function getRandomNumber() {
    return Math.floor(Math.random() * 4);
}

let destNum = 1

const introCard = document.getElementById("intro-card")
const destCard = document.getElementById("destination-card")
const loadingCard = document.getElementById("loading-card")
const returnButton = document.getElementById("return-button")
const nextButton = document.getElementById("next-button")

introCard.style.opacity = "1";
destCard.style.opacity = "0";
loadingCard.style.opacity = "0";

let introClicked = false;

const cards = [introCard, destCard,loadingCard]

for (let i = 0; i < 3; i++) {
    cards[i].style.transition = "opacity 0.5s ease-in-out"
}

function toggleFadeInOut(card1,card2) {
    card1.style.opacity = '0'; // Start fade out
    setTimeout(() => {
        card1.style.display = 'none'; // Hide current div
        card2.style.display = 'flex'; // Show next div
        card2.style.opacity = '1'; // Fade in next div
    }, 500); // Match timeout with CSS transition duration
}

function loadingCardTransition(initialCard,finalCard) {
    toggleFadeInOut(initialCard,loadingCard)
    let dots = ''
    let count = 0
    loadingCard.innerHTML = `<h1>Loading<h1>`;
    const interval = setInterval(() => {
        loadingCard.innerHTML = `<h1>Loading${dots}<h1>`
        if (count < 6) { // 6 dots in total for 3 seconds
            dots += '.';
            count++;
        } else {
            dots = ''
            count = 0
        }
    }, 250)
    setTimeout(() => {
        clearInterval(interval)
        toggleFadeInOut(loadingCard, finalCard)
    }, 3000);
}

introCard.addEventListener('click',() => {
    destNum = getRandomNumber()
    // Added Day 3
    destCard.innerHTML = `
        <div id="destination-header">
            <h1>You got: ${place[destNum]}</h1>
            <img id="header_img" src="assets/${icons[destNum]}">
        </div>
        <div id = "main-pic">
            <img id = "pic" src = "assets/${place_image[destNum]}">
        </div>
        <p id="description-text">
            ${description[destNum]}
        </p>
    `
    loadingCardTransition(introCard,destCard)
    introClicked = true;
    if (introClicked) {
        nextButton.addEventListener('click',() => {
            destNum = getRandomNumber()
            destCard.innerHTML = `
                <div id="destination-header">
                    <h1>You got: ${place[destNum]}</h1>
                    <img id="header_img" src="assets/${icons[destNum]}">
                </div>
                <div id = "main-pic">
                    <img id = "pic" src = "assets/${place_image[destNum]}">
                </div>
                <p id="description-text">
                    ${description[destNum]}
                </p>
            `
            loadingCardTransition(destCard,destCard)
    })
}
})

returnButton.addEventListener('click', () => {
    toggleFadeInOut(destCard,introCard)
})


