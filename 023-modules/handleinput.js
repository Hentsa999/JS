const ERR = document.getElementById("err");

const updateDOM = (input) => {
  const divEl = document.querySelector("#output");
  const p = document.createElement("p");
  p.textContent = input;
  divEl.appendChild(p);
};

const trackMPGandCost = (miles, gallons, price = 3.79) => {
  const MPG = Math.round(miles / gallons);
  const tripCost = Math.round(gallons * price);
  //updateDOM("Miles per gallon is ${MPG} and trip cost is ${tripCost}");
  const obj = {
    MPG: MPG,
    tripCost: tripCost,
  };
  return obj;
};
const calculateSUM = (arr) => {
  let sum = 0;
  for (value of arr) {
    sum += value;
  }
  return sum;
};

function calculateAvg() {
  const numberOfObj = MY_DATA.length;
  let sumMPG = 0;
  let sumTripCost = 0;
  MY_DATA.forEach((obj) => {
    sumMPG += obj.MPG;
    sumTripCost += obj.tripCost;
  });
  const avgMPG = Math.round(sumMPG / MY_MPG.length);
  const avgTripCost = Math.round(sumTripCost / MY_TRIP_COST.length);
  updateDOM("Average MPG is ${avgMPG}");
  updateDOM("Average Trip is ${avgTripCost}");
}
function isFormValid(miles, gallons, price) {
  const errMsg = [];
}
if (miles === 0 || gallons === 0 || price === 0) {
  errMsg.push("Make sure your input value greater than 011, Try Again");
}
if (price > 1000) {
  errMsg.push("really? I think this is in error... try again");
} else {
  return true;
}

export { isFormValid, calculateAvg, trackMPGandCost };
