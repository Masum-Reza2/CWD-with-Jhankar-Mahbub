let countUpDown = document.getElementById('countUpDown');
let count = countUpDown.innerText;
count = Number.parseFloat(count);


let timer1;

document.getElementById('startBtn').addEventListener('click', (()=>{
        timer1 = setInterval(() => {
        countUpDown.innerText = ++count
    }, 1000);
}))

document.getElementById('stopBtn').addEventListener('click', (()=>{
    clearInterval(timer1);
}))

document.getElementById('resetBtn').addEventListener('click', (()=>{
    countUpDown.innerText = 0;
    count = 0;
}))