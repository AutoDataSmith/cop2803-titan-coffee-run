import { User } from "./modules/User.js";
import { StorageManager } from "./modules/StorageManager.js";
import { FormValidator } from "./modules/FormValidator.js";

document.addEventListener("DOMContentLoaded", () => {
    const registrationForm = document.getElementById("registrationForm");

    const storageManager = new StorageManager();
    const formValidator = new FormValidator(registrationForm);

    console.log("Registration page ready.");

});