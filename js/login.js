import { StorageManager } from "./modules/StorageManager.js";
import {
    clearRedirectAfterLogin,
    getCurrentUser,
    getRedirectAfterLogin,
    setCurrentUser
} from "./modules/SessionManager.js";

const ADMIN_CREDENTIALS = {
    email: "admin",
    password: "test123"
};

function createSessionUser(user, isAdmin = false) {
    return {
        ...user,
        isAdmin
    };
}

document.addEventListener("DOMContentLoaded", () => {    
    
    const currentUser = getCurrentUser();
    
    // No need to be on this page for authenticated users - redirect to home
    if (currentUser) {
        window.location.href = "index.html";
        return;
    }

    const mainContent = document.querySelector("main");
    // show page only if not logged in
    mainContent.style.display = "block";

    const loginForm = document.getElementById("loginForm");
    
    const emailInput = document.getElementById("loginEmail");
    const passwordInput = document.getElementById("loginPassword");

    const storageManager = new StorageManager();
    
    const loginResultsContainer = document.getElementById("loginResultsContainer");


    console.log("Login page ready.");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value;
        // reset classes first
        loginResultsContainer.className = "helper-message";
        loginResultsContainer.textContent = "";

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

        if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
            const adminSessionUser = createSessionUser(
                {
                    firstName: "Admin",
                    lastName: "User",
                    email: ADMIN_CREDENTIALS.email
                },
                true
            );

            setCurrentUser(adminSessionUser);

            const redirectTarget = getRedirectAfterLogin() || "sales.html";
            clearRedirectAfterLogin();

            setTimeout(() => {
                window.location.href = redirectTarget;
            }, 1000);

            return;
        }

        const user = storageManager.findUserByEmail(email);

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
       
        const sessionUser = createSessionUser(user, false);
        setCurrentUser(sessionUser);
        
        const redirectTarget = getRedirectAfterLogin() || "index.html";
        clearRedirectAfterLogin();

        // redirect after short delay
        setTimeout(() => {
            window.location.href = redirectTarget;
        }, 1000);
        
    });
    

});
