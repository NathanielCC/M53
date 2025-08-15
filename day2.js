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

let destNum = 1

const introCard = document.getElementById("intro-card")
const destCard = document.getElementById("destination-card")
const returnButton = document.getElementById("return-button")

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
    introCard.style.opacity = "0"
    introCard.style.display = "none"
    destCard.style.display = "flex"
    destCard.style.opacity = "1"
})


