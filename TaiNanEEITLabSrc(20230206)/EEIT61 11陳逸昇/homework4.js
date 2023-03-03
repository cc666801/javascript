// Create array to save 3 image
let pictureArray = [{ img: "Images/1676339879809.jpg" }, { img: "Images/1676827015355.jpg" }, { img: "Images/1677400120062.jpg" }];

// Create spanarray to save 3 dot(<span>)
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


// Change dot class to clicked when dot be clicked and change picture
function buttonClicked(event) {
    for (let i = 0; i < spansArray.length; i++) {
        spansArray[i].className = "dot"
    }
    event.currentTarget.className = "clicked";
    // Reset slide when dot be clicked
    window.clearInterval()
    currntSpan = spansArray.indexOf(event.currentTarget)
    let content = document.getElementById("content");
    content.firstElementChild.innerHTML = `<img src =${pictureArray[currntSpan].img}>`
}   

// Do slide every 3 seconds
window.setInterval(slide, 3000)

// First set count to 0, imply begin from image[0]
let count = 0;
function slide(event) {
    // Remove dot class clicked , set it class to dot 
    for (let i = 0; i < spansArray.length; i++) {
        spansArray[i].className = "dot"
        console.log(spansArray[i])
    }
    // Slide when count < 3 (img only 0, 1, 2)
    if (count < 3) {
        let content = document.getElementById("content");
        spansArray[count].className = "clicked"
        content.firstElementChild.innerHTML = `<img src =${pictureArray[count].img}>`
        count++
    // Let count to 0 if count == 3 (change to image[0])
    } else if (count == 3) {
        count = 0
        let content = document.getElementById("content");
        spansArray[count].className = "clicked"
        content.firstElementChild.innerHTML = `<img src =${pictureArray[count].img}>`
    }
}


