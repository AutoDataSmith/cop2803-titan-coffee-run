export class StorageManager {
    constructor(storageKey = "titanCoffeeRunUsers") {
    this.storageKey = storageKey;

    console.log("StorageManager initialized...");
    
    }

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

    saveUsers(users) {
         try {
            
            const usersJSON = JSON.stringify(users);
            localStorage.setItem(this.storageKey, usersJSON);

        } catch (error) {
            console.error("Error saving users to localStorage:", error);
        }
    }

    findUserByEmail(email) {

        const users = this.getUsers();

        const normalizedEmail = email.trim().toLowerCase();

        const matchingUser = users.find((user) => {
            return user.email.toLowerCase() === normalizedEmail;
        });

        return matchingUser || null;
    }

    addUser(user) {
        // Will add a new user in a later step
    }

}
