// Coding Challenge 02a

// Code goes here
// Step 1:
let productName = "Iphone 16";
let costPerUnit = 420.00;
let basePrice = 799.00;
let discountRate = 0.15;
let salesTaxRate = 0.07;
let fixedMonthlyCosts = 20000;

// Step 2:
let discountedPrice = basePrice * (1 - discountRate);
let finalPriceWithTax = discountedPrice * (1 + salesTaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit;
let breakEvenUnits = Math.ceil(fixedMonthlyCosts/profitPerUnit);
let isProfitablePerUnit = profitPerUnit > 0;

//Step 3:
console.log("Product Pricing Summary");
console.log(`Product Name: ${productName}`);
console.log(`Discounted Price (before tax): \$${discountedPrice.toFixed(2)}`);
console.log(`Final Price with Tax: \$${finalPriceWithTax.toFixed(2)}`);
console.log(`Profit Per Unit: \$${profitPerUnit.toFixed(2)}`);
console.log(`Break-even Units: ${breakEvenUnits.toFixed(2)}`);
console.log(`Per-Unit Profitability: ${isProfitablePerUnit}`);

