'use strict';

//collaborated with Paul Brown
//constructor function
function Location (store, minCust, maxCust, avgCookies){
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.store = store;
  this.projectedCookieSales();
}
// All prototypes for constructor function
Location.prototype.hours =[ '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',];

Location.prototype.cookieSales = [];

Location.prototype.generateRandomCustomers = function() {
  //math.floor function constructed with help from ChatGPT
  return (
    Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust
  );
};

Location.prototype.projectedCookieSales = function () {
  for (let i = 0; i < this.hours.length; i++) {
    let customers = this.generateRandomCustomers();
    let cookiesPurchased = customers * this.avgCookies;
    this.cookieSales.push(cookiesPurchased);
  }
};

// Variable arguments to be passed into constructor function
let seattle = new Location('Seattle', 23, 65, 6.3);
let tokyo = new Location ('Tokyo', 3, 24, 1.2);
let dubai = new Location ('Dubai', 11, 38, 3.7);
let paris = new Location ('Paris', 20, 38, 2.3);
let lima = new Location ('Lima', 2, 16, 4.6);

console.log(seattle);
console.log(tokyo);
console.log(dubai);
console.log(paris);
console.log(lima);
