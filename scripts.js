// JavaScript file: script.js

function handleSubmit(event) {
    event.preventDefault();

    // Simulate a submission delay
    setTimeout(() => {
        // Display the confirmation message
        document.getElementById("confirmation").style.display = "block";
        
        // Clear the form fields after submission
        document.getElementById("enquiry-form").reset();
    }, 500); // 500ms delay for a simulated submission process
}
