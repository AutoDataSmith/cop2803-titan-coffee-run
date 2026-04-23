export class FormValidator {

    /**
     * Create a validator for a form.
     * @param {HTMLFormElement} formElement - Form element associated with validation.
     */
    constructor(formElement) {
        this.formElement = formElement;
        console.log("FormValidator initialized...");
    }

     /**
     * Check whether a value is not empty after trimming.
     * @param {string} value
     * @returns {boolean}
     */
    validateRequired(value) {
        return value.trim() !== "";
    }

    /**
     * Check whether a value meets the minimum length.
     * @param {string} value
     * @param {number} minLength
     * @returns {boolean}
     */
    validateMinLength(value, minLength) {
        return value.trim().length >= minLength;
    }

     /**
     * Validate email format.
     * @param {string} email
     * @returns {boolean}
     */
    validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email.trim());
    }
    
    /**
     * Validate password entry.
     * @param {string} password
     * @returns {boolean}
     */
    validatePassword(password) {
        return password.trim() !== "";
    }

     /**
     * Check whether password and confirm password match.
     * @param {string} password
     * @param {string} confirmPassword
     * @returns {boolean}
     */
    validatePasswordMatch(password, confirmPassword) {
        return password === confirmPassword;
    }

     /**
     * Validate checkbox selection.
     * @param {boolean} isChecked
     * @returns {boolean}
     */
    validateCheckbox(isChecked) {
        return isChecked;
    }

    /**
     * Return a password strength label.
     * @param {string} password
     * @returns {string}
     */
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

      /**
     * Check whether the overall registration form state is valid.
     * @param {string} firstName
     * @param {string} lastName
     * @param {string} email
     * @param {string} password
     * @param {string} confirmPassword
     * @param {boolean} termsChecked
     * @param {boolean} emailIsAvailable
     * @returns {boolean}
     */
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

    /**
     * Show an error message in a helper element.
     * @param {string} elementId
     * @param {string} message
     * @returns {void}
     */
    showError(elementId, message) {
        const element = document.getElementById(elementId);
        element.textContent = message;
        element.className = "helper-message error";
    }

     /**
     * Show a valid message in a helper element.
     * @param {string} elementId
     * @param {string} message
     * @returns {void}
     */
    showValid(elementId, message) {
        const element = document.getElementById(elementId);
        element.textContent = message;
        element.className = "helper-message valid";
    }

    
    /**
     * Clear a helper message.
     * @param {string} elementId
     * @returns {void}
     */
    clearError(elementId) {
        const element = document.getElementById(elementId);
        element.textContent = "";
        element.className = "helper-message";
    }

     /**
     * Clear all helper messages in the form.
     * @returns {void}
     */
    clearAllErrors() {

        const errorElements = document.querySelectorAll(".helper-message");
        
        errorElements.forEach((element) => {
            element.textContent = "";
            element.className = "helper-message";
        });
    }

}