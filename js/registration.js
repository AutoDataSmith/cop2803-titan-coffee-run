import { User } from "./modules/User.js";
import { StorageManager } from "./modules/StorageManager.js";
import { FormValidator } from "./modules/FormValidator.js";

// Validation is implemented in two layers:
// 1. Real-time validation for user experience (prevents invalid submission)
// 2. Submit-time validation as a defensive fallback
// Some helper messages may rarely appear due to the disabled submit button,
// but are retained to ensure robustness and completeness

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

    

    function updateFormState() {
        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        const termsChecked = termsInput.checked;

        let emailIsAvailable = true;

        if (email === "") {
            formValidator.clearError("emailHelper");
            emailIsAvailable = false;
        } else if (!formValidator.validateEmail(email)) {
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
        } else if (formValidator.validatePasswordMatch(password, confirmPassword)) {
            passwordMatch.textContent = "Passwords match";
            passwordMatch.classList.add("match");
        } else {
            passwordMatch.textContent = "Passwords do not match";
            passwordMatch.classList.add("no-match");
        }

        registerButton.disabled = !formValidator.isFormValid(
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            termsChecked,
            emailIsAvailable
        );

    }

    firstNameInput.addEventListener("input", updateFormState);
    lastNameInput.addEventListener("input", updateFormState);
    emailInput.addEventListener("input", updateFormState);
    passwordInput.addEventListener("input", updateFormState);
    confirmPasswordInput.addEventListener("input", updateFormState);
    termsInput.addEventListener("change", updateFormState);

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

        if (!formValidator.validateRequired(firstName)) {
            formValidator.showError("firstNameHelper", "This field is required");
            isValid = false;
        }

        if (!formValidator.validateRequired(lastName)) {
            formValidator.showError("lastNameHelper", "This field is required");
            isValid = false;
        }

        if (!formValidator.validateRequired(email)) {
            formValidator.showError("emailHelper", "This field is required");
            isValid = false;
        } else if (!formValidator.validateEmail(email)) {
            formValidator.showError("emailHelper", "Enter a valid email address");
            isValid = false;
        } else if (storageManager.findUserByEmail(email)) {
            formValidator.showError("emailHelper", "This email is already registered");
            isValid = false;
        }

        if (!formValidator.validatePassword(password)) {
            formValidator.showError("passwordHelper", "This field is required");
            isValid = false;
        }

        if (!formValidator.validateRequired(confirmPassword)) {
            formValidator.showError("confirmPasswordHelper", "This field is required");
            isValid = false;
        } else if (!formValidator.validatePasswordMatch(password, confirmPassword)) {
            formValidator.showError("confirmPasswordHelper", "Passwords must match");
            isValid = false;
        }

        if (!formValidator.validateCheckbox(termsChecked)) {
            formValidator.showError("termsHelper", "You must agree to the terms");
            isValid = false;
        }

        if (!isValid) {
            console.log("Validation failed.");
            updateFormState();
            return;
        }

        const newUser = new User(firstName, lastName, email, password);
        const wasAdded = storageManager.addUser(newUser);

        if (wasAdded) {
            console.log("User added successfully.");
            registrationForm.reset();
            passwordStrength.textContent = "";
            passwordMatch.textContent = "";
            registerButton.disabled = true;
        } else {
            formValidator.showError("emailError", "This email is already registered");
            console.log("Duplicate email. User was not added.");
        }
    });

    updateFormState();

});