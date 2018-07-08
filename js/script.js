$(document).ready(function () {
  $(".table").hide();
});

var req = require('request');
var base = 'https://clinicaltables.nlm.nih.gov/api/icd10cm/v3/search';

// can pass params in as qs option

function pingApi() {
  var a;
  var icd = $("#icd-name").val();

  var options = {
    url: base,
    method: 'GET',
    qs: {
      sf: 'code,name',
      terms: icd
    }
  }

  req(options, function (err, resp, body) {
    a = JSON.parse(body)[3];

    var table = document.getElementById('results-table');
    for (var i = 1; i < table.rows.length; i++) {
      for (var j = 0; table.rows[0].cells.length; j++) {
        table.rows[i].cells[j].innerHTML = a[i-1][j];
      }}
  })
  $("#results-table").show();
};

function clearInput() {
  document.getElementById('test').innerHTML = "";
  $("#results-table").hide();
};
