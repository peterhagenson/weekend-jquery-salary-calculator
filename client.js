console.log("js");

$(handleReady);

function handleReady() {
  $("#submitBtn").on("click", addEmp);
  $("#tableContainer").on("click", "#deleteBtn", removeRow);
}

// create employees array to collect all added employees
let employees = [];

// create variable to track monthly cost
let totMonthlyCost = 0;

// adds employee info to employee object
function addEmp() {
  // creates employee object to store info from inputs
  let employee = {
    firstName: "",
    lastName: "",
    id: "",
    title: "",
    annualSalary: "",
  };

  //stores info from inputs in the employee object and clears input fields
  let employeeFirstName = $("#firstNameIn").val();
  employee.firstName = employeeFirstName;
  $("#firstNameIn").val("");

  let employeeLastName = $("#lastNameIn").val();
  employee.lastName = employeeLastName;
  $("#lastNameIn").val("");

  let employeeId = $("#idIn").val();
  employee.id = employeeId;
  $("#idIn").val("");

  let employeeTitle = $("#titleIn").val();
  employee.title = employeeTitle;
  $("#titleIn").val("");

  let employeeSalary = $("#salaryIn").val();
  employee.annualSalary = employeeSalary;
  $("#salaryIn").val("");

  // calculate monthly cost for employee and add it to monthly cost variable
  let monthlySalary = employeeSalary / 12;
  totMonthlyCost += monthlySalary;
  console.log(monthlySalary);
  console.log(totMonthlyCost);

  $("#tableContainer").append(`
  <tr>  
    <td>${employeeFirstName}</td> 
    <td>${employeeLastName}</td> 
    <td>${employeeId}</td> 
    <td>${employeeTitle}</td> 
    <td>${employeeSalary}</td> 
    <td><button id="deleteBtn">Delete</button></td> 
  </tr>
  `);

  $("#totalMonthlyCost").empty();
  $("#totalMonthlyCost").append("Total Monthly: $", totMonthlyCost);
  if (totMonthlyCost > 20000) {
    $("#totalMonthlyCost").css("background-color", "red");
  }

  console.log(employee);
  employees.push(employee);
  console.log(employees);
}

function removeRow() {
  $(this).closest("tr").remove();
}
