import { User } from "./modules/User.js";
import { StorageManager } from "./modules/StorageManager.js";
import { FormValidator } from "./modules/FormValidator.js";

document.addEventListener("DOMContentLoaded", () => {
    const registrationForm = document.getElementById("registrationForm");

    const storageManager = new StorageManager();
    const formValidator = new FormValidator(registrationForm);

    console.log("Registration page ready.");    

    registrationForm.addEventListener("submit", (event) => {
        event.preventDefault();

        formValidator.clearAllErrors();

        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const termsChecked = document.getElementById("terms").checked;

        let isValid = true;

        if (!formValidator.validateRequired(firstName)) {
            formValidator.showError("firstNameError", "This field is required");
            isValid = false;
            
        }

        if (!formValidator.validateRequired(lastName)) {
            formValidator.showError("lastNameError", "This field is required");
            isValid = false;

        }

        if (!formValidator.validateRequired(email)) {
            formValidator.showError("emailError", "This field is required");
            isValid = false;

        } else if (!formValidator.validateEmail(email)) {
            formValidator.showError("emailError", "Enter a valid email address");
            isValid = false;

        } else if (storageManager.findUserByEmail(email)) {
            formValidator.showError("emailError", "This email is already registered");
            isValid = false;

        }

         if (!formValidator.validatePassword(password)) {
            formValidator.showError("passwordError", "This field is required");
            isValid = false;
        }

        if (!formValidator.validateRequired(confirmPassword)) {
            formValidator.showError("confirmPasswordError", "This field is required");
            isValid = false;

        } else if (!formValidator.validatePasswordMatch(password, confirmPassword)) {
            formValidator.showError("confirmPasswordError", "Passwords must match");
            isValid = false;

        }

        if (!formValidator.validateCheckbox(termsChecked)) {
            
            formValidator.showError("termsError", "You must agree to the terms");
            isValid = false;

        }

        if (!isValid) {
            console.log("Validation failed.");
            return;
        }
    

        const newUser = new User(firstName, lastName, email, password); 
        const wasAdded = storageManager.addUser(newUser);

        if (wasAdded) {
            console.log("User added successfully.");
        } else {
            console.log("Duplicate email. User was not added.");
        }

    });

});