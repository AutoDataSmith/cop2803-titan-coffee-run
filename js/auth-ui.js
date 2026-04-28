import {
    clearCurrentUser,
    clearRedirectAfterLogin,
    getCurrentUser
} from "./modules/SessionManager.js";

function setLinkVisibility(element, shouldShow) {
    if (!element) {
        return;
    }

    const navItem = element.closest("li");

    if (navItem) {
        navItem.style.display = shouldShow ? "" : "none";
        return;
    }

    element.style.display = shouldShow ? "inline" : "none";
}

function updateAuthUI() {
    const currentUser = getCurrentUser();
    const isLoggedIn = currentUser !== null;
    const isAdmin = currentUser && currentUser.isAdmin === true;

    const loginLink = document.getElementById("loginLink");
    const logoutLink = document.getElementById("logoutLink");
    const registerLink = document.querySelector('a[href="register.html"]');
    const resetPasswordLink = document.getElementById("resetPasswordLink");
    const salesLink = document.getElementById("salesLink");

    setLinkVisibility(loginLink, !isLoggedIn);
    setLinkVisibility(logoutLink, isLoggedIn);
    setLinkVisibility(registerLink, !isLoggedIn);
    setLinkVisibility(resetPasswordLink, isLoggedIn);
    setLinkVisibility(salesLink, isAdmin);
}

document.addEventListener("DOMContentLoaded", () => {
    const logoutLink = document.getElementById("logoutLink");

    if (logoutLink) {
        logoutLink.addEventListener("click", (event) => {
            event.preventDefault();
            clearCurrentUser();
            clearRedirectAfterLogin();
            window.location.href = "login.html";
        });
    }

    updateAuthUI();
});
