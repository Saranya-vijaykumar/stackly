//1. Employee Salary
function yearlySalary(monthlySalary) {
    return monthlySalary * 12;
}

var salary = 45000;
console.log("Yearly Salary : ₹" + yearlySalary(salary));


//2. Student Pass or Fail
function checkResult(marks) {
    if (marks >= 35) {
        return "Pass";
    } else {
        return "Fail";
    }
}

var marks = 72;
console.log("Result : " + checkResult(marks));


//3. Food Bill
function totalBill(price, quantity) {
    return price * quantity;
}

var burgerPrice = 180;
var quantity = 3;

console.log("Total Bill : ₹" + totalBill(burgerPrice, quantity));

//4. Welcome Employee
function welcomeEmployee(name, department) {
    console.log("Welcome " + name);
    console.log("Department : " + department);
}

var employeeName = "Naveen";
var department = "Development";

welcomeEmployee(employeeName, department);


//5. Shopping Discount
function finalAmount(price, discount) {
    return price - discount;
}

var price = 5000;
var discount = 500;

console.log("Final Amount : ₹" + finalAmount(price, discount));


//6. Company Login
function login(callback) {
    console.log("Login Successful");
    callback();
}

function dashboard() {
    console.log("Loading Dashboard...");
}

login(dashboard);


//7. Food Delivery
function processOrder(step) {
    step();
}

function orderReceived() {
    console.log("Order Received");
}

function preparingFood() {
    console.log("Preparing Food");
}

function outForDelivery() {
    console.log("Out for Delivery");
}

function delivered() {
    console.log("Delivered");
}

processOrder(orderReceived);
processOrder(preparingFood);
processOrder(outForDelivery);
processOrder(delivered);


//8.Lucky Draw
function* luckyDraw() {
    yield "10%";
    yield "20%";
    yield "50%";
    yield "Better Luck Next Time";
}

var coupon = luckyDraw();

console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);



//9. Employee Bonus
function bonus(salary) {
    return function(bonusAmount) {
        return salary + bonusAmount;
    }
}

console.log("Total Salary : " + bonus(50000)(5000));


//10. Merge Employee Details
var employeePersonal = {
    name: "vijay",
    age: 32
};

var employeeOffice = {
    department: "Development",
    salary: 50000
};

var employeeDetails = {
    ...employeePersonal,
    ...employeeOffice
};

console.log(employeeDetails);

//11. Shopping Cart

var cart1 = ["Virat Kohli", "MS Dhoni", "Rohit Sharma"];
var cart2 = ["Sachin Tendulkar", "Rahul Dravid", "Sourav Ganguly"];

var mergedCart = [...cart1, ...cart2];

console.log(mergedCart);


//12. Student Marks
function student(name, ...marks) {
    console.log("Student : " + name);

    let total = 0;

    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }

    let average = total / marks.length;

    console.log("Total Marks : " + total);
    console.log("Average : " + average);
}

student("Naveen", 90, 85, 88, 95);


//13. Product Details
var product = {
    name: "Laptop",
    price: 65000,
    brand: "Dell",
    stock: 20
};

var { name, price } = product;

console.log("Name : " + name);
console.log("Price : " + price);


//14. Customer Details
var customer = [101, "Naveen", "Chennai", 9876543210];

var [id, name, city] = customer;

console.log("ID : " + id);
console.log("Name : " + name);
console.log("City : " + city);

//15. Add Product
var cart = ["Mobile", "Laptop"];

cart.push("Headphone");

console.log(cart);


//16. Remove Last Product
var cart = ["Mobile", "Laptop", "Headphone"];

cart.pop();

console.log(cart);


//17. Replace Employee
var employees = ["Rahul", "Arun", "John", "David"];

// replace "John" with "Naveen"
employees.splice(2, 1, "Naveen");

console.log(employees);

//18. Search Product
var products = ["Mouse", "Keyboard", "Monitor", "Laptop"];

var result = products.includes("Laptop");

console.log(result);


//19. Employee Ranking
var salaries = [25000, 45000, 30000, 70000];

salaries.sort(function(a, b) {
    return a - b;
});

console.log(salaries);


//20. Reverse Chat Messages
var messages = ["Hi", "Hello", "How are you?", "Good Morning"];

messages.reverse();

console.log(messages);


//Employee Management System
var employees = [];

// 1. Add Employee
function addEmployee(id, name, salary, bonus) {
    employees.push({ id, name, salary, bonus });
}

// 2. View Employees
function viewEmployees() {
    console.log("Employee List:");
    console.log(employees);
}

// 3. Search Employee by ID
function searchById(empId) {
    var emp = employees.find(e => e.id === empId);
    console.log(emp ? emp : "Employee not found");
}

// 4. Calculate Salary + Bonus
function totalSalary(empId) {
    var emp = employees.find(e => e.id === empId);
    if (emp) {
        console.log("Total Salary: " + (emp.salary + emp.bonus));
    } else {
        console.log("Employee not found");
    }
}

// 5. Remove Employee
function removeEmployee(empId) {
    employees = employees.filter(e => e.id !== empId);
}

// 6. Sort Employees by Salary
function sortBySalary() {
    employees.sort((a, b) => a.salary - b.salary);
    console.log(employees);
}

// 7. Find Employee by Name
function findByName(name) {
    var emp = employees.find(e => e.name === name);
    console.log(emp ? emp : "Employee not found");
}

// 8. Display using Destructuring
function displayEmployee(empId) {
    var emp = employees.find(e => e.id === empId);

    if (emp) {
        var { id, name, salary, bonus } = emp;

        console.log("ID : " + id);
        console.log("Name : " + name);
        console.log("Salary : " + salary);
        console.log("Bonus : " + bonus);
    } else {
        console.log("Employee not found");
    }
}

/* ---------------- TESTING ---------------- */

addEmployee(101,"vijay",50000, 5000);
addEmployee(102, "Kumar",4000, 4000);
addEmployee(103, "John", 60000, 7000);

viewEmployees();

searchById(102);

totalSalary(101);

findByName("John");

sortBySalary();

removeEmployee(102);

viewEmployees();

displayEmployee(101);