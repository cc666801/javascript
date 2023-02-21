// 作業1 
// method1
document.write('<table>')
document.write('<tr>')
for (let i = 1; i < 10; i++) {
    
    document.write('<td>')
    for (let j = 1; j < 10; j++) {
        let newTd = document.write(`${i}*${j}=${i * j}<br>`)
    }
    document.write('</td>')
}
document.write('</tr>')
document.write('</table>')


// method2
document.write('<table>')

for (let i = 1; i < 10; i++) {
    document.write('<tr>')
    
    for (let j = 1; j < 10; j++) {
        document.write('<td>')
        let newTd = document.write(`${j}*${i}=${i * j}<br>`)
        document.write('</td>')
    }
}
document.write('</tr>')
document.write('</table>')

