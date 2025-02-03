let t = document.getElementById("time");

function setTime(){

    const d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();

    if(hours < 10){
        hours = '0' + hours;
    }
    if(minutes < 10){
        minutes = '0' + minutes;
    }
    if(seconds < 10){
        seconds = '0' + seconds;
    }

    t.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(setTime, 1000);