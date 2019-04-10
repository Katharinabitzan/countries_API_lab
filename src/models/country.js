const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Country = function(){
  this.data = null;
};

Country.prototype.bindEvents = function () {
  PubSub.subscribe('Select:country-selected', (event)=>{
    const countryIndex = event.detail;
    const countryData = this.findCountry(countryIndex);
  })
};

Country.prototype.getData = function () {
  const request = new RequestHelper('https://restcountries.eu/rest/v2/all');
  request.get((data) => {
    this.data = data;
    PubSub.publish('Country:data-ready', data);
  });
};

Country.prototype.findCountry = function (countryIndex) {
  const countryHash = this.data[countryIndex];
  // console.log(countryHash);
  PubSub.publish('Country:country-data', countryHash);
};

module.exports = Country;
