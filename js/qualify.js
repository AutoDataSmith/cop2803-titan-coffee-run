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

  // Listen for form submission
  applicationForm.addEventListener("submit", (event) => {
    
    // Stop the form from submitting and refreshing the page
    event.preventDefault();

    console.log("Apply button clicked and form submission prevented.");
  });

  // TODO:
  // - Add event listener for form submission - COMPLETE
  // - Validate form fields
  // - Display error messages
  // - Determine credit qualification
  // - Display results to user

});