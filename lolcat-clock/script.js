var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM


var updateClock = function () {
    var lolcatImage = document.getElementById("lolcat");

    var image = "img/normal.jpg";

    var timeEventJS = document.getElementById("timeEvent");

    if (time == partyTime){
        messageText = "IZ PARTEE TIME!!";
        image = "img/party.jpg";
    } else if (time == napTime) {
        messageText = "IZ NAP TIME...";
        image = "img/nap.jpg";
    } else if (time == lunchTime) {
        messageText = "IZ NOM NOM NOM TIME!!";
        image = "img/lunch.jpg";
    } else if (time == wakeupTime) {
        messageText = "IZ TIME TO GETTUP.";
        image = "img/wake-up.jpg";
    } else if (time < noon) {
        messageText = "Good morning!";
        image = "img/normal.jpg";
    } else if (time > evening) {
        messageText = "Good Evening!";
        image = "img/normal.jpg";
    } else {
        messageText = "Good afternoon!";
        image = "img/normal.jpg";
    }

timeEventJS.innerText = messageText;
lolcatImage.src = image;

var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
    // Set hours 
    if (hours >= noon) 
    { meridian = "PM"; }  
    if (hours > noon) 
    { hours = hours - 12; }
    // Set Minutes
    if (minutes < 10)
    { minutes = "0" + minutes; }
    // Set Seconds
    if (seconds < 10)
    { seconds = "0" + seconds; }
    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
    clock.innerText = clockTime;
};
showCurrentTime(); 
};

updateClock();

var oneSecond = 1000;
setInterval(updateClock, oneSecond);

var isPartyTime = false;
var partyTimeButton = document.getElementById("partyTimeButton");
var partyEvent = function() { 
   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
      partyTimeButton.innerText = "Party over :(";
      partyTimeButton.style.backgroundColor = "#222";
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
      partyTimeButton.innerText = "PARTY TIME!";
      partyTimeButton.style.backgroundColor = "#0A8DAB";
   }
};

partyTimeButton.addEventListener("click", partyEvent);

// ADDED BELOW `var partyTimeButton`
var napTimeSelector = document.getElementById("napTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
 
//ADDED BELOW `var partyEvent` function
var lunchEvent = function() {
    lunchTime = lunchTimeSelector.value;
};
 
var wakeUpEvent = function() {
    wakeupTime = wakeUpTimeSelector.value;
};
 
var napEvent = function() {
    napTime = napTimeSelector.value;
};
 
//ADDED BELOW `partyTimeButton` event listener
napTimeSelector.addEventListener('change', napEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);