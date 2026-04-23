export class User {

     /**
     * Create a new user.
     * @param {string} firstName - User first name.
     * @param {string} lastName - User last name.
     * @param {string} email - User email address.
     * @param {string} password - User password.
     */
    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

     /**
     * Convert the user instance to a plain object for storage.
     * @returns {{firstName: string, lastName: string, email: string, password: string}}
     */
    toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password
        };
    }

       /**
     * Create a User instance from stored JSON data.
     * @param {{firstName: string, lastName: string, email: string, password: string}} data
     * @returns {User}
     */
    static fromJSON(data) {
        return new User(
            data.firstName,
            data.lastName,
            data.email,
            data.password
        );
    }
}