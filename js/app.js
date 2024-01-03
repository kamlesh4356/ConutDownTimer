// Set the end date for the countdown timer
const endDate = "1 Jan 2030 10:00:00 PM";

// Display the end date in an HTML element with the id "end-date"
document.getElementById("end-date").innerText = endDate;

// Select all input elements on the page
const inputs = document.querySelectorAll("input");

// Define a function called clock
function clock() {
    // Convert the end date string into a Date object
    const end = new Date(endDate);

    // Get the current date and time
    const now = new Date();

    // Calculate the time difference between the end date and the current date in seconds
    const diff = (end - now) / 1000;

    // If the time difference is less than 0 (i.e., the end date has passed), return from the function
    if (diff < 0) return;

    // Update the input fields with the remaining days, hours, minutes, and seconds
    inputs[0].value = Math.floor(diff / 3600 / 24); // days
    inputs[1].value = Math.floor(diff / 3600) % 24;   // hours
    inputs[2].value = Math.floor(diff / 60) % 60;     // minutes
    inputs[3].value = Math.floor(diff) % 60;           // seconds
}

// Call the clock function immediately to set the initial values
clock();

// Set up a setInterval to call the clock function every 1000 milliseconds (1 second)
setInterval(() => {
    clock();
}, 1000);
