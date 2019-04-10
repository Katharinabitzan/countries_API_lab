const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (section) {
  this.section = section;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Country:data-ready', (event)=>{
    const data = event.detail;
    // console.log(data);
    this.populate(data);
  });

  this.section.addEventListener('change', (event)=>{
    // console.log(event);
    const selectedIndex = event.target.selectedIndex;
    PubSub.publish('Select:country-selected', selectedIndex);

  })

};

SelectView.prototype.populate = function (data) {
  data.forEach((country, index)=>{
    const option = document.createElement('option');
    option.textContent = country.name;
    option.value = index;
    this.section.appendChild(option);
  });
};

module.exports = SelectView;
