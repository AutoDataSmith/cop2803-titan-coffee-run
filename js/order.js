import {
    getCurrentUser,
    setRedirectAfterLogin
} from "./modules/SessionManager.js";

document.addEventListener("DOMContentLoaded", () => {
    const currentUser = getCurrentUser();

    if (!currentUser) {
        setRedirectAfterLogin("order.html");
        window.location.href = "login.html";
        return;
    }

    const mainContent = document.querySelector("main");
    mainContent.style.display = "block";

    console.log("Order page ready.");
});
