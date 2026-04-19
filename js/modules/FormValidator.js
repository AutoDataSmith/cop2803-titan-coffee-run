export class FormValidator {
    constructor(formElement) {
        this.formElement = formElement;
        console.log("FormValidator initialized...");
    }

    validateRequired(value) {
        return value.trim() !== "";
    }

    validateMinLength(value, minLength) {
        return value.trim().length >= minLength;
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

    getPasswordStrengthMessage(password) {
        const trimmedPassword = password.trim();

        if (trimmedPassword === "") {
            return "";
        }

        if (trimmedPassword.length < 6) {
            return "Weak password";
        }

        if (
            /[A-Z]/.test(trimmedPassword) &&
            /\d/.test(trimmedPassword) &&
            trimmedPassword.length >= 8
        ) {
            return "Strong password";
        }

        return "Medium password";
    }

    isFormValid(firstName, lastName, email, password, confirmPassword, termsChecked, emailIsAvailable) {
        return (
            this.validateRequired(firstName) &&
            this.validateRequired(lastName) &&
            this.validateEmail(email) &&
            emailIsAvailable &&
            this.validatePassword(password) &&
            this.validatePasswordMatch(password, confirmPassword) &&
            this.validateCheckbox(termsChecked)
        );
    }

    showError(elementId, message) {
          const element = document.getElementById(elementId);
        element.textContent = message;
        element.classList.add("active");
    }

    clearError(elementId) {
        const element = document.getElementById(elementId);
        element.textContent = "";
        element.classList.remove("active");
    }

    clearAllErrors() {

        const errorElements = document.querySelectorAll(".helper-message");
        
        errorElements.forEach((element) => {
            element.textContent = "";
            element.classList.remove("active");
        });
    }

}