let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let h3El = document.getElementById("h3")
let count = 0;
let value = 1; // default increment\


function increment() {
    count += value;
    countEl.textContent = count;
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}

function incrementChange() {
    let input = prompt("Enter increment value:");
    let newValue = parseInt(input);

    if (isNaN(newValue)) {
        alert("Please enter a valid number.");
        return;
    }

    value = newValue; 
    count += value;   
    countEl.textContent = count;

h3El.textContent = "increment By: " + value
}

h3El.textContent = "increment By: " + value