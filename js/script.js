$(document).ready(function () {
  $(".table").hide();
  $('input[name="results-num"]').hide();
});

var req = require('request');
var base = 'https://clinicaltables.nlm.nih.gov/api/icd10cm/v3/search';

$(function () {
  $('input[name="max-results"]').on('click', function () {
      if (!$(this).prop('checked')) {
        $('input[name="results-num"]').fadeIn();
      } else {
        $('input[name="results-num"]').hide();
        $('input[name="results-num"]').val("")
      }
  });
});

function createTable(tableData) {
  $(".table").remove();
  var divContainer = document.getElementById('main-container');
  var pElement = document.getElementById('test');
  var table = document.createElement('table');
  table.className= "ui padded table";
  var tableBody = document.createElement('tbody');
  var headRow = document.createElement('tr');
  var headElement1 = document.createElement('th');
  var headElement2 = document.createElement('th');
  headElement1.appendChild(document.createTextNode('ICD'));
  headElement2.appendChild(document.createTextNode('Text'));
  headRow.appendChild(headElement1);
  headRow.appendChild(headElement2);
  tableBody.appendChild(headRow);
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
  divContainer.insertBefore(table, pElement);
}

function pingApi() {
  var a;
  var icd = $("#icd-name").val();
  var resultNum;

  if ($('input[name="max-results"]').prop('checked')) {
    resultNum = "";
  } else {
    resultNum = $('#results-num').val();
  };

  var options = {
    url: base,
    method: 'GET',
    qs: {
      sf: 'code,name',
      terms: icd,
      maxList: resultNum,
    }
  }

  req(options, function (err, resp, body) {
    a = JSON.parse(body)[3];
    createTable(a);
  })
  $(".table").show();
};

function clearInput() {
  $("input").val("");
  $(".table").remove();
};
