// Task 1: Function Declaration

// Write function calculateSalary that computes the net salary
function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate); 
    console.log(`Net Salary: $${netSalary.toFixed(2)}`); 
}

// Test Data:
calculateSalary(5000, 500, 0.1); 
calculateSalary(7000, 1000, 0.15); 

