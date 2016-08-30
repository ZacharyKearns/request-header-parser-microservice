$(document).ready(function() {
  var os = window.navigator.userAgent.match(/\(([^)]+)\)/);
  var language = window.navigator.languages ? window.navigator.languages[0] : window.navigator.language;
  $.get("https://api.ipify.org?format=jsonp", function(res) {
    $('#output').text(
      '{ "ipaddress":' + '"' + res.ip + '"' +
      ', "language":' + '"' + language + '"' +
      ',"software":' + '"' + os[1] + '"' + ' }'
    );
  }, "jsonp");
});
