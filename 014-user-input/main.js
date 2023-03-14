const FORM = document.getElementById("form-input");
const myArr = [];

const MY_MPG = [];
const MY_TRIP_COST = [];

const updateDOM = (input) => {
  const divEl = document.querySelector("#output");
  const p = document.createElement("p");
  p.textContent = input;
  divEl.appendChild(p);
};

const trackMPGandCost = (miles, gallons, price = 3.79) => {
  const MPG = Math.round(miles / gallons);
  const tripCost = gallons * price;
  updateDOM("Miles per gallon is ${MPG} and trip cost is ${tripCost}");
  MY_MPG.push(MPG);
  MY_TRIP_COST.push(tripCost);
};
const calculateSUM = (arr) => {
  let sum = 0;
  for (value of arr) {
    sum += value;
  }
  return sum;
};

const calculateAvg = () => {
  let sumMPG = calculateSUM(MY_MPG);
  let sumTripCost = calculateSUM(MY_TRIP_COST);
  let avgMPG = Math.round(sumMPG / MY_MPG.length);
  let avgTripCost = Math.round(sumTripCost / MY_TRIP_COST.length);
  updateDOM("Average MPG is ${avgMPG}");
  updateDOM("Average Trip is ${avgTripCost}");
};

FORM.addEventListener("submit", (e) => {
  console.log[e];
});

//trackMPGandCost(360, 15, 5.4);
//trackMPGandCost(320, 12, 5);
//trackMPGandCost(150, 10, 3);
//trackMPGandCost(550, 20, 7.1);
//trackMPGandCost(433, 14, 6);
//trackMPGandCost(210, 11, 4.1);
//calculateAvg();
