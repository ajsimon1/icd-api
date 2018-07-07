var req = require('request');

var base = 'https://clinicaltables.nlm.nih.gov/api/icd10cm/v3/search';
var quer = base + '?sf=code,name&terms=tuberc';
var a;

var options = {
  uri: quer,
  method: 'GET',
}

// can pass params in as qs option

function pingApi() {
  req(quer, function (err, resp, body) {
    let a = JSON.parse(body);
    document.getElementById('test').innerHTML = a;
})};

function clearInput() {
  document.getElementById('test').innerHTML = "";
};
