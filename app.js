'use strict';

// var titleTop = document.getElementById('titletop');
// var el = curveText({
//   text: "Salmon",
//   circleSize: 60,
//   curvature: 0.25,
// }
// titleTop.appendChild(el);
//
// var titleBottom = document.getElementById('titlebottom');
// var el = curveText({
//   text: "Cookies",
//   circleSize: 60,
//   curvature: 0.25,
//   under: true,
// })
// titleBottom.appendChild(el);

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//First and Pike Location
var firstAndPike = {
  name: '1st and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesSoldPerHour: 6.3,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  calcRandCustByHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);
    }
  },
  calcCookiesSoldByHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookiesSoldPerHour * this.randCustByHour[j]));
      console.log(this.cookiesSoldByHour[j]);
    }
  },
  calcTotalCookies: function() {
    for(var l = 0; l < this.cookiesSoldByHour.length; l++) {
      this.totalCookies = this.totalCookies + this.cookiesSoldByHour[l];
      console.log('Total Cookies: ', this.totalCookies);
      //var totalCookies = sum(this.cookiesSoldByHour[l])
    }
  },
  render: function() {
    var firstandpike = document.getElementById('firstandpike');
    var fandp = document.getElementById('fandp');
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    firstandpike.appendChild(h3El);
    for(var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
      fandp.appendChild(liEl);
    }
    var sumEl = document.createElement('li');
    this.calcTotalCookies();
    sumEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    console.log(sumEl);
    fandp.appendChild(sumEl);
  }
};
firstAndPike.render();

//SeaTac Airport Location
var seaTacAirport = {
  name: 'SeaTac Airport',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesSoldPerHour: 1.2,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  calcRandCustByHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);
    }
  },
  calcCookiesSoldByHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookiesSoldPerHour * this.randCustByHour[j]));
      console.log(this.calcCookiesSoldByHour[j]);
    }
  },
  render: function() {
    var seatacairport = document.getElementById('seatacairport');
    var sta = document.getElementById('sta');
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    seatacairport.appendChild(h3El);
    for(var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      //creating li elements with text of the hours
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
      sta.appendChild(liEl);
    }
  }
};
seaTacAirport.render();
//Seattle Center Location
var seattleCenter = {
  name: 'Seattle Center',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesSoldPerHour: 3.7,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  calcRandCustByHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);
    }
  },
  calcCookiesSoldByHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookiesSoldPerHour * this.randCustByHour[j]));
      console.log(this.calcCookiesSoldByHour[j]);
    }
  },
  render: function() {
    var seattlecenter = document.getElementById('seattlecenter');
    var sc = document.getElementById('sc');
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    seattlecenter.appendChild(h3El);
    for(var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
      sc.appendChild(liEl);
    }
  }
};
seattleCenter.render();
//Capitol Hill Location
var capitolHill = {
  name: 'Capitol Hill',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesSoldPerHour: 2.3,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  calcRandCustByHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);
    }
  },
  calcCookiesSoldByHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookiesSoldPerHour * this.randCustByHour[j]));
      console.log(this.calcCookiesSoldByHour[j]);
    }
  },
  render: function() {
    var capitolhill = document.getElementById('capitolhill');
    var ch = document.getElementById('ch');
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    capitolhill.appendChild(h3El);
    for(var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
      ch.appendChild(liEl);
    }
  }
};
capitolHill.render();
//Alki Location
var alki = {
  name: 'Alki',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesSoldPerHour: 3.7,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  calcRandCustByHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);
    }
  },
  calcCookiesSoldByHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookiesSoldPerHour * this.randCustByHour[j]));
      console.log(this.calcCookiesSoldByHour[j]);
    }
  },
  render: function() {
    var alki = document.getElementById('alki');
    var ak = document.getElementById('ak');
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    alki.appendChild(h3El);
    for(var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
      ak.appendChild(liEl);
    }
  }
};
alki.render();
//TO GET TOTALS... what we just did... except cookies/hr, it will be total per hour.  get____ then concantinate, then append child to

console.log('total cookies', this.totalCookies);
