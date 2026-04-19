export class FormValidator {
    constructor(formElement) {
        this.formElement = formElement;
        console.log("FormValidator initialized...");
    }

    validateRequired(value) {
        return value.trim() !== "";
    }

    validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email.trim());
    }

    validatePassword(password) {
        return password.trim() !== "";
    }

    validatePasswordMatch(password, confirmPassword) {
        return password === confirmPassword;
    }

      validateCheckbox(isChecked) {
        return isChecked;
    }

    showError(elementId, message) {
        document.getElementById(elementId).textContent = message;
    }

    clearError(elementId) {
        document.getElementById(elementId).textContent = "";
    }

    clearAllErrors() {

        const errorElements = document.querySelectorAll(".error-message");
        
        errorElements.forEach((element) => {
            element.textContent = "";
        });
    }

}