function seeTime() {

    let date = new Date();
    let Hours = date.getHours();
    let Minutes = date.getMinutes();
    let Seconds = date.getSeconds();
    let System = ""
    if (Hours >= 12) {
        System = "p. m."
    }else{
        System = "a. m."
    }

    Hours = addZero(Hours);
    Minutes = addZero(Minutes);
    Seconds = addZero(Seconds);


    let Time = Hours + ":" + Minutes + ":" + Seconds + " "+ System;
    document.getElementById("time").innerHTML = Time;
}

function addZero(number) {
    return (number < 10 ? '0' : '') + number;
}

setInterval(seeTime, 1000);
