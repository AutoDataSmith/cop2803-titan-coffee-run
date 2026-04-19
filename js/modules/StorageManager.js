export class StorageManager {
    constructor(storageKey = "titanCoffeeRunUsers") {
    this.storageKey = storageKey;
    }

    getUsers() {
        return [];
    }

    saveUsers(users) {
        // Will save users to localStorage in a later step
    }

    findUserByEmail(email) {
        return null;
    }

    addUser(user) {
        // Will add a new user in a later step
    }

}
