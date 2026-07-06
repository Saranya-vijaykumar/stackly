// TASK 1..stdent management system

let students = [
{
    name: "Naveen",
    id: 101,
    mark: 85
},
{
    name: "John",
    id: 102,
    mark: 45
},
{
    name: "Arun",
    id: 103,
    mark: 25
}
];
//1...print all students
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}
//2....only student names
for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
}
//3....print id-102
for (let i = 0; i < students.length; i++) {
    if (students[i].id === 102) {
        console.log(students[i]);
    }
}
//4...who passed mark 35
for (let i = 0; i < students.length; i++) {
    if (students[i].mark >= 35) {
        console.log(students[i]);
    }
}
//5...count total students
console.log("Total Students:", students.length);

//task 2..employee salary system
let employees = [
{
    name: "Naveen",
    salary: 30000
},
{
    name: "John",
    salary: 45000
},
{
    name: "Arun",
    salary: 60000
}
];
//1..highest salary
let highest = employees[0].salary;

for (let emp of employees) {
    if (emp.salary > highest) {
        highest = emp.salary;
    }
}

console.log("Highest Salary:", highest);
//2..lowest salary
let lowest = employees[0].salary;

for (let emp of employees) {
    if (emp.salary < lowest) {
        lowest = emp.salary;
    }
}

console.log("Lowest Salary:", lowest);
//3..5000 bonus
for (let emp of employees) {
    emp.salary += 5000;
}

console.log(employees);
//4..total salry
let total = 0;

for (let emp of employees) {
    total += emp.salary;
}

console.log("Total Salary:", total);
//5...above 40k
for (let emp of employees) {
    if (emp.salary > 40000) {
        console.log(emp);
    }
}
//task3..shopping cart
let products = [
{
    name: "Laptop",
    price: 50000
},
{
    name: "Mouse",
    price: 500
},
{
    name: "Keyboard",
    price: 1500
}
];
//1..product names
for (let product of products) {
    console.log(product.name);
}
//2..total bill 
let bill = 0;

for (let product of products) {
    bill += product.price;
}

console.log("Total Bill:", bill);
//3..prodict mouse
for (let product of products) {
    if (product.name === "Mouse") {
        console.log(product);
    }
}
//4..apply 10%discount
for (let product of products) {
    product.price = product.price - (product.price * 0.10);
}

console.log(products);
//5..final bill
let finalBill = 0;

for (let product of products) {
    finalBill += product.price;
}

console.log("Final Bill:", finalBill);

//TASK4..banking account
let account = {
    name: "Naveen",
    balance: 50000
};
//1..deposit 10k
account.balance += 10000;
//2..withdraw 5k
account.balance -= 5000;
//3..current balance
console.log(account.balance);
//4..balace check
if (account.balance < 20000) {
    console.log("Low Balance");
}
else {
    console.log("Balance is sufficient");
}
//5..account details
console.log(account);

//TASK6..company login
let username = prompt("Enter Username");
let password = prompt("Enter Password");

if (username === "admin" && password === "1234") {
    alert("Welcome");
}
else {
    alert("Invalid Username or Password");
}
//TASK7..traffic signal
let signal = prompt("Enter Signal");

switch (signal.toLowerCase()) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}
//TASK 7 ATM MACHINE
let balance = 50000;

let choice = Number(prompt(`
1. Balance
2. Deposit
3. Withdraw
4. Exit
`));

switch (choice) {
    case 1:
        alert(balance);
        break;

    case 2:
        let deposit = Number(prompt("Enter Amount"));
        balance += deposit;
        alert(balance);
        break;

    case 3:
        let withdraw = Number(prompt("Enter Amount"));
        balance -= withdraw;
        alert(balance);
        break;

    case 4:
        alert("Thank You");
        break;

    default:
        alert("Invalid Choice");
}

//TASK 8..CRICKET SCORE
let score = [10, 25, 40, 60, 80, 100];

let highest = Math.max(...score);
let lowest = Math.min(...score);

let total = 0;

for (let s of score) {
    total += s;
}

let average = total / score.length;

console.log("Highest:", highest);
console.log("Lowest:", lowest);
console.log("Total:", total);
console.log("Average:", average);

