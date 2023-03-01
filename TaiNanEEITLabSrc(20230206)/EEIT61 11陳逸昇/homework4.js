let pictureArray = [{ img: "Images/1676339879809.jpg" }, { img: "Images/1676827015355.jpg" }, { img: "Images/1677400120062.jpg" }];


let spansArray = new Array();
document.addEventListener("DOMContentLoaded", function () {
    spans = document.querySelectorAll("span");
    for (let i = 0; i < spans.length; i++) {
        spansArray[i] = spans[i]
    }
    for (let i = 0; i < spansArray.length; i++) {
        spans[i].addEventListener("click", buttonClicked, true)
    }
});



function buttonClicked(event) {
    for (let i = 0; i < spansArray.length; i++) {
        spansArray[i].className = "dot"
    }
    event.currentTarget.className = "clicked";
    window.clearInterval()
    currntSpan = spansArray.indexOf(event.currentTarget)
    let content = document.getElementById("content");
    content.firstElementChild.innerHTML = `<img src =${pictureArray[currntSpan].img}>`
}   

window.setInterval(slide, 3000)

let count = 0;
function slide(event) {
    for (let i = 0; i < spansArray.length; i++) {
        spansArray[i].className = "dot"
        console.log(spansArray[i])
    }
    if (count < 3) {
        let content = document.getElementById("content");
        spansArray[count].className = "clicked"
        content.firstElementChild.innerHTML = `<img src =${pictureArray[count].img}>`
        count++
    } else if (count == 3) {
        count = 0
        let content = document.getElementById("content");
        spansArray[count].className = "clicked"
        content.firstElementChild.innerHTML = `<img src =${pictureArray[count].img}>`
    }
}


