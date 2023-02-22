
let listStar = document.querySelectorAll("img");

let arrayStar = new Array();

// Add listStar to array
for (let i = 0; i < listStar.length; i++) {
    arrayStar[i] = document.getElementById(listStar[i].id)
}

reset();

// for (let i = 0; i < arrayStar.length; i++) {
//     arrayStar[i].addEventListener("mouseover", changeStar)
//     arrayStar[i].addEventListener("mouseout", recoverStar)
//     arrayStar[i].addEventListener("click", score)
//     arrayStar[i].addEventListener("dblclick", reset)
// }

function changeStar(event) {
    // Get currentTarget and set Sibling before currentTarget change to chngstar.gif
    let currentStarElement = document.getElementById(event.currentTarget.id);
    while (currentStarElement) {
        currentStarElement.src = "Images/chngstar.gif";
        currentStarElement = currentStarElement.previousElementSibling;
    }
    // Make figcaption1.text float
    document.getElementById("figcaption1").innerHTML = `單擊星星可評分, 雙擊星星重置<br>
    評分為.... ${arrayStar.indexOf(document.getElementById(event.currentTarget.id))+1}`
}

function recoverStar(event) {
    // Get currentTarget and set Sibling before currentTarget change to star.gif
    let currentStarElement = document.getElementById(event.currentTarget.id);
    while (currentStarElement) {
        currentStarElement.src = "Images/star.gif";
        currentStarElement = currentStarElement.previousElementSibling;
    }
}

function score(event) {
    // Remove EventListener from star1 to star5 when event click occur
    for (let i = 0; i < arrayStar.length; i++) {
        arrayStar[i].removeEventListener("mouseover", changeStar);
        arrayStar[i].removeEventListener("mouseout", recoverStar);
    }
    // Make figcaption1.text to score
    document.getElementById("figcaption1").innerHTML = `你的評分為... ${arrayStar.indexOf(document.getElementById(event.currentTarget.id))+1}`
}


function reset(event) {
    // addEventListener to star1 to star5
    for (let i = 0; i < arrayStar.length; i++) {
        // Change star to black and white
        arrayStar[i].src = "Images/star.gif";
        arrayStar[i].addEventListener("mouseover", changeStar)
        arrayStar[i].addEventListener("mouseout", recoverStar)
        arrayStar[i].addEventListener("click", score)
        arrayStar[i].addEventListener("dblclick", reset)
    }
    // Make figcaption1.text to begin
    document.getElementById("figcaption1").innerHTML = `單擊星星可評分, 雙擊星星重置<br>
    評分為.... 0`
}