//TASK 9..MOVIE TICKET BOOKING\
let age = Number(prompt("Enter Age"));

if (age >= 18) {
    let booking = confirm("Book Ticket?");

    if (booking) {
        alert("Ticket Booked");
    }
}
else {
    alert("Not Allowed");
}

//TASK 10...HOSPITAL APPONTMET
let token = Number(prompt("Enter Token"));

switch (token) {
    case 1:
        console.log("Doctor A");
        break;

    case 2:
        console.log("Doctor B");
        break;

    case 3:
        console.log("Doctor C");
        break;

    default:
        console.log("Invalid Token");
}
//TASK..11..ARRAY METHODS
let fruits = ["Apple", "Orange", "Banana"];

console.log(fruits);

fruits.push("Mango");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift("Grapes");
console.log(fruits);

fruits.splice(1, 0, "Kiwi");
console.log(fruits);

let newFruits = fruits.slice(0, 2);
console.log(newFruits);

//TASK12..HIGHER ORDER METHODS
let employees = [
    { name: "A", salary: 20000 },
    { name: "B", salary: 35000 },
    { name: "C", salary: 50000 },
    { name: "D", salary: 70000 }
];
let bonus = employees.map(emp => ({
    ...emp,
    salary: emp.salary + 5000
}));

console.log(bonus);
let highSalary = employees.filter(emp => emp.salary > 30000);

console.log(highSalary);
let employee = employees.find(emp => emp.salary === 50000);

console.log(employee);
let total = employees.reduce((sum, emp) => {
    return sum + emp.salary;
}, 0);

console.log(total);
console.log(
    employees.some(emp => emp.salary > 60000)
);
console.log(
    employees.every(emp => emp.salary > 15000)
);

//TASK 13..STRING PRCATICE
let company = " Stackly IT ";

console.log(company.toUpperCase());

console.log(company.toLowerCase());

console.log(company.trim());

console.log(company.replace("IT", "Software"));

console.log(company.includes("Stackly"));

console.log(company.trim().split(" "));

//TASK 14..DIGITAL CLOCK
let timer = setInterval(() => {
    let now = new Date();

    console.log(now.toLocaleTimeString());
}, 1000);

setTimeout(() => {
    clearInterval(timer);
    console.log("Clock Stopped");
}, 10000);

//TASK 15..FAKE STORE API

fetch("https://fakestoreapi.com/products")
.then(res => res.json())
.then(data => {

    data.forEach(product => {
        console.log(product.title);
    });

    data.forEach(product => {
        console.log(product.price);
    });

    let costly = data.filter(product => product.price > 100);
    console.log(costly);

    console.log("Total Products:", data.length);

    let categories = data.map(product => product.category);
    console.log(categories);
});

//FINAL  MINIPROJECT ..EMPLOYEE PAYROLL SYSTEM

let employees = [
    { id: 101, name: "Naveen", salary: 30000 },
    { id: 102, name: "John", salary: 45000 },
    { id: 103, name: "Arun", salary: 60000 }
];

function viewEmployees() {
    console.table(employees);
}

function searchEmployee(id) {
    return employees.find(emp => emp.id === id);
}

function addBonus() {
    employees = employees.map(emp => ({
        ...emp,
        salary: emp.salary + 5000
    }));
}

function highestSalary() {
    return Math.max(...employees.map(emp => emp.salary));
}

function lowestSalary() {
    return Math.min(...employees.map(emp => emp.salary));
}

function totalSalary() {
    return employees.reduce((sum, emp) => {
        return sum + emp.salary;
    }, 0);
}

function salaryAbove40k() {
    return employees.filter(emp => emp.salary > 40000);
}

function report() {
    console.log(`
Employee Report
Date : ${new Date().toLocaleString()}
Total Salary : ${totalSalary()}
Highest Salary : ${highestSalary()}
Lowest Salary : ${lowestSalary()}
`);
}

viewEmployees();
console.log(searchEmployee(102));
addBonus();
console.log(salaryAbove40k());
report();

fetch("https://fakestoreapi.com/users")
.then(res => res.json())
.then(data => console.log(data));