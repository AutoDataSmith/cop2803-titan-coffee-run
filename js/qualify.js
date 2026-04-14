/*
  qualify.js
  Titan Coffee Run - Assignment 3

  Purpose:
  This file will handle:
  - Form validation
  - Credit qualification logic
  - Reset functionality
  - Displaying validation results
*/

// Wait until the HTML page is fully loaded before running JavaScript
document.addEventListener("DOMContentLoaded", () => {

    // Get references to important form elements 
    const applicationForm = document.getElementById("creditApplicationForm");
    // Get references to important form elements 
    const applyButton = document.getElementById("applyButton");
    const resetButton = document.getElementById("resetButton");

    // Check that the form and buttons were found successfully
    console.log("Form found:", applicationForm);
    console.log("Apply button found:", applyButton);
    console.log("Reset button found:", resetButton);

    // Helper function to display an error message
    function showError(elementId, message) {
        document.getElementById(elementId).textContent = message;
    }

    // Helper function to clear all error messages
    function clearErrors() {
        const errorElements = document.querySelectorAll(".error-message");
        errorElements.forEach((el) => {
            el.textContent = "";
        });
    }

    // Listen for form submission
    applicationForm.addEventListener("submit", (event) => {
    
    // Stop the form from submitting and refreshing the page (Turns off browser html POST Default behavior)
    event.preventDefault();
    
    console.log("Form submission started...");

    // Clear previous errors
    clearErrors();

    // Get field values
    const email = document.getElementById("email").value.trim();
    const confirmEmail = document.getElementById("confirmEmail").value.trim();
    const firstName = document.getElementById("firstName").value.trim();
    
    let isValid = true;

    // Validate email field - required / cant be empty
    if (email === "") {
    showError("emailError", "This field is required");
    isValid = false;
    }

      // Validate email fields - must match
    if (email !== confirmEmail) {
        showError("confirmEmailError", "This entry must equal the first entry");
        isValid = false;
    }

    // Validate first name - required / cant be empty
    if (firstName === "") {
        showError("firstNameError", "This field is required");
        isValid = false;
    }

    // Check validation result so far...
    if (isValid) {
        console.log("Basic validation passed.");
    } else {
        console.log("Validation failed.");
    }

  });

  // TODO:
  // - Add event listener for form submission - COMPLETE
  // - Validate form fields
  // - Display error messages
  // - Determine credit qualification
  // - Display results to user

});