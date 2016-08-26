$(document).ready(function(){
  var os = window.navigator.userAgent.match(/\(([^)]+)\)/);
  $.get("//ipinfo.io", function(response) {
    $('#output').text(
      '{ "ipaddress":' + '"' + response.ip + '"' +
      ', "language":' + '"' + window.navigator.languages[0] + '"' +
      ',"software":' + '"' + os[1] + '"' + ' }'
    );
  }, "jsonp");
});
