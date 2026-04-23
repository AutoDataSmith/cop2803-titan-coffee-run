import { User } from "./modules/User.js";
import { StorageManager } from "./modules/StorageManager.js";
import { FormValidator } from "./modules/FormValidator.js";

// Validation is implemented in two layers:
// 1. Real-time validation for user experience (prevents invalid submission)
// 2. Submit-time validation as a defensive fallback
// Some helper messages may rarely appear due to the disabled submit button,
// but are retained to ensure robustness and completeness

/*
AI Review Notes
Accepted suggestions:
1. Use modular ES6 classes to separate validation, storage, and user data responsibilities.
2. Add real-time feedback for password strength and password matching.
3. Check for duplicate email addresses before creating a new account.

Rejected or simplified suggestions:
1. Did not add debouncing because the current form is small and performs well without it.
2. Did not add encryption or password hashing because this is a client-side classroom project without a backend.
3. Did not implement a more advanced validation summary workflow because the simpler summary table meets the assignment needs with less complexity.
*/

function renderSimpleSummaryTable(userData) {
    const container = document.getElementById("resultsContainer");
    container.innerHTML = "";

    const table = document.createElement("table");
    table.className = "validation-table";

    const tbody = document.createElement("tbody");

    Object.entries(userData).forEach(([key, value]) => {
        const row = document.createElement("tr");

        const fieldCell = document.createElement("td");
        fieldCell.textContent = key;

        const valueCell = document.createElement("td");
        valueCell.textContent = value;

        row.appendChild(fieldCell);
        row.appendChild(valueCell);

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    container.appendChild(table);
}

document.addEventListener("DOMContentLoaded", () => {
    const registrationForm = document.getElementById("registrationForm");
    const registerButton = document.getElementById("registerButton");

    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const termsInput = document.getElementById("terms");

    const passwordStrength = document.getElementById("passwordStrength");
    const passwordMatch = document.getElementById("passwordMatch");

    const storageManager = new StorageManager();
    const formValidator = new FormValidator(registrationForm);
    
    console.log("Registration page ready.");    

    let hasInitialized = false;

    function updateFormState() {
        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        const termsChecked = termsInput.checked;

        const firstNameValid = formValidator.validateMinLength(firstName, 2);
        const lastNameValid = formValidator.validateMinLength(lastName, 2);
        const emailFormatValid = formValidator.validateEmail(email);
        const passwordValid = formValidator.validatePassword(password);
        const passwordsMatch = formValidator.validatePasswordMatch(password, confirmPassword);
        const termsValid = formValidator.validateCheckbox(termsChecked);

        let emailIsAvailable = true;


        if (email === "") {
            if (!hasInitialized || document.activeElement === emailInput) {
                formValidator.clearError("emailHelper");
            } else {
                formValidator.showError("emailHelper", "This field is required");
            }
            emailIsAvailable = false;
        } else if (!emailFormatValid) {
            formValidator.showError("emailHelper", "Enter a valid email address");
            emailIsAvailable = false;
        } else if (storageManager.findUserByEmail(email)) {
            formValidator.showError("emailHelper", "This email is already registered");
            emailIsAvailable = false;
        } else {
            formValidator.clearError("emailHelper");
        }

       const strengthMessage = formValidator.getPasswordStrengthMessage(password);

        passwordStrength.textContent = strengthMessage;

        // reset classes
        passwordStrength.className = "helper-message";

        if (strengthMessage === "Weak password") {
            passwordStrength.classList.add("weak");
        } else if (strengthMessage === "Medium password") {
            passwordStrength.classList.add("medium");
        } else if (strengthMessage === "Strong password") {
            passwordStrength.classList.add("strong");
        }

        passwordMatch.className = "helper-message";

        if (confirmPassword === "") {
            passwordMatch.textContent = "";
        } else if (passwordsMatch) {
            passwordMatch.textContent = "Passwords match";
            passwordMatch.classList.add("match");
        } else {
            passwordMatch.textContent = "Passwords do not match";
            passwordMatch.classList.add("no-match");
        }

        const allFieldsExceptTermsValid =
            firstNameValid &&
            lastNameValid &&
             emailFormatValid &&
            emailIsAvailable &&
            passwordValid &&
            passwordsMatch;

        if (!termsChecked && allFieldsExceptTermsValid) {
            formValidator.showError("termsHelper", "You must agree to the terms");
        } else {
            formValidator.clearError("termsHelper");
        }

        registerButton.disabled = !(allFieldsExceptTermsValid && termsValid);
        
       
    }

    function updateFirstNameFeedback() {
        const firstName = firstNameInput.value.trim();

        if (firstName === "") {
            formValidator.showError("firstNameHelper", "Please enter at least 2 characters");
        } else if (!formValidator.validateMinLength(firstName, 2)) {
            formValidator.showError("firstNameHelper", "Please enter at least 2 characters");
        } else {
            formValidator.showValid("firstNameHelper", "Looks good!");
        }
    }

    function updateLastNameFeedback() {
        const lastName = lastNameInput.value.trim();

        if (lastName === "") {
            formValidator.showError("lastNameHelper", "Please enter at least 2 characters");
        } else if (!formValidator.validateMinLength(lastName, 2)) {
            formValidator.showError("lastNameHelper", "Please enter at least 2 characters");
        } else {
            formValidator.showValid("lastNameHelper", "Looks good!");
        }
    }

    firstNameInput.addEventListener("input", () => {
        updateFirstNameFeedback();
        updateFormState();
    });

    lastNameInput.addEventListener("input", () => {
        updateLastNameFeedback();
        updateFormState();
    });

    firstNameInput.addEventListener("blur", updateFirstNameFeedback);
    lastNameInput.addEventListener("blur", updateLastNameFeedback);
    
    emailInput.addEventListener("input", updateFormState);
    emailInput.addEventListener("blur", updateFormState);
    
    passwordInput.addEventListener("input", updateFormState);
    confirmPasswordInput.addEventListener("input", updateFormState);
    termsInput.addEventListener("change", updateFormState);


    function clearResultsTable() {
        const resultsContainer = document.getElementById("resultsContainer");
        resultsContainer.innerHTML = "";
    }    

    registrationForm.addEventListener("submit", (event) => {
        event.preventDefault();

        formValidator.clearAllErrors();

        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        const termsChecked = termsInput.checked;

        let isValid = true;
        const validationResults = [];
        clearResultsTable();

       if (!formValidator.validateRequired(firstName)) {
            formValidator.showError("firstNameHelper", "This field is required");
            validationResults.push({
                field: "First Name",
                valid: false,
                message: "This field is required"
            });
            isValid = false;
        } else {
            validationResults.push({
                field: "First Name",
                valid: true,
                message: firstName
            });
        }

        if (!formValidator.validateRequired(lastName)) {
            formValidator.showError("lastNameHelper", "This field is required");
            validationResults.push({
                field: "Last Name",
                valid: false,
                message: "This field is required"
            });
            isValid = false;
        } else {
            validationResults.push({
                field: "Last Name",
                valid: true,
                message: lastName
            });
        }

       if (!formValidator.validateRequired(email)) {
            formValidator.showError("emailHelper", "This field is required");
            validationResults.push({
                field: "Email",
                valid: false,
                message: "This field is required"
            });
            isValid = false;
        } else if (!formValidator.validateEmail(email)) {
            formValidator.showError("emailHelper", "Enter a valid email address");
            validationResults.push({
                field: "Email",
                valid: false,
                message: "Enter a valid email address"
            });
            isValid = false;
        } else if (storageManager.findUserByEmail(email)) {
            formValidator.showError("emailHelper", "This email is already registered");
            validationResults.push({
                field: "Email",
                valid: false,
                message: "This email is already registered"
            });
            isValid = false;
        } else {
            validationResults.push({
                field: "Email",
                valid: true,
                message: email
            });
        }

       if (!formValidator.validatePassword(password)) {
            formValidator.showError("passwordHelper", "This field is required");
            validationResults.push({
                field: "Password",
                valid: false,
                message: "This field is required"
            });
            isValid = false;
        } else {
            validationResults.push({
                field: "Password",
                valid: true,
                message: "Password entered"
            });
        }

       if (!formValidator.validateRequired(confirmPassword)) {
            formValidator.showError("confirmPasswordHelper", "This field is required");
            validationResults.push({
                field: "Confirm Password",
                valid: false,
                message: "This field is required"
            });
            isValid = false;
        } else if (!formValidator.validatePasswordMatch(password, confirmPassword)) {
            formValidator.showError("confirmPasswordHelper", "Passwords must match");
            validationResults.push({
                field: "Confirm Password",
                valid: false,
                message: "Passwords must match"
            });
            isValid = false;
        } else {
            validationResults.push({
                field: "Confirm Password",
                valid: true,
                message: "Passwords match"
            });
        }

       if (!formValidator.validateCheckbox(termsChecked)) {
            formValidator.showError("termsHelper", "You must agree to the terms");
            validationResults.push({
                field: "Terms",
                valid: false,
                message: "You must agree to the terms"
            });
            isValid = false;
        } else {
            validationResults.push({
                field: "Terms",
                valid: true,
                message: "Accepted"
            });
        }

        renderValidationTable(validationResults);

        if (!isValid) {
            console.log("Validation failed.");
            updateFormState();
            return;
        }

        const newUser = new User(firstName, lastName, email, password);
        const wasAdded = storageManager.addUser(newUser);

        if (wasAdded) {
            console.log("User added successfully.");

            renderSimpleSummaryTable({
                "First Name": firstName,
                "Last Name": lastName,
                "Email": email,
                "Password": "********",
                "Terms": "Accepted"
            });

            registrationForm.reset();
            passwordStrength.textContent = "";
            passwordMatch.textContent = "";
            registerButton.disabled = true;
            
        } else {
            formValidator.showError("emailHelper", "This email is already registered");
            console.log("Duplicate email. User was not added.");
        }
    });

    updateFormState();

    hasInitialized = true;

});