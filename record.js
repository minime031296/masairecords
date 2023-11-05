let myForm = document.querySelector("form");
let Name = document.getElementById("name");
let Employeeid = document.getElementById("employeeID");
let Dept = document.getElementById("department");
let Exp = document.getElementById("exp");
let Email = document.getElementById("email");
let Mobile = document.getElementById("mbl");
let tbody = document.querySelector("tbody");
let departmentFilter = document.getElementById("departmentFilter");

let Data = [];

myForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let obj = {};
  obj.name = Name.value;
  obj.employeeID = Employeeid.value;
  obj.department = Dept.value;
  obj.exp = Exp.value;
  obj.email = Email.value;
  obj.mbl = Mobile.value;

  Data.push(obj);
  console.log(Data);

  renderTable();
  populateDepartmentFilter();
});

function renderTable(filteredData = Data) {
  tbody.innerHTML = "";
  filteredData.forEach((ele) => {
    let row = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.textContent = ele.name;
    row.appendChild(td1);

    let td2 = document.createElement("td");
    td2.textContent = ele.employeeID;
    row.appendChild(td2);

    let td3 = document.createElement("td");
    td3.textContent = ele.department;
    row.appendChild(td3);

    let td4 = document.createElement("td");
    td4.textContent = ele.exp;
    row.appendChild(td4);

    let td5 = document.createElement("td");
    td5.textContent = ele.email;
    row.appendChild(td5);

    let td6 = document.createElement("td");
    td6.textContent = ele.mbl;
    row.appendChild(td6);

    let tdRole = document.createElement("td");
    if (ele.exp > 5) {
      tdRole.textContent = "Senior";
    } else if (ele.exp >= 2 && ele.exp <= 5) {
      tdRole.textContent = "Junior";
    } else if (ele.exp <= 1) {
      tdRole.textContent = "Fresher";
    }
    row.appendChild(tdRole);

    let tdDelete = document.createElement("td");
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", function () {
      Data = Data.filter(item => item !== ele);
      renderTable();
      populateDepartmentFilter();
    });
    tdDelete.appendChild(deleteButton);
    row.appendChild(tdDelete);

    tbody.appendChild(row);
  });
}




