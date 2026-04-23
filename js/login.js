import { StorageManager } from "./modules/StorageManager.js";

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    const emailInput = document.getElementById("loginEmail");
    const passwordInput = document.getElementById("loginPassword");

    const storageManager = new StorageManager();

    console.log("Login page ready.");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value;

        console.log("Login attempt:", email, password);

        const user = storageManager.findUserByEmail(email);

        console.log("User found:", user);
    });
});