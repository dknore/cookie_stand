'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allLocations = [];

function MakeLocation(name, minCustPerHour, maxCustPerHour, avgCookieSoldPerHour) {
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookieSoldPerHour = avgCookieSoldPerHour;
  this.randCustByHour = [];
  this.cookiesSoldByHour = [];

  for(var i = 0; i < hours.length; i++) {
    var randomNumber = Math.floor((Math.random() * (this.maxCustPerHour - this.minCustPerHour) + 1)) + this.minCustPerHour;
    var cookiesHour = Math.floor(randomNumber * this.avgCookieSoldPerHour);
    console.log('AVG COOKIES', this.avgCookieSoldPerHour);
    this.cookiesSoldByHour.push(cookiesHour);
  }
  allLocations.push(this);
}

function makeStand() {
  new MakeLocation('1st & Pike', 23, 65, 6.3);
  new MakeLocation('SeaTac Airport', 3, 24, 1.2);
  new MakeLocation('Seattle Center', 11, 38, 3.7);
  new MakeLocation('Capitol Hill', 28, 38, 2.3);
  new MakeLocation('Alki', 2, 16, 4.6);
}
makeStand();

function makeHeaderRow() {
  var cookietable = document.getElementById('cookietable');
  var trEl = document.createElement('tr');
  var blankEl = document.createElement('td');
  blankEl.textContent = '';
  trEl.appendChild(blankEl);
  for(var l = 0; l < hours.length; l++) {
    var hourEl = document.createElement('th');
    hourEl.textContent = hours[l];
    trEl.appendChild(hourEl);
  }
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Total/Day';
  trEl.appendChild(tdEl);
  cookietable.appendChild(trEl);
}
makeHeaderRow();

function makeStoreRows() {
  var cookietable = document.getElementById('cookietable');
  var cookiesTotal;
  var newRow;
  var newCol;
  var storeTitle;
  var totalCol;

  console.log(allLocations)

  for(var row = 0; row < allLocations.length; row++) {
    cookiesTotal = 0;
    newRow = document.createElement('tr');
    storeTitle = document.createElement('td');
    storeTitle.textContent = allLocations[row].name;
    newRow.appendChild(storeTitle);
    for(var col = 0; col < allLocations[row].cookiesSoldByHour.length; col++) {
      cookiesTotal += allLocations[row].cookiesSoldByHour[col];
      newCol = document.createElement('td');
      newCol.textContent = allLocations[row].cookiesSoldByHour[col];
      newRow.appendChild(newCol);
    }
    totalCol = document.createElement('td');
    totalCol.textContent = cookiesTotal;
    newRow.appendChild(totalCol);
    cookietable.appendChild(newRow);
  }
}
makeStoreRows();

//Make Totals Row
function makeFooterRow() {
  var dailyTotal = 0;
  var hourlyTotal;
  var cookietable = document.getElementById('cookietable');
  var newRow = document.createElement('tr');
  var totalLabel = document.createElement('td');
  totalLabel.textContent = 'Totals/Hr: ';
  newRow.appendChild(totalLabel);

  for(var hour = 0; hour < hours.length; hour++) {
    hourlyTotal = 0;
    for(var store = 0; store < allLocations.length; store++) {
      hourlyTotal += allLocations[store].cookiesSoldByHour[hour];
    }
    var newCol = document.createElement('td');
    newCol.textContent = hourlyTotal;
    newRow.appendChild(newCol);
    dailyTotal += hourlyTotal;
  }

  var dailyTotalCol = document.createElement('td');
  dailyTotalCol.textContent = dailyTotal;
  newRow.appendChild(dailyTotalCol);
  cookietable.appendChild(newRow);
}
makeFooterRow();

function createNewStore() {
  event.preventDefault();
  var newStoreLocation = event.target.storename.value;
  var newMinCust = event.target.mincust.value;
  var newMaxCust = event.target.maxcust.value;
  var newAvgCookiesPerSale = event.target.avgcook.value;
  new MakeLocation(newStoreLocation, newMinCust, newMaxCust, newAvgCookiesPerSale);
  cookietable.innerHTML = ' ';
  makeHeaderRow();
  makeStoreRows();
  makeFooterRow();
  event.target.storename.value = null;
  event.target.mincust.value = null;
  event.target.maxcust.value = null;
  event.target.avgcook.value = null;
}
var createStore = document.getElementById('store-form');
createStore.addEventListener('submit', createNewStore);
