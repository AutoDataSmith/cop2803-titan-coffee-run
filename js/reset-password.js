import { StorageManager } from "./modules/StorageManager.js";
import { FormValidator } from "./modules/FormValidator.js";

document.addEventListener("DOMContentLoaded", () => {
    const resetPasswordForm = document.getElementById("resetPasswordForm");

    const currentUserJSON = sessionStorage.getItem("titanCoffeeRunCurrentUser");

    if (!currentUserJSON) {
        window.location.href = "login.html";
        return;
    }

    const storageManager = new StorageManager();
    const formValidator = new FormValidator(resetPasswordForm);

    const newPasswordInput = document.getElementById("newPassword");
    const confirmNewPasswordInput = document.getElementById("confirmNewPassword");

    const passwordStrength = document.getElementById("newPasswordStrength");
    const passwordMatch = document.getElementById("newPasswordMatch");

    const resetResultsContainer = document.getElementById("resetResultsContainer");
    console.log("Reset password page ready.");

    resetPasswordForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const newPassword = newPasswordInput.value;
        const confirmPassword = confirmNewPasswordInput.value;

        console.log("Reset attempt:", newPassword, confirmPassword);
    });
   
});