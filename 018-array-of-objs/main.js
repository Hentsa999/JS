const updateDOM = (input, id) => {
  const divEl = document.getElementById(id);
  const p = document.createElement("p");
  p.textContent = input;
  divEl.appendChild(p);
};
const myArrObjs = [
  {
    name: "hentsa",
    hairColor: "black",
  },
  {
    name: "Gio",
    hairColor: "brown",
  },
  {
    name: "Mary",
    hairColor: "blonde",
  },
];

myArrObjs.forEach((obj) => {
  const str = "${obj.name} has ${obj.hairColor} hair color";
  updateDOM(str, "output");
});
