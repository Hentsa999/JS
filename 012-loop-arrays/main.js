const myArr = [];

const updateDOM = (input) => {
  const divEl = document.querySelector("#output");
  const p = document.createElement("p");
  p.textContent = input;
  divEl.appendChild(p);
};

const trackMPGCost = (miles, gallons, price = 3.79) => {
  const MPG = Math.rounf(miles / gallons);
  const tripCost = gallons * price;
  updateDOM("Miles per gallon is ${MPG} and trip cost is ${tripCost}");
  myArr.push(MPG, tripCost);
};

const calculateMPGAvg = () => {
  //const avgMPG = (myArr[0] + myArr[2]) / 2;
  //updateDOM("Average MPG is ${avgMPG}");
  let totalMPG = 0;
  for (let i = 0; i < myMPG.length; i++) {
    totalMPG = totalMPG + myMPG[i];
  }
  let avgMPG = totalMPG / myMPG.length;
  updateDOM("Average MPG is ${avgMPG}");
};

trackMPGCost(360, 15, 5.4);
trackMPGCost(320, 12, 5);
trackMPGCost(150, 10, 3);
trackMPGCost(550, 20, 7.1);
trackMPGCost(433, 14, 6);
trackMPGCost(210, 11, 4.1);
calculateAvg();
