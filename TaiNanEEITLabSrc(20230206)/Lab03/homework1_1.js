let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);


// Adding the entire table to the body tag
document.getElementById('body').appendChild(table);

// Creating and adding data to first row of the table
let row_1 = document.createElement('tr');

let heading_1 = document.createElement('th');
heading_1.innerHTML = "N1";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "N2";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "N3";
let heading_4 = document.createElement('th');
heading_4.innerHTML = "N4";
let heading_5 = document.createElement('th');
heading_5.innerHTML = "N5";
let heading_6 = document.createElement('th');
heading_6.innerHTML = "N6";
let heading_7 = document.createElement('th');
heading_7.innerHTML = "N7";
let heading_8 = document.createElement('th');
heading_8.innerHTML = "N8";
let heading_9 = document.createElement('th');
heading_9.innerHTML = "N9";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
row_1.appendChild(heading_5);
row_1.appendChild(heading_6);
row_1.appendChild(heading_7);
row_1.appendChild(heading_8);
row_1.appendChild(heading_9);
thead.appendChild(row_1);


let row_2 = document.createElement('tr');



for (let i = 1; i < 10; i++) {
    let td = document.createElement('td');
    for (let j = 1; j < 10; j++) {
        td.append(`${i}*${j}=${i * j}\n`);  
    }
    row_2.appendChild(td);
}


tbody.appendChild(row_2);
table.appendChild(tbody);



