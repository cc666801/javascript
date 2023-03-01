let pictureArray = [{ img: "Images/1676339879809.jpg" }, { img: "Images/1676827015355.jpg" }, { img: "Images/1677400120062.jpg" }];


window.setInterval(slide, 3000)

console.log(document.querySelectorAll("span")[0].id)

function currentSlide(buttonCount) {
    let content = document.getElementById("#content");
    content.firstElementChild.innerHTML = `<img src =${pictureArray[buttonCount - 1].img}>`
    document.getElementById(`dot${buttonCount}`).className = "clicked"
}

let count = 0;
function slide(event) {
    if (count < 3) {
        let content = document.getElementById("content");
        content.firstElementChild.innerHTML = `<img src =${pictureArray[count].img}>`
        count++
    }else if(count == 3) {
        count=0
        let content = document.getElementById("content");
        content.firstElementChild.innerHTML = `<img src =${pictureArray[count].img}>`
    }
}