const destinations = [
    ["London",
    "London, the vibrant capital of England, is a bustling metropolis known for its rich history and diverse culture.",
    "London.png",
    "London_bg.png"],
    ["Hong Kong",
    "Hong Kong, a bustling metropolis on the southern coast of China, is known for its striking skyline and vibrant urban life. ",
    "Hong_Kong.png",
    "Hong_kong_bg.png"
    ],
    ["Singapore",
    "Singapore, a vibrant city-state in Southeast Asia, is renowned for its stunning skyline and multicultural atmosphere. ",
    "Singapore.png",
    "Singapore_bg.png"
    ],
    ["Tokyo",
    "Tokyo, the bustling capital of Japan, is a vibrant metropolis that seamlessly blends tradition and innovation. ",
    "Tokyo.png",
    "Tokyo_bg.png"
    ]
]

const travelCard = document.getElementById("travel-card")
travelCard.addEventListener('click', function() {
    const destCard = document.getElementById("destination-card")
    console.log(destCard)
    const isDestCardShowing = destCard.style.display
    const introCard = document.getElementById("intro-card")
    if (isDestCardShowing== "none") {
        destCard.style.display = "flex"
        introCard.style.display = "none"
    }
})

/* Day 1:
const travelCard = document.getElementById("travel-card")
travelCard.addEventListener('click', function() {

        destCard.style.display = "flex"
        introCard.style.display = "none"
    }
})

const goBackButton= document.getElementById("go-back-button")
travelCard.addEventListener('click', function() {

        destCard.style.display = "flex"
        introCard.style.display = "none"
    }
})
*/

function getRandomNumber() {}

function updateDestCard () {

}