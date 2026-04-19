import { User } from "./modules/User.js";
import { StorageManager } from "./modules/StorageManager.js";
import { FormValidator } from "./modules/FormValidator.js";

document.addEventListener("DOMContentLoaded", () => {
    const registrationForm = document.getElementById("registrationForm");

    const storageManager = new StorageManager();
    const formValidator = new FormValidator(registrationForm);

    console.log("Registration page ready.");

    const testUser = new User("Ken", "Smith", "ken@test.com", "Pass1234");

    const wasAdded = storageManager.addUser(testUser);
    console.log("User added:", wasAdded);  

    console.log("Users after save:", storageManager.getUsers());

    console.log(storageManager.findUserByEmail("ken@test.com"));
    console.log(storageManager.findUserByEmail("Ken@Test.com")); // should still work
    console.log(storageManager.findUserByEmail("missing@test.com")); // Should Fail    


});