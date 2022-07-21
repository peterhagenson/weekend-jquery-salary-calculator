console.log("js");

$(handleReady);

function handleReady() {
  $("#submitBtn").on("click", addEmp);
}

// create employees array to collect all added employees
let employees = [];

// add employee info to employee object
function addEmp() {
  let employee = {
    firstName: "",
    lastName: "",
    id: "",
    title: "",
    annualSalary: "",
  };

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

  console.log(employee);
  employees.push(employee);
  console.log(employees);
}