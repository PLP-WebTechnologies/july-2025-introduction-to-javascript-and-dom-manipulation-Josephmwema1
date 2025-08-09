// ----------------------
// PART 1: Variables & Conditionals
// ----------------------
let userName = "John";
let userAge = 20;

if (userAge >= 18) {
    console.log(`${userName} is an adult.`);
} else {
    console.log(`${userName} is not an adult.`);
}

// ----------------------
// PART 2: Functions
// ----------------------
function greetUser(name) {
    console.log(`Hello, ${name}! Welcome to the site.`);
}

function multiplyNumbers(a, b) {
    return a * b;
}

greetUser(userName);
console.log("Multiplication result:", multiplyNumbers(5, 6));

// ----------------------
// PART 3: Loops
// ----------------------
let colors = ["red", "green", "blue"];

// For loop
for (let i = 0; i < colors.length; i++) {
    console.log(`Color: ${colors[i]}`);
}

// For...of loop
for (let color of colors) {
    console.log(`(for...of) Color: ${color}`);
}

// ----------------------
// PART 4: DOM Interactions
// ----------------------

// 1. Change text content
document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementById("message").textContent = "Text has been changed!";
});

// 2. Add new list items
let listContainer = document.getElementById("listContainer");
colors.forEach(function(color) {
    let li = document.createElement("li");
    li.textContent = color;
    listContainer.appendChild(li);
});

// 3. Change button style dynamically
document.getElementById("changeTextBtn").style.backgroundColor = "purple";
