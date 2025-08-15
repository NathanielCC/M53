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

function loadingCardTransition() {
    introCard.style.opacity = "0"
    introCard.style.display = "none"
    loadingCard.style.display = "flex"
    loadingCard.style.opacity = "1"
    let dots = ''
    let count = 0
    const interval = setInterval(() => {
            if (count < 6) { // 6 dots in total for 3 seconds
                dots += '.';
                loadingCard.innerHTML = `<h1>Loading${dots}<h1>`
                count++;
            } else {
                dots = ''
                count = 0
            }
    }, 250)
    setTimeout(() => {
        loadingCard.style.display = "none"
        loadingCard.style.opacity = "0"
        destCard.style.display = "flex"
        destCard.style.opacity = "1"
    }, 3000);
}

const introCard = document.getElementById("intro-card")
const destCard = document.getElementById("destination-card")
const returnButton = document.getElementById("return-button")
const loadingCard = document.getElementById("loading-card")

introCard.style.opacity = "1";
destCard.style.opacity = "0";
loadingCard.style.opacity = "0";

returnButton.addEventListener('click', () => {
    destCard.style.opacity = "0"
    destCard.style.display = "none"
    introCard.style.display = "flex"
    introCard.style.opacity = "1"
})

introCard.addEventListener('click', () => {
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
    loadingCardTransition()
})


