const FORM = document.getElementById("form-input");
const TBL_OUTPUT = document.getElementById("table-out");

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
     function renderEditDelBtn ( MY_DATA, index) {
     }
     const td = document.createElement('td');
     const editBtn = document.createElement('button');
     editBtn.textContent = 'edit';
     const delBtn = document.createElement('button');
     delBtn.textContent = 'delete';
     editBtn.addEventListener('click', function(e){
     FORM[0].value = MY_DATA[index].miles
     FORM[1].value = MY_DATA[index].gallons
     FORM[2].value = MY_DATA[index].price
     MY_DATA.splice(index, 1)
  
     delBtn.addEventListener('click', function(e){
      MY_DATA.splice(index, 1)
      saveTripData()
      renderTable()
     })
     })
     td.appendChild(editBtn);
     td.appendChild(delBtn);
     return td;
    })
    
  }
  function renderTable(MY_DATA) {
      TBL_OUTPUT.innerHTML = ''
    if(MY_DATA.length !== 0){
    const tbl = renderTableHeadings()
       TBL_OUTPUT.appendChild(tbl)
    } MY_DATA.forEach(function(obj, index){
          const tr = document.createElement('tr')
          for( const key in obj){
              let td = document.createElement('td')
              td.textContent = obj[key]
              tr.appendChild(td)
              tbl.appendChild(tr)
          }
       })
       const btnTD = renderEditDelBtn(MY_DATA, index)
       tr.appendChild(btnTD)
       tr.appendChild(td)
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
      localStorage.setItem('tripdata', JSON.stringify(MY_DATA))
      saveTripData()
      renderTable(MY_DATA, FORM);
      calculateAvg();
    }
    FORM.reset();
  });

  export {renderTable}