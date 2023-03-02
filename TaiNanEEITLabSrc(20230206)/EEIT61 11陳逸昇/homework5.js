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


document.getElementById("idYear").addEventListener("change", selectYear)
document.getElementById("idMonth").addEventListener("change", selectMonth)
document.getElementById("idDay").addEventListener("change", selectDay)
document.getElementById("idDay").addEventListener("change", printCalendar)

function selectYear(event) {
    year = event.target.value
    addDay();
}

function selectMonth(event) {
    month = event.target.value
    addDay();
}

function selectDay(event) {
    day = event.target.value
}

function addDay() {
    document.getElementById("idDay").innerHTML = "";
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
    document.getElementById("dateUl").innerHTML = "<li>SUN</li><li>MON</li><li>TUE</li><li>WED</li><li>THR</li><li>FRI</li><li>SAT</li>"

    let dateMax = new Date(year, month, 0)
    let monthOfDay = dateMax.getDate();

    let date = new Date(year, month - 1, 1)
    let dayOfWeek = date.getDay();

    while (dayOfWeek > 0) {
        dayOfWeek--
        let dates = document.querySelectorAll("li");
        dates[dayOfWeek].innerHTML += `<br>`;
    }

    for (let i = 1; i <= monthOfDay; i++) {
        let date = new Date(year, month - 1, i)
        let dayOfWeek = date.getDay();
        let dates = document.querySelectorAll("li");
        dates[dayOfWeek].innerHTML += `<br><span class="spanNotChoosed">${i}</span>`;
    }

    let dates = document.querySelectorAll(".spanNotChoosed");

    for(let i = 0; i < dates.length; i++) {
        if(dates[i].innerHTML == day) {
            dates[i].className = "spanChoosed"
        }
    }

    document.getElementById("userDate").innerHTML = `Your choosed date is ${year}/${month}/${day} !`
    
    

}

