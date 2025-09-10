let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let h3El = document.getElementById("h3")
let count = 0;
let value = 1; // default increment\


function increment() {
    count += value;
    countEl.textContent = count;
    localStorage.setItem("count", count);
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    localStorage.setItem("savedEntries", saveEl.textContent); // Save entries
    localStorage.setItem("count", 0); // Reset count in storage
    count = 0;
    countEl.textContent = 0;
}



function incrementChange() {
    let input = document.getElementById("incrementInput")
      let newValue = parseInt(input.value);

    if (isNaN(newValue)) {
        alert("Please enter a valid number.");
        return;
    }

    value = newValue; 
    count += value;   
    countEl.textContent = count;

    localStorage.setItem("incrementValue", value);


h3El.textContent = "increment By: " + value
}

h3El.textContent = "increment By: " + value


window.onload = function () {
    let savedCount = localStorage.getItem("count");
    let savedEntries = localStorage.getItem("savedEntries");
    let savedIncrement = localStorage.getItem("incrementValue");

    if (savedCount !== null) {
        count = parseInt(savedCount);
        countEl.textContent = count;
    }

    if (savedEntries !== null) {
        saveEl.textContent = savedEntries;
    }

    if (savedIncrement !== null) {
        value = parseInt(savedIncrement);
        h3El.textContent = "Increment By: " + value;
    }
};
