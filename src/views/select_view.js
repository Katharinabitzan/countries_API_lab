const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(section, button) {
  this.section = section;
  this.button = button;
};

SelectView.prototype.bindEvents = function() {
  PubSub.subscribe('Country:data-ready', (event) => {
    const data = event.detail;
    this.populate(data);
  });

  this.button.addEventListener('click', (event) => {
      const randomNumber = this.randomNumber(249);
      console.log(randomNumber);
      PubSub.publish('Select:country-selected', randomNumber);
  });

  this.section.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('Select:country-selected', selectedIndex);

  });

};

SelectView.prototype.randomNumber= function(maxNumber){
  return (1+ Math.floor(Math.random() * Math.floor(maxNumber)));
}

SelectView.prototype.populate = function(data) {
  data.forEach((country, index) => {
    const option = document.createElement('option');
    option.textContent = country.name;
    option.value = index;
    this.section.appendChild(option);
  });
};

module.exports = SelectView;
