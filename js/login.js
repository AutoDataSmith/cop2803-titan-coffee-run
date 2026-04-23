import { StorageManager } from "./modules/StorageManager.js";

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const logoutLink = document.getElementById("logoutLink");

    const emailInput = document.getElementById("loginEmail");
    const passwordInput = document.getElementById("loginPassword");

    const storageManager = new StorageManager();
    
    const loginResultsContainer = document.getElementById("loginResultsContainer");

    console.log("Login page ready.");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value;

        const user = storageManager.findUserByEmail(email);
        // reset classes first
        loginResultsContainer.className = "helper-message";

        if (email === "") {
            loginResultsContainer.textContent = "Please enter your email address.";
            loginResultsContainer.classList.add("error");
            return;
        }

        if (password === "") {
            loginResultsContainer.textContent = "Please enter your password.";
            loginResultsContainer.classList.add("error");
            return;
        }

        if (!user) {
            loginResultsContainer.textContent = "No account was found with that email address.";
             loginResultsContainer.classList.add("error");
            return;
        }

        if (user.password !== password) {
            loginResultsContainer.textContent = "Incorrect password. Please try again.";
             loginResultsContainer.classList.add("error");
            return;
        }

        sessionStorage.setItem("titanCoffeeRunCurrentUser", JSON.stringify(user));
        loginResultsContainer.textContent = `Welcome back, ${user.firstName}!`;
        loginResultsContainer.classList.add("valid");
        

    });

    logoutLink.addEventListener("click", (event) => {
        event.preventDefault();

        sessionStorage.removeItem("titanCoffeeRunCurrentUser");

        loginResultsContainer.className = "helper-message valid";
        loginResultsContainer.textContent = "You have been logged out.";
    });

});