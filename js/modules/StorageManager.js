export class StorageManager {
    
    
       /**
     * Create a storage manager for user records.
     * @param {string} [storageKey="titanCoffeeRunUsers"] - localStorage key for saved users.
     */
    constructor(storageKey = "titanCoffeeRunUsers") {
    this.storageKey = storageKey;

    console.log("StorageManager initialized...");
    
    }

     /**
     * Get all stored users from localStorage.
     * @returns {Array<Object>} Array of stored user objects.
     */
    getUsers() {
       const usersJSON = localStorage.getItem(this.storageKey);

        if (!usersJSON) {
            return [];
        }

        try {

            const usersArray = JSON.parse(usersJSON);
            return usersArray;

        /*
            Note:
            A more object-oriented approach would convert stored data back into User instances:

                const users = storageManager.getUsers().map(userData =>
                User.fromJSON(userData)
                );

            This would restore class methods and behavior.

            For this implementation, we are using plain objects from JSON.parse(),
            since only the data is needed and it keeps the code simpler.
        */

        } catch (error) {
            console.error("Error parsing users from localStorage:", error);
            return [];
        }
    }

      /**
     * Save the provided users array to localStorage.
     * @param {Array<Object>} users - Users to save.
     * @returns {void}
     */
    saveUsers(users) {
         try {
            
            const usersJSON = JSON.stringify(users);
            localStorage.setItem(this.storageKey, usersJSON);

        } catch (error) {
            console.error("Error saving users to localStorage:", error);
        }
    }

     /**
     * Find a user by email address.
     * @param {string} email - Email address to search for.
     * @returns {Object|null} Matching user object or null.
     */
    findUserByEmail(email) {

        const users = this.getUsers();

        const normalizedEmail = email.trim().toLowerCase();

        const matchingUser = users.find((user) => {
            return user.email.toLowerCase() === normalizedEmail;
        });

        return matchingUser || null;
    }

     /**
     * Add a new user if the email is not already registered.
     * @param {User} user - User instance to add.
     * @returns {boolean} True if added successfully, otherwise false.
     */
    addUser(user) {

        user.email = user.email.trim().toLowerCase();
        
        const existingUser = this.findUserByEmail(user.email);

        if (existingUser) {
            return false;
        }

        const users = this.getUsers();      

        users.push(user.toJSON());
        this.saveUsers(users);

        return true;
    }

}
