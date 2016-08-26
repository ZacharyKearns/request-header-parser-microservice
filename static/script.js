$(document).ready(function() {
  var os = window.navigator.userAgent.match(/\(([^)]+)\)/);
  $.get("https://api.ipify.org?format=jsonp", function(res) {
    $('#output').text(
      '{ "ipaddress":' + '"' + res.ip + '"' +
      ', "language":' + '"' + window.navigator.languages[0] + '"' +
      ',"software":' + '"' + os[1] + '"' + ' }'
    );
  }, "jsonp");
});
