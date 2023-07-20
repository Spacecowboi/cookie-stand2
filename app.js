'use strict';

Location.prototype.hours = [ '6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm',];
//collaborated with Paul Brown
//constructor function
function Location (store, minCust, maxCust, avgCookies){
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.store = store;
  this.cookieSales = [];
  this.projectedCookieSales();
}
// All prototypes for constructor function and instantiated objects

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

// I need to create a property that is a function which adds a render method for each location as a new row to the table
Location.prototype.render = function(){
  const table = document.getElementById('sales-table');
  const row = document.createElement('tr');
  row.innerHTML = `<td>${this.store}</td>`; // populating cells with data
  let dailyTotal = 0;
  for (const cookies of this.cookieSales){
    const roundedCookies = cookies.toFixed(0); //round to whole number
    row.innerHTML += `<td>${roundedCookies}</td>`;
    dailyTotal += cookies;
  }
  const roundedDailyTotal = dailyTotal.toFixed(0);
  row.innerHTML += `<td>${roundedDailyTotal}</td>`;
  table.appendChild(row);
};



// I need to create the header row
function makeHeaderRow(){
  const table = document.getElementById('sales-table');
  const headerRow = document.createElement('tr');
  headerRow.innerHTML = '<th>Location</th>';
  for(const hour of Location.prototype.hours){
    headerRow.innerHTML += `<th>${hour}</th>`;
  }
  headerRow.innerHTML += '<th>Daily Location Total</th>';
  table.appendChild(headerRow);
}

// function for the footer 
function makeFooterRow(locations){
  const table = document.getElementById('sales-table');
  const footerRow = document.createElement('tr');
  footerRow.innerHTML = '<th>Hourly Totals</th>';
  let hourlyTotal;
  let grandTotal = 0;

  for(let i = 0; i < Location.prototype.hours.length; i++){
    hourlyTotal = 0;
    for ( const location of locations) {
      hourlyTotal += location.cookieSales[i];
    }
    footerRow.innerHTML += `<td>${hourlyTotal.toFixed(0)}</td>`;
    grandTotal += hourlyTotal;
  }
  footerRow.innerHTML += `<td>${grandTotal.toFixed(0)}</td>`;
  table.appendChild(footerRow);
}



// Variable arguments to be passed into constructor function
let seattle = new Location('Seattle', 23, 65, 6.3);
let tokyo = new Location ('Tokyo', 3, 24, 1.2);
let dubai = new Location ('Dubai', 11, 38, 3.7);
let paris = new Location ('Paris', 20, 38, 2.3);
let lima = new Location ('Lima', 2, 16, 4.6);


// Hold our instantiated objects in a new array

const locations = [];

locations.push(seattle, tokyo, dubai, paris, lima);
console.log(locations);

// SUMMON THE TABLE MILORD

function renderTable(){
  makeHeaderRow();
  for (const location of locations){
    location.render();
  }
  makeFooterRow(locations);
}
renderTable();

