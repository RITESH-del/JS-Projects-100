const secHand = document.querySelector(".secsHand");
const minHand = document.querySelector(".minsHand");
const hrsHand = document.querySelector(".hrsHand");

// thier is still a problem, for that u have to remove the transition function with js using if-else statement

function clockHand(){
    const date = new Date();

    // for seconds hand
    const secs = date.getSeconds();
    const secsDegree = ((secs/60) * 360) + 90;
    secHand.style.transform = `rotate(${secsDegree}deg)`;

    // for mins hand
    const mins = date.getMinutes();
    const minsDegree = (mins/60) * 360  + 90;
    minHand.style.transform = `rotate(${minsDegree}deg)`;

    // for hrs hand
    const hours = date.getHours();
    const hrsDegree = (hours/24) * 360  + 90;
    hrsHand.style.transform = `rotate(${hrsDegree}deg)`;

}


setInterval(clockHand, 1000); // all we have to do is to call a funciton inside of a setInterval function