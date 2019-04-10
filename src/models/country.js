const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Country = function(){
  this.data = null;
};

Country.prototype.getData = function () {
  const request = new RequestHelper('https://restcountries.eu/rest/v2/all');
  request.get((data) => {
    this.data = data;
    PubSub.publish('Country:data-ready', data)
  });
};

module.exports = Country;
