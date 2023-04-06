function updateDOM(input, id) {
  const divEl = document.querySelector(id);
  const p = document.createElement("p");
  const mondayworkout = (document.getElementById("workout").innerHTML =
    mondayworkout);
  p.textContent = input;
  divEl.appendChild(p);
}
const monday = "chest and back";
const smithmachine = "first";
const latpulldown = "first";
const tuesday = false;

if (monday === "chest and back") {
  console.log("we will work chest first!");
} else if (latpulldown) {
  console.log("we will work back first!");
} else {
  console.log("we will work chest and back on tuesday");
}
function workout(chest, back = fullworkout) {
  return chest + back;
}
const mondayworkout = [
  {
    chest: "bench press, chestflys, dumbell press, pushups ",
    machine: "smithmachine, flymachine, benches",
  },
  {
    back: "latpulldown, deadlift, rows, pullups",
    machine: "backmachine, smithmachine, rowmachine, pullupbar",
  },
];
console.log(mondayworkout);
