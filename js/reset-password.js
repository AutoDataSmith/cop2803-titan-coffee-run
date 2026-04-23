import { StorageManager } from "./modules/StorageManager.js";
import { FormValidator } from "./modules/FormValidator.js";

document.addEventListener("DOMContentLoaded", () => {
    const resetPasswordForm = document.getElementById("resetPasswordForm");

    const currentUserJSON = sessionStorage.getItem("titanCoffeeRunCurrentUser");

    if (!currentUserJSON) {
        window.location.href = "login.html";
        return;
    }

    const mainContent = document.querySelector("main");
    // show page only if  logged in
    mainContent.style.display = "block";

    const storageManager = new StorageManager();
    const formValidator = new FormValidator(resetPasswordForm);

    const newPasswordInput = document.getElementById("newPassword");
    const confirmNewPasswordInput = document.getElementById("confirmNewPassword");

    const passwordStrength = document.getElementById("newPasswordStrength");
    const passwordMatch = document.getElementById("newPasswordMatch");

    const resetResultsContainer = document.getElementById("resetResultsContainer");
    console.log("Reset password page ready.");


    function updatePasswordFeedback() {
        const newPassword = newPasswordInput.value;
        const confirmPassword = confirmNewPasswordInput.value;

        const strengthMessage = formValidator.getPasswordStrengthMessage(newPassword);

        passwordStrength.textContent = strengthMessage;
        passwordStrength.className = "helper-message";
        
        if (newPassword === "") {
            formValidator.clearError("newPasswordHelper");
        }

        if (confirmPassword === "") {
            formValidator.clearError("confirmNewPasswordHelper");
        }

         if (formValidator.validatePassword(newPassword)) {
            formValidator.clearError("newPasswordHelper");
        }

        if (confirmPassword !== "" && formValidator.validatePasswordMatch(newPassword, confirmPassword)) {
            formValidator.clearError("confirmNewPasswordHelper");
        }

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
        } else if (formValidator.validatePasswordMatch(newPassword, confirmPassword)) {
            passwordMatch.textContent = "Passwords match";
            passwordMatch.classList.add("match");
        } else {
            passwordMatch.textContent = "Passwords do not match";
            passwordMatch.classList.add("no-match");
        }
    }

    newPasswordInput.addEventListener("input", updatePasswordFeedback);
    confirmNewPasswordInput.addEventListener("input", updatePasswordFeedback);

    resetPasswordForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const newPassword = newPasswordInput.value;
        const confirmPassword = confirmNewPasswordInput.value;

        resetResultsContainer.textContent = "";
        resetResultsContainer.className = "helper-message";

        formValidator.clearError("newPasswordHelper");
        formValidator.clearError("confirmNewPasswordHelper");

        let isValid = true;

        if (!formValidator.validatePassword(newPassword)) {
            formValidator.showError("newPasswordHelper", "This field is required");
            isValid = false;
        }

        if (!formValidator.validateRequired(confirmPassword)) {
            formValidator.showError("confirmNewPasswordHelper", "This field is required");
            isValid = false;
        } else if (!formValidator.validatePasswordMatch(newPassword, confirmPassword)) {
            formValidator.showError("confirmNewPasswordHelper", "Passwords must match");
            isValid = false;
        }

        if (!isValid) {
            resetResultsContainer.textContent = "Please fix the highlighted issues.";
            resetResultsContainer.classList.add("error");
            return;
        }

        const currentUser = JSON.parse(currentUserJSON);

        // get all users
        const users = storageManager.getUsers();

        // find the matching user
        const updatedUsers = users.map((user) => {
            if (user.email === currentUser.email) {
                return {
                    ...user,
                    password: newPassword
                };
            }
            return user;
        });

        // save updated users
        storageManager.saveUsers(updatedUsers);

        // update session user
        currentUser.password = newPassword;
        sessionStorage.setItem("titanCoffeeRunCurrentUser", JSON.stringify(currentUser));

        // success message
        resetResultsContainer.textContent = "Password updated successfully.";
        resetResultsContainer.classList.add("valid");
        resetPasswordForm.reset();
        passwordStrength.textContent = "";
        passwordStrength.className = "helper-message";
        passwordMatch.textContent = "";
        passwordMatch.className = "helper-message";

    });
   
});