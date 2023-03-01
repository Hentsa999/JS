const myArr = [];

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
  myTripCOst.push(tripCost);
};

const calculateAvg = () => {
  let sumMPG = 0;
  let sumTripCost = 0;
  for (let i = 0; i < myMPG.length; i++) {
    sumMPG = sumMPG + myMPG[i];
    sumTripCost = sumTripCost + myTripCost[i];
  }
  let avgMPG = totalMPG / myMPG.length;
  let avgTripCost = Math.round(sumTripCost / myTripCost.length);
  updateDOM("Average MPG is ${avgMPG}");
  updateDOM("Average Trip is ${avgTripCost}");
};

trackMPGandCost(360, 15, 5.4);
trackMPGandCost(320, 12, 5);
trackMPGandCost(150, 10, 3);
trackMPGandCost(550, 20, 7.1);
trackMPGandCost(433, 14, 6);
trackMPGandCost(210, 11, 4.1);
calculateAvg();
