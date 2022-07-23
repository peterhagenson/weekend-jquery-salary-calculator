console.log("js");

$(handleReady);

function handleReady() {
  $("#submitBtn").on("click", addEmp);
  $("#tableContainer").on("click", "#deleteBtn", removeEmployee);
}

// create employees array to collect all added employees - NEVER USED
let employees = [];

// create variable to track monthly cost
let totMonthlyCost = 0;

// adds employee info to employee object
function addEmp() {
  //creates employee object to store info from inputs
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

  //calculate monthly cost for employee and add it to monthly cost variable
  let monthlySalary = employeeSalary / 12;
  totMonthlyCost += monthlySalary;
  //console.log(monthlySalary);
  //console.log(totMonthlyCost);

  //push newly created employee object to employees array
  employees.push(employee);
  displayEmployees();

  //Call the function that displays monthly cost
  displayMonthlyCost();
}

// formats and displays monthly cost on the DOM
function displayMonthlyCost() {
  $("#totalMonthlyCost").css("background-color", "white");
  $("#totalMonthlyCost").empty();
  $("#totalMonthlyCost").append(
    "Total Monthly: $",
    Math.round((totMonthlyCost / 12) * 100) / 100
  );
  if (totMonthlyCost > 20000) {
    $("#totalMonthlyCost").css("background-color", "red");
    $("#totalMonthlyCost").css("max-width", "200px");
    $("#totalMonthlyCost").css("font-weight", "bold");
  }
}

// displays new employee as a table row on the DOM
function displayEmployees() {
  $("#tableContainer").empty();
  for (let employee of employees) {
    $("#tableContainer").append(`
         <tr>
             <td>${employee.firstName}</td>
             <td>${employee.lastName}</td>
             <td class="employeeID">${employee.id}</td>
             <td>${employee.title}</td>
             <td>${employee.annualSalary}</td>
             <td><button id="deleteBtn">Delete</button></td>
        </tr>
           `);
  }
}

// removes the employee from the employees array
function removeEmployee() {
  //identify the ID of the employee object associated with clicked "delete" button
  let employeeToRemove = $(this).closest("tr").find(".employeeID").text();

  // if an employeeToRemove exists, loop through the employees array to see which object contains the ID number of the clicked object, when a match is found, remove that employee object from the employees array
  if (employeeToRemove) {
    for (i = 0; i < employees.length; i++) {
      if (employeeToRemove === employees[i].id) {
        let removedEmployee = employees.splice(i, 1);

        // calculates the monthly cost that needs to be subtracted from the totMonthlyCosts variable displayed on DOM, and does the subtraction
        let removedMonthlySalary = removedEmployee[0].annualSalary / 12;
        totMonthlyCost = totMonthlyCost - removedMonthlySalary;
        console.log(totMonthlyCost);
      }
      // call the diplayMonthlyCost function to display the updated monthly cost on the DOM.
      displayMonthlyCost();
    }
    // console.log(employees);
  }

  // remove employee row in DOM
  $(this).closest("tr").remove();
}
