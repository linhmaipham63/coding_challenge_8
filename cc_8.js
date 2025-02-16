// Task 1: Function Declaration

// Write function calculateSalary that computes the net salary
function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate); 
    console.log(`Net Salary: $${netSalary.toFixed(2)}`); 
}

// Test Data:
calculateSalary(5000, 500, 0.1); 
calculateSalary(7000, 1000, 0.15); 


// Task 2: Function Expression

// Declare a function expression calculateDiscount(price, discountRate) to determine the final price.
calculateDiscount = function(price, discountRate) {
    let finalPrice = price - (price * discountRate); 
    console.log(`Final Price: $${finalPrice.toFixed(2)}`); 
}

// Test Data:
calculateDiscount(100, 0.2); 
calculateDiscount(250, 0.15); 


// Task 3: Arrow Function

// Write an arrow function calculateServiceFee(amount, serviceType) that applies a fee:
calculateServiceFee = (amount, serviceType) => {
    let fee = 0;
    if (serviceType === "Premium") fee = amount * 0.15; // "Premium" → 15% of the amount
    else if (serviceType === "Standard") fee = amount * 0.1; // "Standard" → 10% of the amount
    else fee = amount * 0.05; // "Basic" → 5% of the amount
    console.log(`Service Fee: $${fee.toFixed(2)}`);
}

// Test Data:
calculateServiceFee(200, "Premium"); // Expected output: "Service Fee: $30.00"
calculateServiceFee(500, "Standard"); // Expected output: "Service Fee: $50.00"

