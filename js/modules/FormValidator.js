export class FormValidator {
    constructor(formElement) {
    this.formElement = formElement;

    console.log("FormValidator initialized...");

    }

    validateRequired(value) {
        return value.trim() !== "";
    }

    validateEmail(email) {
        return true;
    }

    validatePassword(password) {
        return true;
    }

    validatePasswordMatch(password, confirmPassword) {
        return password === confirmPassword;
    }

}