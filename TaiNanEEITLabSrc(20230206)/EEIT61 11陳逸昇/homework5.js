// To save select value 
let year;
let month;
let day;

// document.createDocumentFragment() is used to save child element temporarily
let docFrag = document.createDocumentFragment();

for (let i = 2010; i <= 2025; i++) {   //新增年
    // create 1970 - 2022
    let opt = document.createElement("option");
    opt.setAttribute("value", i);
    let optTxt = document.createTextNode(i);
    opt.appendChild(optTxt);
    //opt.value = i;
    //opt.innerHTML = i;
    docFrag.appendChild(opt);
}
document.getElementById("idYear").appendChild(docFrag)


for (let i = 1; i <= 12; i++) {   //新增月 
    // create 1-12
    let opt = document.createElement("option");
    opt.setAttribute("value", i);
    let optTxt = document.createTextNode(i);
    opt.appendChild(optTxt);
    //opt.value = i;
    //opt.innerHTML = i;
    docFrag.appendChild(opt);
}
document.getElementById("idMonth").appendChild(docFrag)

// Save value
document.getElementById("idYear").addEventListener("change", selectYear)
document.getElementById("idMonth").addEventListener("change", selectMonth)
document.getElementById("idDay").addEventListener("change", selectDay)
// Print calendar when day be changed
document.getElementById("idDay").addEventListener("change", printCalendar)

// Save idYear to variable year
function selectYear(event) {
    year = event.target.value
    addDay();
}

// Save idMonth to variable month
function selectMonth(event) {
    month = event.target.value
    addDay();
}

// Save idDay to variable day
function selectDay(event) {
    day = event.target.value
}

function addDay() {
    document.getElementById("idDay").innerHTML = "";
    // Ex (2000, 2, 0) 2月的最後一天
    let date = new Date(year, month, 0)
    let monthOfDay = date.getDate();
    for (let i = 1; i <= monthOfDay; i++) {   //新增日
        // create 1 - monthOfDay
        let opt = document.createElement("option");
        opt.setAttribute("value", i);
        let optTxt = document.createTextNode(i);
        opt.appendChild(optTxt);
        //opt.value = i;
        //opt.innerHTML = i;
        docFrag.appendChild(opt);
        console.log(opt)
    }
    document.getElementById("idDay").appendChild(docFrag)
}

function printCalendar(event) {
    // Reset calendar when new calendar be printed
    document.getElementById("dateUl").innerHTML = "<li>SUN</li><li>MON</li><li>TUE</li><li>WED</li><li>THR</li><li>FRI</li><li>SAT</li>"

    // Get the last day in the month and year
    let dateMax = new Date(year, month, 0)
    let monthOfDay = dateMax.getDate();

    // Get the first day in the month and year
    let date = new Date(year, month - 1, 1)
    // getDay() 得到禮拜幾
    let dayOfWeek = date.getDay();

    // 如果當月1號不是 Sunday 時要 Add <br> 
    while (dayOfWeek > 0) {
        dayOfWeek--
        let dates = document.querySelectorAll("li");
        dates[dayOfWeek].innerHTML += `<br>`;
    }

    // 把日期一一寫入 dateUl 裡的li
    for (let i = 1; i <= monthOfDay; i++) {
        let date = new Date(year, month - 1, i)
        let dayOfWeek = date.getDay();
        let dates = document.querySelectorAll("li");
        dates[dayOfWeek].innerHTML += `<br><span class="spanNotChoosed">${i}</span>`;
    }

    // 選出所有日期 Ex (1-31)
    let dates = document.querySelectorAll(".spanNotChoosed");

    // 當 Day 跟日期的值一樣時, change class to spanChoosed
    for(let i = 0; i < dates.length; i++) {
        if(dates[i].innerHTML == day) {
            dates[i].className = "spanChoosed"
        }
    }

    // Add message to userDate in div board
    document.getElementById("userDate").innerHTML = `Your choosed date is ${year}/${month}/${day} !`

}

