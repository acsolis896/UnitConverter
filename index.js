let count = 20

let lengthEl = document.getElementById("lengthMF")

console.log(lengthEl)

function lengthMF() {
    lengthEl.innerText = Math.round((count*3.28084)*1000)/1000
}
// Math.round((count*3.281)*100)/1000 OR count*3.28084
lengthMF()

function lengthFM() {
    document.getElementById("lengthFM").innerText = Math.round((count/3.28084)*1000)/1000
}
// Math.round((count/3.281)*100)/1000
lengthFM()

function volumeLG() {
    document.getElementById("volumeLG").innerText = Math.round((count/3.7854)*1000)/1000
}

volumeLG()

function volumeGL() {
    document.getElementById("volumeGL").innerText = Math.round((count*3.7854)*1000)/1000
}

volumeGL()

function massKP() {
    document.getElementById("massKP").innerText = Math.round((count*2.2046)*1000)/1000
}

massKP()

function massPK() {
    document.getElementById("massPK").innerText = Math.round((count/2.2046)*1000)/1000
}

massPK()