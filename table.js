'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allLocations = [];
var totalCookiesByHour = 0;
var totalCookiesbyLocation = 0;

function MakeLocation(name, minCustPerHour, maxCustPerHour, avgCookieSoldPerHour) {
  this.name = name,
  this.minCustPerHour = minCustPerHour,
  this.maxCustPerHour = maxCustPerHour,
  this.avgCookieSoldPerHour = avgCookieSoldPerHour,
  this.randCustByHour = [],
  this.cookiesSoldByHour = [],
  this.totalCookiesbyLocation = 0,
  allLocations.push(this);

  for(var i = 0; i < hours.length; i++) {
    this.randCustByHour.push(Math.floor((Math.random() * (this.maxCustPerHour - this.minCustPerHour) + 1)) + this.minCustPerHour);
  }

  for(var j = 0; j < hours.length; j++) {
    this.cookiesSoldByHour.push(Math.round(this.avgCookiesSoldPerHour * this.randCustByHour[j]));
  }

  // for(var k = 0; k < this.cookiesSoldByHour.length; k++) {
  //   var sumTotal = this.cookiesSoldByHour[k];
  //   this.totalCookiesbyLocation.push(sumTotal);
  // }
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
  for(var m = 0; m < allLocations.length; m++) {
    var trEl = document.createElement('tr');
    var nameEl = document.createElement('td');
    nameEl.textContent = allLocations[m].name;
    trEl.appendChild(nameEl);
    cookietable.appendChild(trEl);
    for(var n = 0; n < allLocations[m].cookiesSoldByHour.length; n++) {
      var totEl = document.createElement('td');
      totEl.textContent = allLocations[m].cookiesSoldByHour[n];
      trEl.appendChild(totEl);
      cookietable.appendChild(trEl);
    }
    // var totalEl = document.createElement('td');
    // totalEl.textContent = this.totalCookiesbyLocation;
  }
}
makeStoreRows();

//Make Totals Row
function makeFooterRow() {
  var cookietable = document.getElementById('cookietable');
  var trEl = document.createElement('tr');
  var totEl = document.createElement('td');
  totEl.textContent = 'Totals/Hr: ';
  trEl.appendChild(totEl);
  cookietable.appendChild(trEl);
  var totalPerHrEl = 0;
  for(var y = 0; y < hours.length; y++) {
    var bottomTotalsEl = document.createElement('td');
    for(var z = 0; z < allLocations.length; z++) {
      bottomTotalsEl.textContent = allLocations[z].totalPerHrEl[y];
      trEl.appendChild(totalPerHrEl);
    }
  }
  cookietable.appendChild(trEl);
}
makeFooterRow();

function createNewStore(event) {
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
