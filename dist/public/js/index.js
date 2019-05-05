"use strict";

$(document).ready(function () {
  setInterval(function () {
    var start = new Date();
    $('#current_time').text('Current time: ' + start.toLocaleTimeString());
  }, 1000);
  $('#fetch_api').click(function () {
    window.location = 'technologies/';
  });
});