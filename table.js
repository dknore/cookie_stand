'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allLocations = [];
var avgCookiesSoldPerHour = [];
var totalCookiesSoldPerDay = [];

function MakeLocation(name, minCustPerHour, maxCustPerHour, avgCookiesSoldPerHour) {
  this.name = name,
  this.minCustPerHour = minCustPerHour,
  this.maxCustPerHour = maxCustPerHour,
  this.avgCookiesSoldPerHour = avgCookiesSoldPerHour,
  this.randCustPerHour = [],
  this.avgCookiesSoldPerHour = [],
  this.totalCookiesSoldPerDay = 0,
  allLocations.push(this),

  this.calcRandCustPerHour = function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      this.calcRandCustPerHour();
      console.log(this.randCustPerHour[i]);
    }
  },
  this.calcCookiesSoldPerHour = function() {
    for(var j = 0; j < hours.length; j++) {
      this.avgCookiesSoldPerHour.push(Math.round(this.avgCookiesSoldPerHour * this.randCustPerHour[j]));
      this.calcCookiesSoldPerHour();
      console.log(this.avgCookiesSoldPerHour[j]);
    }
  },
  this.calcTotalCookiesSoldPerDay = function() {
    for(var k = 0; k < this.avgCookiesSoldPerHour.length; k++) {
      this.totalCookiesSoldPerDay = this.totalCookiesSoldPerDay + this.avgCookiesSoldPerHour[k];
      this.calcTotalCookiesSoldPerDay();
      console.log('Total Cookies: ', this.totalCookiesSoldPerDay);
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
  var blankEl = document.createElement('td');
  blankEl.textContent = '';
  trEl.appendChild(blankEl);
  for(var l = 0; l < hours.length; l++) {
    var hourEl = document.createElement('th');
    hourEl.textContent = hours[l];
    trEl.appendChild(hourEl);
    console.log(hours[l]);
  }
  cookietable.appendChild(trEl);
}
makeHeaderRow();

function makeStoreRows () {
  var cookietable = document.getElementById('cookietable');
  var makeNameEl = document.createElement('tr');
  var addNameEl = document.createElement('td');
  addNameEl.textContent = name;
  makeNameEl.appendChild(addNameEl);
  for(var m = 0; m < this.avgCookiesSoldPerHour.length; m++) {
    var makeTotalEl = document.createElement('tr');
    var addTotalEl = document.createElement('td');
    addTotalEl.textContent = avgCookiesSoldPerHour[m];
    makeTotalEl.appendChild(addTotalEl);
    console.log(avgCookiesSoldPerHour);
  }
  cookietable.appendChild(makeNameEl);
  cookietable.appendChild(makeTotalEl);
}
makeStoreRows();
// function makeStoreRows() {
//   var cookietable = document.getElementById('cookietable');
//   for(var m = 0; m < allLocations.length; m++) {
//     var makeRowEl = document.createElement('tr');
//     var addStoreNameEl = document.createElement('td');
//     addStoreNameEl.textContent = allLocations[m].name;
//     makeRowEl.appendChild(addStoreNameEl);
//     console.log(addStoreNameEl);
//     for(var n = 0; n < allLocations[m].avgCookiesSoldPerHour.length; n++) {
//       var makeRowForTotalEl = document.createElement('tr');
//       var addTotalsDataEl = document.createElement('td');
//       addTotalsDataEl.textContent = allLocations[m].this.avgCookiesSoldPerHour[n];
//       makeRowForTotalEl.appendChild(addTotalsDataEl);
//       console.log('here???', addTotalsDataEl);
//     }
//     cookietable.appendChild(makeRowEl);
//   }
// }
// makeStoreRows();

// function makeFooterRow() {
//   var cookietable = document.getElementById('cookietable');
//   var trEl = document.createElement('tr');
//   var totEl = document.createElement('td');
//   totEl.textContent = 'Total: ';
//   trEl.appendChild(totEl);
//   for(var n = 0; n < hours.length; n++) {
//     var netEl = document.createElement('td');
//     netEl.textContent = allLocations.this.totalCookies * hours.length[n];
//     trEl.appendChild(netEl);
//     console.log();
//   }
//   cookietable.appendChild(trEl);
// }
// makeFooterRow();

document.getElementById('')
