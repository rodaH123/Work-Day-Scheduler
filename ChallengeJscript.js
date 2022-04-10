$(document).ready(function () {
    
    //Moment.js code for current date and time
    let NowMoment = moment().format("MMMM Do YYYY");
    let displayDate = document.getElementById("currentDay");

    displayDate.innerHTML = NowMoment;
    let currentHour = moment().format("HH");
}

