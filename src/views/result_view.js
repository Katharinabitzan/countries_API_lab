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

const divCountry = document.createElement('div');
divCountry.classList.add('country_name');
  const heading = this.createElement('h2', info.name);
  heading.classList.add('title-name');
  divCountry.appendChild(heading);
  this.field.appendChild(divCountry);

const divInfo = document.createElement('div');
divInfo.classList.add('info');

  const regionTitle = this.createElement('h3', 'Region:');
  regionTitle.classList.add('subtitle');
  divInfo.appendChild(regionTitle);

  const region = this.createElement('p', info.region);
  divInfo.appendChild(region);

  const languageTitle = this.createElement('h3', 'Languages:');
  languageTitle.classList.add('subtitle');
  divInfo.appendChild(languageTitle);

  const language = this.createList(info.languages);// COME BACK HERE
  divInfo.appendChild(language);


  const demonymTitle = this.createElement('h3', 'Fun Fact:');
  demonymTitle.classList.add('subtitle');
  divInfo.appendChild(demonymTitle);
  const demonym = this.createElementBespoke('p', info);
  divInfo.appendChild(demonym);

this.field.appendChild(divInfo);

  const divFlag = document.createElement('div');
  divFlag.classList.add('flag');
  const flag = document.createElement('img');
  flag.src = info.flag;
  divFlag.appendChild(flag);
  this.field.appendChild(divFlag);

};

ResultView.prototype.createElement = function (type, text) {
  const element = document.createElement(type);
  element.textContent = text;
  return element;
};

ResultView.prototype.createList = function (listArray) {
  const unorderedList = document.createElement('ul');

  listArray.forEach((arrayItem)=>{
    const listItem = document.createElement('li')
    listItem.textContent = arrayItem.name;
    unorderedList.appendChild(listItem);
  });
  return unorderedList;

};


ResultView.prototype.createElementBespoke = function (type, info) {
  const element = document.createElement(type);
  element.textContent = `A person from ${info.name} is: ${info.demonym}`;
  return element;
};
module.exports = ResultView;
