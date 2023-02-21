
document.getElementById("star1").addEventListener("mouseover", changeStar1)
document.getElementById("star1").addEventListener("mouseout", recoverStar1)

document.getElementById("star2").addEventListener("mouseover", changeStar2)
document.getElementById("star2").addEventListener("mouseout", recoverStar2)

document.getElementById("star3").addEventListener("mouseover", changeStar3)
document.getElementById("star3").addEventListener("mouseout", recoverStar3)

document.getElementById("star4").addEventListener("mouseover", changeStar4)
document.getElementById("star4").addEventListener("mouseout", recoverStar4)

document.getElementById("star5").addEventListener("mouseover", changeStar5)
document.getElementById("star5").addEventListener("mouseout", recoverStar5)

document.getElementById("score").addEventListener("click", score)
document.getElementById("score").addEventListener("dblclick", reset)



function changeStar1(event) {
    document.getElementById("star1").src = "Images/chngstar.gif"
}

function recoverStar1(event) {
    document.getElementById("star1").src="Images/star.gif"
}


function changeStar2(event) {
    changeStar1();
    document.getElementById("star2").src = "Images/chngstar.gif"
}

function recoverStar2(event) {
    recoverStar1();
    document.getElementById("star2").src="Images/star.gif"
}


function changeStar3(event) {
    changeStar2();
    document.getElementById("star3").src = "Images/chngstar.gif"
}

function recoverStar3(event) {
    recoverStar2();
    document.getElementById("star3").src="Images/star.gif"
}


function changeStar4(event) {
    changeStar3();
    document.getElementById("star4").src = "Images/chngstar.gif"
}

function recoverStar4(event) {
    recoverStar3();
    document.getElementById("star4").src="Images/star.gif"
}


function changeStar5(event) {
    changeStar4();
    document.getElementById("star5").src = "Images/chngstar.gif"
}

function recoverStar5(event) {
    recoverStar4();
    document.getElementById("star5").src="Images/star.gif"
}



function score(event) {
    
}


