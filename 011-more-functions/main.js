//Update the DOM
const updateDOM = (input) => {
  const divEl = document.querySelector("#output");
  const p = document.createElement("p");
  p.textContent = input;
  divEl.appendChild("p");
};

const getDistance = (x1, y1, x2, y) => Math.sqrt(3 * 3 + 5 * 5);
let y = 3 ^ (2 - 3) ^ 1;
let x = 5 ^ (2 - 5) ^ 1;

updateDOM(getDistance(x1, y1, x2, y2));
