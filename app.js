"use strict";

function generateRandomCustomers() {
  //math.floor function constructed with help from ChatGPT
  return (
    Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust
  );
}

const seattle = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  getRandomCustomers: generateRandomCustomers,
  hours: [
    '6am',
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
    '7pm',
  ],
  cookieSales: [], //Store cookie sales for each hour

  projectedCookieSales: function () {
    for (let i = 0; i < this.hours.length; i++) {
      let customers = this.getRandomCustomers(); // genereating random customers per hour
      let cookiesPurchased = customers * this.avgCookies; // Getting amount of cookies purchased
      this.cookieSales.push(cookiesPurchased); // Putting our previously collected data into our empty array
    }
  },
};
seattle.getRandomCustomers();
seattle.projectedCookieSales(); // Calculate AND store sales for each hour open
console.log("Seattle sales:", seattle.cookieSales);

// const customersPerHour = seattle.getRandomCustomersPerHour();
// console.log("Number of customers per hour:", customersPerHour);

const Tokyo = {
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  getRandomCustomers: generateRandomCustomers,
  hours: [
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11a',
    '12p',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',
  ],
  cookieSales: [],

  projectedCookieSales: function () {
    for (let i = 0; i < this.hours.length; i++) {
      let customers = this.getRandomCustomers();
      let cookiesPurchased = customers * this.avgCookies;
      this.cookieSales.push(cookiesPurchased);
    }
  },
};
Tokyo.getRandomCustomers();
Tokyo.projectedCookieSales();
console.log("Tokyo sales:", Tokyo.cookieSales);

const Dubai = {
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  getRandomCustomers: generateRandomCustomers,
  hours: [
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12p',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',
  ],
  cookieSales: [],

  projectedCookieSales: function () {
    for (let i = 0; i < this.hours.length; i++) {
      let customers = this.getRandomCustomers();
      let cookiesPurchased = customers * this.avgCookies;
      this.cookieSales.push(cookiesPurchased);
    }
  },
};
Dubai.getRandomCustomers();
Dubai.projectedCookieSales();
console.log("Dubai sales:", Dubai.cookieSales);

const Paris = {
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  getRandomCustomers: generateRandomCustomers,
  hours: [
    '6am',
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
    '7pm',
  ],
  cookieSales: [],

  projectedCookieSales: function () {
    for (let i = 0; i < this.hours.length; i++) {
      let customers = this.getRandomCustomers();
      let cookiesPurchased = customers * this.avgCookies;
      this.cookieSales.push(cookiesPurchased);
    }
  },
};
Paris.getRandomCustomers();
Paris.projectedCookieSales();
console.log("Paris sales:", Paris.cookieSales);

const Lima = {
  minCust: 2,
  maxCust: 16,
  avgCookies: 2.6,
  getRandomCustomers: generateRandomCustomers,
  hours: [
    '6am',
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
    '7pm',
  ],
  cookieSales: [],

  projectedCookieSales: function () {
    for (let i = 0; i < this.hours.length; i++) {
      let customers = this.getRandomCustomers();
      let cookiesPurchased = customers * this.avgCookies;
      this.cookieSales.push(cookiesPurchased);
    }
  },
};
Lima.getRandomCustomers();
Lima.projectedCookieSales();
console.log('Lima sales:', Lima.cookieSales);
