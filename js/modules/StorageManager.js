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
        return null;
    }

    addUser(user) {
        // Will add a new user in a later step
    }

}
