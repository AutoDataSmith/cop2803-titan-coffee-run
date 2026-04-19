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

        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const termsChecked = document.getElementById("terms").checked;

        console.log("Form submitted.");
        console.log("Confirm Password value:", confirmPassword);
        console.log("Terms checked:", termsChecked);

        const newUser = new User(firstName, lastName, email, password);
        console.log("New user object:", newUser);

        const wasAdded = storageManager.addUser(newUser);

        if (wasAdded) {
            console.log("User added successfully.");
        } else {
            console.log("Duplicate email. User was not added.");
        }

    });


});