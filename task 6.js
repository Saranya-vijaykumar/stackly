JavaScript Employee Array Tasks

// Employee Array
let employees = [
  {
    name: "Naveen",
    id: 101,
    salary: 30000
  },
  {
    name: "John",
    id: 102,
    salary: 60000
  },
  {
    name: "Arun",
    id: 103,
    salary: 45000
  }
];

---

🟢 Task 1 - Find the Highest Salary

let highestEmployee = employees[0];

for (let employee of employees) {
  if (employee.salary > highestEmployee.salary) {
    highestEmployee = employee;
  }
}

console.log("Highest Salary :", highestEmployee.salary);
console.log("Employee Name :", highestEmployee.name);

Output

Highest Salary : 60000
Employee Name : John

---

🟢 Task 2 - Find Employee by ID

let searchId = 103;
let employeeFound = null;

for (let employee of employees) {
  if (employee.id === searchId) {
    employeeFound = employee;
    break;
  }
}

if (employeeFound) {
  console.log("Employee Found");
  console.log("Name :", employeeFound.name);
  console.log("Salary :", employeeFound.salary);
} else {
  console.log("Employee Not Found");
}

Output

Employee Found
Name : Arun
Salary : 45000

---

🟢 Task 3 - Calculate Salary with Bonus

let bonus = 5000;

for (let employee of employees) {
  console.log(
    `${employee.name} : ${employee.salary + bonus}`
  );
}

Output

Naveen : 35000
John : 65000
Arun : 50000

---

🟢 Task 4 - Experience Check

let employeeExperience = [
  {
    name: "Naveen",
    experience: 2
  },
  {
    name: "John",
    experience: 7
  },
  {
    name: "Arun",
    experience: 5
  }
];

for (let employee of employeeExperience) {
  if (employee.experience >= 5) {
    console.log(
      `${employee.name} - Senior Employee`
    );
  } else {
    console.log(
      `${employee.name} - Junior Employee`
    );
  }
}

Output

Naveen - Junior Employee
John - Senior Employee
Arun - Senior Employee

---

🟢 Task 5 - Display Only Employee Names

for (let employee of employees) {
  console.log(employee.name);
}

Output

Naveen
John
Arun

---

🟢 Task 6 - Display Employee IDs

for (let employee of employees) {
  console.log(employee.id);
}

Output

101
102
103

---

🟢 Task 7 - Find Total Salary

let totalSalary = 0;

for (let employee of employees) {
  totalSalary += employee.salary;
}

console.log("Total Salary :", totalSalary);

Output

Total Salary : 135000

---

🟢 Task 8 - Employees Earning More Than ₹40,000

for (let employee of employees) {
  if (employee.salary > 40000) {
    console.log(employee.name);
  }
}

Output

John
Arun

---

🟢 Task 9 - Increase Salary by ₹5000

for (let employee of employees) {
  let newSalary = employee.salary + 5000;

  console.log(
    `${employee.name} : ${newSalary}`
  );
}

Output

Naveen : 35000
John : 65000
Arun : 50000

---

🟢 Task 10 - Employee Report

for (let employee of employees) {
  console.log(`
Employee Name : ${employee.name}
Employee ID   : ${employee.id}
Salary        : ${employee.salary}
`);
}

Output

Employee Name : Naveen
Employee ID   : 101
Salary        : 30000

Employee Name : John
Employee ID   : 102
Salary        : 60000

Employee Name : Arun
Employee ID   : 103
Salary        : 45000

---

⭐ Challenge Task

// Total Employees
console.log(
  "Total Employees :",
  employees.length
);

// Highest Salary
let highest = employees[0];

for (let employee of employees) {
  if (employee.salary > highest.salary) {
    highest = employee;
  }
}

console.log(
  "Highest Salary :",
  highest.salary
);
console.log(
  "Highest Paid Employee :",
  highest.name
);

// Lowest Salary
let lowest = employees[0];

for (let employee of employees) {
  if (employee.salary < lowest.salary) {
    lowest = employee;
  }
}

console.log(
  "Lowest Salary :",
  lowest.salary
);
console.log(
  "Lowest Paid Employee :",
  lowest.name
);

// Total Salary
let total = 0;

for (let employee of employees) {
  total += employee.salary;
}

console.log(
  "Total Salary :",
  total
);

// Salary Greater Than ₹40,000
console.log(
  "Employees Earning More Than ₹40,000"
);

for (let employee of employees) {
  if (employee.salary > 40000) {
    console.log(employee.name);
  }
}

// Search Employee By ID
l