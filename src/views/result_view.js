const PubSub = require('../helpers/pub_sub.js');

const ResultView = function (field) {
  this.field = field;
}

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('Country:country-data', (event)=>{
    // console.log(event);
    // console.log(event.detail);
    this.render(event.detail);
  })
};

ResultView.prototype.render = function (info) {
  this.field.innerHTML = '';

  const heading = this.createElement('h2', info.name);
  heading.classList.add('title-name');
  this.field.appendChild(heading);

  const flag = this.createElement('img', info.flag);
  this.field.appendChild(flag)

  const regionTitle = this.createElement('h3', 'Region:');
  regionTitle.classList.add('subtitle');
  this.field.appendChild(regionTitle)

  const region = this.createElement('p', info.region);
  this.field.appendChild(region);

  const languageTitle = this.createElement('h3', 'Languages:');
  languageTitle.classList.add('subtitle');
  this.field.appendChild(languageTitle);
  const language = this.createList('p', info.language);// COME BACK HERE
  this.field.appendChild(language);

  const demonymTitle = this.createElement('h3', 'Fun Fact:');
  demonymTitle.classList.add('subtitle');
  this.field.appendChild(demonymTitle);
  const demonym = this.createElementBespoke('p', info.demonym);
  this.field.appendChild(demonym);

};

ResultView.prototype.createElement = function (type, text) {
  const element = document.createElement(type);
  element.textContent = text;
  return element;
};

ResultView.prototype.createList = function (type, text) {
// create UL
// create li
// append li to ul for each item
};


ResultView.prototype.createElementBespoke = function (type, text) {

};
module.exports = ResultView;
