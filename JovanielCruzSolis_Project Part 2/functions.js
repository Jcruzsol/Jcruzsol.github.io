// Convert a number to text
function numberToText(number) {
    const numberTextMap = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten'
    };
    return numberTextMap[number] || 'unknown';
}

// Array of cruise fun facts
// Use a Math method
const funFacts = [
    "The world's largest cruise ship is Symphony of the Seas, operated by Royal Caribbean International.",
    "The Titanic was one of the largest ships afloat at the time of its maiden voyage in 1912.",
    "The average cruise ship passenger consumes about " + numberToText(8) + " alcoholic drinks per day.",
    "Cruise ships have their own morgues in case of fatalities on board.",
    "Cruise ships have more than one swimming pool; some even have water slides and wave pools.",
    "The word 'cruise' originates from the Dutch word 'kruisen', meaning 'to cross'.",
    "Cruise ships have their own dedicated onboard art galleries and auctions."
];

// Function to display a random fun fact
function displayRandomFunFact() {
    // Generate a random index within the range of the array length
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    // Display the random fun fact on the webpage
    document.getElementById('fun-fact').textContent = funFacts[randomIndex];
}

// Call the function to display a random fun fact when the page loads
window.onload = displayRandomFunFact;

console.log("functions.js file loaded successfully!");


// Create and call a JavaScript function that keeps track of the current day and time //
function updateCurrentDateTime() {
    // Get the current date and time
    const currentDate = new Date();

    // Format the date and time
    const dateTimeString = currentDate.toLocaleString();

    // Update the content of the placeholder element
    const currentDateTimeElement = document.getElementById('currentDateTime');
    currentDateTimeElement.textContent = 'Current Date and Time: ' + dateTimeString;
}

// Call the function to update the current date and time immediately
updateCurrentDateTime();

// Update the current date and time every second
// Delay one command or run a command at a specified interval
setInterval(updateCurrentDateTime, 1000);

// JavaScript code for the countdown timer
// Include a countdown function
function updateCountdown() {
    // Sets the date of the next cruise (year, month (0-based), day, hour, minute, second)
    var nextCruiseDate = new Date(2024, 8, 15, 12, 0, 0);

    // Gets the current date and time1
    var currentDate = new Date();

    // Calculates the time difference between the current date and the next cruise date
    var timeDifference = nextCruiseDate.getTime() - currentDate.getTime();

    // Calculates days, hours, minutes, and seconds
    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Displays the countdown timer
    document.getElementById("countdown").innerHTML = "Time Left Until Next Cruise: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s";

    // Updates the countdown every second
    setTimeout(updateCountdown, 1000);
}

// Call the function to start the countdown
updateCountdown();



// Function to clear radio buttons for cruise experience
function clearCruiseExperience() {
    document.getElementsByName("cruiseExperience").forEach(radio => radio.checked = false);
	}

// Call the function to clear cruise experience radio buttons
document.getElementsByName("clearCruiseExperience")[0].addEventListener("click", clearCruiseExperience);

// Function to handle form submission
document.getElementById("ratingForm").addEventListener("submit", function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Check if all required fields are filled
    const cruiseExperienceChecked = document.querySelector('input[name="cruiseExperience"]:checked');
    const cruiseLineChecked = document.querySelector('input[name="cruiseLine"]:checked');
    const overallExperienceChecked = document.querySelector('input[name="overallExperience"]:checked');
    const daysTraveledValue = document.getElementsByName("daysTraveled")[0].value;
    const entertainmentValue = document.getElementsByName("entertainment")[0].value;
    const activityChecked = document.querySelector('input[name="activity"]:checked');

    // Send an alert using JavaScript
    if (cruiseExperienceChecked && cruiseLineChecked && overallExperienceChecked && daysTraveledValue && entertainmentValue && activityChecked) {
        // Form submitted successfully
        showAlert("Form submitted successfully!");
    } else {
        // Form submission failed due to missing fields
        showAlert("Please fill in all required fields before submitting the form.");
    }
});

// Function to show an alert
function showAlert(message) {
    alert(message);
}

// Function to handle form submission
document.getElementById("commentForm").addEventListener("submit", function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Check if all required fields are filled
    const nameValue = document.getElementById("name").value;
    const emailValue = document.getElementById("email").value;
    const destinationValue = document.getElementById("destination").value;
    const feedbackValue = document.getElementById("feedback").value;
    const commentsValue = document.getElementById("comments").value;

    // Display confirmation or error message
    if (nameValue && emailValue && destinationValue && feedbackValue && commentsValue) {
        // Form submitted successfully
        showAlert("Form submitted successfully!");
        // Clear the form fields
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("destination").value = "";
        document.getElementById("feedback").value = "";
        document.getElementById("comments").value = "";
    } else {
        // Form submission failed due to missing fields
        showAlert("Please fill in all required fields before submitting the form.");
    }
});
