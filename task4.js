let employees = [
    {
        name: "Ajay",
        id: 100,
        salary: 15000
    },
    {
        name: "Jaya",
        id: 101,
        salary: 20000
    },

{
        name: "Charan",
        id: 102,
        salary: 60000
    },
{
        name: "Reshma",
        id: 103,
        salary: 35000
    },
{
        name: "Pavi",
        id: 104,
        salary: 25000
    },


];

for (let emp of employees) {
    console.log(`Name: ${emp.name}, ID: ${emp.id}, Salary: ₹${emp.salary}`);

    if (emp.salary >= 50000) {
        console.log("Employee Eligible For Bonus");
    } else {
        console.log("Employee Not Eligible For Bonus");
    }
}




let mark1 = 50;
let mark2 = 67;
let mark3 = 45;
let mark4 = 35;
let mark5 = 79;



let total = mark1 + mark2 + mark3 +  mark4 + mark5;
let percentage = total / 5;

console.log("Total Marks:", total);
console.log("Percentage:", percentage);

if (percentage >= 90) {
    console.log("Grade: A+");
} else if (percentage >= 80) {
    console.log("Grade: A");
} else if (percentage >= 70) {
    console.log("Grade: B");
} else if (percentage >= 60) {
    console.log("Grade: C");
} else {
    console.log("Grade: Fail");
}





let products = [
    { name: "Lens", price: 150000 },
    { name: "Skotch", price: 3000 },
    { name: "Crockery", price: 1000 }
];

function calculateBill(items) {
    let total = 0;

    for (let item of items) {
        total += item.price;
    }

    console.log("Original Bill: ₹" + total);

    if (total > 5000) {
        let discount = total * 0.10;
        total -= discount;
        console.log("Discount Applied: ₹" + discount);
    }

    console.log("Final Bill: ₹" + total);
}

calculateBill(products);





let username = "Sezhadih";
let password = "012345";

let result =
    (username === "admin" && password === "1357")
        ? "Login Success"
        : "Invalid Credentials";

console.log(result);




let signal = "Yellow";

switch (signal) {
    case "Red":
        console.log("Stop");
        break;

    case "Yellow":
        console.log("Ready");
        break;

    case "Green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}




let balance = 10000;
let withdrawalAmount = 12000;

if (withdrawalAmount <= balance) {
    balance -= withdrawalAmount;

    console.log("Withdrawal Successful");
    console.log("Remaining Balance: ₹" + balance);
} else {
    console.log("Insufficient Balance");
}




function placeOrder(callback) {
    console.log("Order Received");

    callback();
}

function prepareFood(callback) {
    console.log("Food Preparing");

    callback();
}

function deliverFood() {
    console.log("Food Delivered");
}

placeOrder(() => {
    prepareFood(() => {
        deliverFood();
    });
});




function* cashbackOffers() {
    yield "10% Cashback";
    yield "20% Cashback";
    yield "50% Cashback";
    yield "Better Luck Next Time";
}

const offers = cashbackOffers();

console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);





let age = 40;
let weight = 75;

if (age > 18) {

    if (weight > 50) {
        console.log("Eligible For Treatment");
    } else {
        console.log("Not Eligible");
    }

} else {
    console.log("Not Eligible");
}



let professionals = [
    {
        id: 100,
        name: "Naveen",
        salary: 50000
    },
    {
        id: 250,
        name: "Sind",
        salary: 25000
    }
];


function addEmployee(id, name, salary) {
    employees.push({
        id,
        name,
        salary
    });

    console.log("Employee Added");
}


function viewEmployees() {
    console.log("\nEmployee List");

    employees.forEach(emp => {
        console.log(emp);
    });
}


function calculateBonus() {
    console.log("\nBonus Eligibility");

    employees.forEach(emp => {

        if (emp.salary >= 50000) {
            console.log(`${emp.name} - Eligible For Bonus`);
        } else {
            console.log(`${emp.name} - Not Eligible For Bonus`);
        }

    });
}


function searchEmployee(id) {

    let employee = employees.find(emp => emp.id === id);

    if (employee) {
        console.log("Employee Found");
        console.log(employee);
    } else {
        console.log("Employee Not Found");
    }
}


function deleteEmployee(id) {

    let index = employees.findIndex(emp => emp.id === id);

    if (index !== -1) {
        employees.splice(index, 1);
        console.log("Employee Deleted");
    } else {
        console.log("Employee Not Found");
    }
}


function totalEmployees() {
    console.log("Total Employees:", employees.length);
}



addEmployee(275, "Vinusha", 45000);

viewEmployees();

calculateBonus();

searchEmployee(102);

deleteEmployee(101);

totalEmployees();

viewEmployees();