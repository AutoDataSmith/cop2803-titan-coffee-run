import { StorageManager } from "./modules/StorageManager.js";
import { FormValidator } from "./modules/FormValidator.js";

document.addEventListener("DOMContentLoaded", () => {
    const resetPasswordForm = document.getElementById("resetPasswordForm");

    const storageManager = new StorageManager();
    const formValidator = new FormValidator(resetPasswordForm);

    console.log("Reset password page ready.");
});