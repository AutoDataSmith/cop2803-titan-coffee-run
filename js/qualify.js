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

    function showResult(message, isSuccess) {
        const resultsContainer = document.getElementById("resultsContainer");

        resultsContainer.textContent = message;

        if (message === "") {
            // Reset styling if no message
            resultsContainer.style.color = "";
            return;
        }

        if (isSuccess) {
            resultsContainer.style.color = "green";
        } else {
            resultsContainer.style.color = "red";
        }
    }
    
    // this function finds and removes the whole validation summary table from the DOM
    function clearValidationSummaryTable() {
        const existingTable = document.getElementById("validationSummary");
        if (existingTable) {
            existingTable.remove();
        }
    }

    // This function creates a table of of the vaidation state
    function displayValidationSummaryTable(summaryData) {
        clearValidationSummaryTable();  // dump previous table from DOM

        const resultsContainer = document.getElementById("resultsContainer");

        const table = document.createElement("table");
        table.id = "validationSummary";
        table.classList.add("summary-table");

        const thead = document.createElement("thead");
        thead.innerHTML = `
            <tr>
                <th>Field Name</th>
                <th>Status</th>
                <th>Value / Error</th>
            </tr>
        `;

        const tbody = document.createElement("tbody");

        // iterate through the validation array and add the data rows 
        summaryData.forEach((item) => {
            const row = document.createElement("tr");
            
            // creates the individual columns and applies classes based on validity
            row.innerHTML = `
                <td>${item.field}</td>                
                <td class="${item.status === "Valid" ? "status-valid" : "status-invalid"}">
                    ${item.status}
                </td>
                <td class="${item.status === "Valid" ? "status-valid" : "status-invalid"}">
                    ${item.details}
                </td>
            `;

            tbody.appendChild(row);
        });

        // Bubble up created elements to the DOM
        table.appendChild(thead);
        table.appendChild(tbody);
        resultsContainer.appendChild(table);
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
    const lastName = document.getElementById("lastName").value.trim();
    const city = document.getElementById("city").value.trim();
    const state = document.getElementById("state").value;
    const zipCode = document.getElementById("zipCode").value.trim();
    const grossIncome = document.getElementById("grossIncome").value.trim();
    const ssnLast4 = document.getElementById("ssnLast4").value.trim();
    const consentChecked = document.getElementById("consent").checked;

    let isValid = true;
    const summaryData = []; // array to hold validation results

    // Validate email field - required / cant be empty
    if (email === "") {
        showError("emailError", "This field is required");
         summaryData.push({
            field: "Email Address",
            status: "Invalid",
            details: "This field is required"
        });
        isValid = false;
    } else if (email !== confirmEmail) {
        showError("confirmEmailError", "This entry must equal the first entry");
        summaryData.push({
            field: "Re-enter Email Address",
            status: "Invalid",
            details: "This entry must equal the first entry"
        });
        isValid = false;
    } else{
        summaryData.push({
            field: "Re-enter Email Address",
            status: "Valid",
            details: confirmEmail
        });
    }

    // Validate first name - required / cant be empty
    if (firstName === "") {
        showError("firstNameError", "This field is required");
        summaryData.push({
            field: "First Name",
            status: "Invalid",
            details: "This field is required"
        });
        isValid = false;
    } else{
        summaryData.push({
            field: "First Name",
            status: "Valid",
            details: firstName
        });
    }

     // Validate last name
    if (lastName === "") {
        showError("lastNameError", "This field is required");
        summaryData.push({
            field: "Last Name",
            status: "Invalid",
            details: "This field is required"
        });
        isValid = false;
    } else{
        summaryData.push({
            field: "Last Name",
            status: "Valid",
            details: lastName
        });
    }

    // Validate city
    if (city === "") {
        showError("cityError", "This field is required");
        summaryData.push({
            field: "City",
            status: "Invalid",
            details: "This field is required"
        });
        isValid = false;
    } else {
        summaryData.push({
            field: "City",
            status: "Valid",
            details: city
        });
    }

    // Validate state
    if (state === "") {
        showError("stateError", "This field is required");
        summaryData.push({
            field: "State",
            status: "Invalid",
            details: "This field is required"
        });
        isValid = false;
    } else {
        summaryData.push({
            field: "State",
            status: "Valid",
            details: state
        });
    }

    // Validate ZIP code
    if (zipCode === "") {
        showError("zipCodeError", "This field is required");
        summaryData.push({
            field: "ZIP Code",
            status: "Invalid",
            details: "This field is required"
        });
        isValid = false;
    } else if (!/^\d{5}$/.test(zipCode)) {
        showError("zipCodeError", "ZIP code must be 5 digits");
        summaryData.push({
            field: "ZIP Code",
            status: "Invalid",
            details: "ZIP code must be 5 digits"
        });
        isValid = false;
    } else {
        summaryData.push({
            field: "ZIP Code",
            status: "Valid",
            details: zipCode
        });
    }

    // Validate gross income
    if (grossIncome === "") {
        showError("grossIncomeError", "This field is required");
        summaryData.push({
            field: "Gross Income",
            status: "Invalid",
            details: "This field is required"
        });
        isValid = false;
    } else if (Number(grossIncome) <= 0) {
        showError("grossIncomeError", "Income must be a positive number");
        summaryData.push({
            field: "Gross Income",
            status: "Invalid",
            details: "Income must be a positive number"
        });
        isValid = false;
    } else {
        summaryData.push({
            field: "Gross Income",
            status: "Valid",
            details: grossIncome
        });
    }

    // Validate SSN last 4
    if (ssnLast4 === "") {
        showError("ssnLast4Error", "This field is required");
        summaryData.push({
            field: "Last 4 Digits of SSN",
            status: "Invalid",
            details: "This field is required"
        });
        isValid = false;
    } else if (!/^\d{4}$/.test(ssnLast4)) {
        showError("ssnLast4Error", "SSN must be exactly 4 digits");
        summaryData.push({
            field: "Last 4 Digits of SSN",
            status: "Invalid",
            details: "SSN must be exactly 4 digits"
        });
        isValid = false;
    } else {
        summaryData.push({
            field: "Last 4 Digits of SSN",
            status: "Valid",
            details: ssnLast4
        });
    }

    // Validate consent checkbox
    if (!consentChecked) {
        showError("consentError", "You must agree before applying");
        summaryData.push({
            field: "Consent",
            status: "Invalid",
            details: "You must agree before applying"
        });
        isValid = false;
    } else {
        summaryData.push({
            field: "Consent",
            status: "Valid",
            details: "Checked"
        });
    }

    // Check validation and if vaild, show results
    if (isValid) {
        console.log("All validation checks passed.");
        clearValidationSummaryTable();

        const incomeValue = Number(grossIncome);

        if (incomeValue > 20000) {
            showResult(
            "Congratulations, you are qualified for a credit line. A credit card will be sent to you in the mail.",
            true
            );
        } else {
            showResult(
            "We're sorry, you do not qualify for a credit line at this time.",
            false
            );
        }

    } else {
        console.log("Validation failed.");
        // Clear result if validation fails and show validation status table
        showResult("", false);
        displayValidationSummaryTable(summaryData);
    }

  });

  // CRITICAL TASK LIST:
  // - Add event listener for form submission - COMPLETE
  // - Validate form fields - COMPLETE  
  // - Determine credit qualification COMPLETE
  // - Display results to user - COMPLETE
  // - Display summary section for validation results - COMPLETE


});