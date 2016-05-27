alert ('this is working');


(function(){
  'use strict';

  var currentTime;
  // var currentHours = currentTime.getHours();
  // var currentMinutes = currentTime.getMinutes();
  // var currentSeconds = currentTime.getSeconds();

  function updateTime() {
    currentTime = new Date();

    }

  updateTime(currentTime);

  console.log(currentTime);

}());
