$(document).ready(function () {
  $(".table").hide();
});

var req = require('request');
var base = 'https://clinicaltables.nlm.nih.gov/api/icd10cm/v3/search';

function createTable(tableData) {
  var table = document.createElement('table');
  table.className= "ui padded table";
  var tableBody = document.createElement('tbody');

  tableData.forEach(function(rowData) {
    var row = document.createElement('tr');

    rowData.forEach(function(cellData) {
      var cell = document.createElement('td');
      cell.appendChild(document.createTextNode(cellData));
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  var divContainer = document.getElementById('#main-container');
  var pElement = document.getElementById('#test');
  // document.body.appendChild(table);
  document.body.insertBefore(table, pElement);
}

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
    createTable(a);
  })
  $("#results-table").show();
};

function clearInput() {
  document.getElementById('test').innerHTML = "";
  $("#results-table").hide();
};
