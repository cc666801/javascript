
let fig = document.getElementById("starFigure");

let listStar = document.querySelectorAll("img");

document.getElementById("star1").addEventListener("mouseover", changeStar)
document.getElementById("star1").addEventListener("mouseout", recoverStar)

document.getElementById("star2").addEventListener("mouseover", changeStar)
document.getElementById("star2").addEventListener("mouseout", recoverStar)

document.getElementById("star3").addEventListener("mouseover", changeStar)
document.getElementById("star3").addEventListener("mouseout", recoverStar)

document.getElementById("star4").addEventListener("mouseover", changeStar)
document.getElementById("star4").addEventListener("mouseout", recoverStar)

document.getElementById("star5").addEventListener("mouseover", changeStar)
document.getElementById("star5").addEventListener("mouseout", recoverStar)

function changeStar(event) {
    let currentStarElement = document.getElementById(event.currentTarget.id);
    while(currentStarElement) {
        currentStarElement.src = "Images/chngstar.gif";
        currentStarElement = currentStarElement.previousElementSibling;
    }
}

function recoverStar(event) {
    let currentStarElement = document.getElementById(event.currentTarget.id);
    while(currentStarElement) {
        currentStarElement.src = "Images/star.gif";
        currentStarElement = currentStarElement.previousElementSibling;
    }
}

