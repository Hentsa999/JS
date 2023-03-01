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
  myArr.push(MPG, tripCost);
};

const calculateMPGAvg = () => {
  let totalMPG = 0;
  for (let i = 0; i < myMPG.length; i++) {
    totalMPG = totalMPG + myMPG[i];
  }
  let avgMPG = totalMPG / myMPG.length;
  updateDOM("Average MPG is ${avgMPG}");
};
const totalCost = () => {
  totalCost = totalMPG + myMPG;
};
trackMPGandCost(360, 15, 5.4);
trackMPGandCost(320, 12, 5);
trackMPGandCost(150, 10, 3);
trackMPGandCost(550, 20, 7.1);
trackMPGandCost(433, 14, 6);
trackMPGandCost(210, 11, 4.1);
calculateAvg();
