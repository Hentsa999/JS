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

const calculateAvg = () => {
  const avgMPG = (myArr[0] + myArr[2]) / 2;
  updateDOM("Average Miles per gallon is ${avgMPG}");
};

trackMPGCost(300, 10, 5.4);
trackMPGCost(320, 12, 5);
updateDOM(myArr);
//updateDOM(gastypes);
calculateAvg();
