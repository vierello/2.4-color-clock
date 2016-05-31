(function(){
  'use strict';

  var currentTime;
  var hoursDisplay = document.querySelector('.hours');
  var minutesDisplay = document.querySelector('.minutes');
  var secondsDisplay = document.querySelector('.seconds');
  var seconds;
  var minutes;
  var hours;
  var secToHex;
  var minToHex;
  var hourToHex;
  var bgColor = document.querySelector('.container');
  var percentOfSeconds;
  var line = document.querySelector('.line');

  function timeToHex() {
    secToHex = seconds.toString(16);
    minToHex = minutes.toString(16);
    hourToHex = hours.toString(16);
    // console.log(hourToHex, minToHex, secToHex);
  }

  function lineSize() {
    percentOfSeconds = (seconds/60) * 100;

    line.style.width = percentOfSeconds + '%';
  }

  function changeBackgroundColor() {
    bgColor.style.background = '-webkit-radial-gradient(center center, 1400px 1400px, #' + ("0" + hourToHex).slice(-2) + ("0" + minToHex).slice(-2) + ("0" + secToHex).slice(-2) +', lightgrey)';

    //  console.log('-webkit-radial-gradient(center center, 1400px 1400px, #' + hourToHex + minToHex + ("0" + secToHex).slice(-2) +', lightgrey)');
  }

  var isShowingHex = false;

  function displayHexValue() {
    isShowingHex = true;
    hoursDisplay.textContent = ("0" + hourToHex).slice(-2);
    minutesDisplay.textContent = ("0" + minToHex).slice(-2);
    secondsDisplay.textContent = ("0" + secToHex).slice(-2);
  }

  function displayTimeValue() {
    isShowingHex = false
    updateTime();
  }

  function currentSeconds() {
    seconds = currentTime.getSeconds();
    // console.log(seconds);
  }

  function currentMinutes() {
    minutes = currentTime.getMinutes();
    // console.log(minutes);
  }

  function currentHours() {
    hours = currentTime.getHours();
    // console.log(hours);
  }

  function displayTime(){
    hoursDisplay.textContent = ("0" + hours).slice(-2);
    minutesDisplay.textContent = ("0" + minutes).slice(-2);
    secondsDisplay.textContent = ("0" + seconds).slice(-2);
  }

  function updateTime() {
    currentTime = new Date();
    // console.log(currentTime);

    currentSeconds();
    currentMinutes();
    currentHours();
    timeToHex();
    changeBackgroundColor();
    lineSize();

    if (isShowingHex) {
      displayHexValue();
      return;
    }

    displayTime();
  };

  setInterval(updateTime, 1000);



}());
