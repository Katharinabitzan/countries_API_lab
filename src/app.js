const Country = require('./models/country.js');
const SelectView = require('./views/select_view.js');
const ResultView = require('./views/result_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const resultField = document.querySelector('#country');
  const resultView = new ResultView(resultField);
  resultView.bindEvents();

  const selectElement = document.querySelector('select#countries');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();


  const country = new Country();
  country.getData();
  country.bindEvents();

});
