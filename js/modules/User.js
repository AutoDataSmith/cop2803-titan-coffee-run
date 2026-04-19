export class User {
    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    toJSON() {
    return {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password
    };
    }

    static fromJSON(data) {
        return new User(
            data.firstName,
            data.lastName,
            data.email,
            data.password
        );
    }
}