const FORM = document.getElementById("form-input");
const myArr = [];
const AVG_OUTPUT = document.getElementById("output-avg");
const TBL_OUTPUT = document.getElementById("table-out");

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
  const tripCost = Math.round(gallons * price);
  updateDOM("Miles per gallon is ${MPG} and trip cost is ${tripCost}");
  const obj = {
    MPG: MPG,
    tripCost: tripCost,
  };
  return obj;

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

function calculateAvg() {
  //let sumMPG = calculateSUM(MY_MPG);
  //let sumTripCost = calculateSUM(MY_TRIP_COST);
  let avgMPG = Math.round(sumMPG / MY_MPG.length);
  let avgTripCost = Math.round(sumTripCost / MY_TRIP_COST.length);
  updateDOM("Average MPG is ${avgMPG}");
  updateDOM("Average Trip is ${avgTripCost}");
}

function isFormValid(miles, gallons, price) {}
if (miles === 0 || gallons === 0 || price === 0) {
  errMsg.push("Make sure your input value greater than 011, Try Again");
}
if (price > 1000) {
  errMsg.push("really? I think this is in error... try again");
}

if (errMsg.length > 0) {
  ERR.textContent = errMsg;
  return false;
} else {
  return true;
}

function renderTable() {
  const tbl = document.createElement("table");
  const heading =
    ("Miles Driven",
    "Gallons Used:",
    "Price Paid:",
    "Trip MPG",
    "Trip Cost",
    "Edit/Delete");
  const tr = document.createElement("tr");
  heading.forEach(function (heading) {
    console.log(heading);
    let th = document.createElement("th");
    th.textContent = heading;
    tr.appendChild(th);
  });
  console.log(tr);
  tbl.appendChild(tr);
  TBL_OUTPUT.appendChild(tbl);
  MY_DATA.forEach(function(obj){
   const tr = document.createElement('tr')
   for(key in obj){
    let td = document.createElement('td')
    td.textContent() = obj[key]
    console.log(td)
    tr.appendChild(td)
   }
   function renderEditDelBtn () {
   }
   const btnTD = document.createElement('td')
   //const editBtn = document.createElement('button')
   //editBtn.textContent = 'edit'
   //const delBtn = document.createElement('button')
   //editBtn.textContent = 'delete'
  // btnTD.appendChild(editBtn)
   //btnTD.appendChild(delBtn)
   tr.appendChild(btnTD)
   tbl.appendChild(tr)
  })
}
function renderTable() {
    TBL_OUTPUT.innerHTML = ''
     const tbl = renderTableHeadings()
     TBL_OUTPUT.appendChild(tbl)
     MY_DATA.forEach(function(obj){
        const tr = document.createElement('tr')
        for(key in obj){
            let td = document.createElement('td')
            td.textContent = obj[key]
            tr.appendChild(td)
        }
     })
}


FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  const miles = parseInt(e.target.miles.value);
  const gallons = parseInt(e.target.gallons.value);
  const price = parseInt(e.target.price.value);
  const isValid = isFormValid(miles, gallons, price);
  if (isValid) {
    ERR.textContent = "";
    AVG_OUTPUT.textContent = "";
    const DataObj = trackMPGandCost(miles, gallons, price);
    MY_DATA.push(dataObj);
    renderTable();
    calculateAvg();
  }
  FORM.reset();
});
