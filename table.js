'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allLocations = [];
var totalCookiesByHour = 0;
var netTotal = 0;

function MakeLocation(name, minCustPerHour, maxCustPerHour, avgCookieSoldPerHour) {
  this.name = name,
  this.minCustPerHour = minCustPerHour,
  this.maxCustPerHour = maxCustPerHour,
  this.avgCookieSoldPerHour = avgCookieSoldPerHour,
  this.randCustByHour = [],
  this.cookiesSoldByHour = [],
  this.totalCookies = 0,
  allLocations.push(this),

  this.calcRandCustByHour = function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      this.calcRandCustByHour();
      console.log(this.randCustByHour[i]);
    }
  },
  this.calcCookiesSoldByHour = function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookiesSoldPerHour * this.randCustByHour[j]));
      this.calcCookiesSoldByHour();
      console.log(this.cookiesSoldByHour[j]);
    }
  },
  this.calcNetTotal = function() {
    for(var k = 0; k < this.cookiesSoldByHour.length; k++) {
      this.netTotal = this.netTotal + this.cookiesSoldByHour[k];
      this.calcNetTotal();
      console.log('Total Cookies: ', this.netTotal);
    }
  };
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
  for(var l = 0; l < hours.length; l++) {
    var hourEl = document.createElement('th');
    hourEl.textContent = hours[l];
    trEl.appendChild(hourEl);
    console.log(hours[l]);
  }
  cookietable.appendChild(trEl);
}
makeHeaderRow();

function makeStoreRow() {
  var cookietable = document.getElementById('cookietable');
  var trEl = document.createElement('tr');
  trEl.textContent = MakeLocation.name[0];
  cookietable.appendChild(trEl);
  for(var m = 0; m < this.cookiesSoldByHour.length; m++) {
    var totEl = document.createElement('tr');
    totEl.textContent = totEl + this.cookiesSoldByHour[m];
    totEl.appendChild(trEl);
    console.log(totEl);
  }
}
makeStoreRow();

// function makeFooterRow() {
//   var cookietable = document.getElementById('cookietable')
//   var trEl = document.createElement('tr');
//   for(var m = 0; m < allLocations.length; m++) {
//     var totEl = document.createElement('th');
//     hourEl.textContent = hours[l];
//     trEl.appendChild();
//     console.log();
//   }
//   cookietable.appendChild(trEl);
// }
// makeFooterRow();
