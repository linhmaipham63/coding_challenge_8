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

