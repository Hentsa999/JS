//Update the DOM

const myArr = ["Hentsa", 19];

const updateDOM = (input) => {
  const divEl = document.querySelector("#output");
  const p = document.createElement("p");
  p.textContent = input;
  divEl.appendChild(p);
};

const mileage = (miles, gallons, price = 3.79) => {
  const MPG = Math.round(miles / gallons);
  const tripCost = gallons * price;
  updateDOM("Miles per gallon is ${MPG} and trip cost is ${tripCost}");
  myArr.push(MPG, tripCost);
};
const gastypes = ["Regular", "Preimum", "Disel"];
const count = gastypes.push("eletric");
console.log(count);
console.log(gastypes);

const calculateMPGAvg = () => {
  let totalMPG = 0;
  for (let i = 0; i < myMPG.length; i++) {
    totalMPG = totalMPG + myMPG[i];
  }
  let avgMPG = totalMPG / myMPG.length;
  updateDOM("Average MPG is ${avgMPG}");
};
// calculate average we need to determine total of occurances and divide
trackMPGCost(300, 10, 5.4);
trackMPGCost(220, 12, 5);
trackMPGCost(500, 25, 10);
trackMPGCost(120, 10, 3);
trackMPGCost(310, 14, 6);
trackMPGCost(330, 15, 7);
calculateAvg();
