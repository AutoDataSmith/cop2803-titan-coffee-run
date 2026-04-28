function getCurrentUser() {
    const currentUserJSON = sessionStorage.getItem("titanCoffeeRunCurrentUser");

    if (!currentUserJSON) {
        return null;
    }

    try {
        return JSON.parse(currentUserJSON);
    } catch (error) {
        console.error("Unable to parse current user session data:", error);
        sessionStorage.removeItem("titanCoffeeRunCurrentUser");
        return null;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const currentUser = getCurrentUser();

    if (!currentUser || currentUser.isAdmin !== true) {
        sessionStorage.setItem("titanCoffeeRunRedirectAfterLogin", "sales.html");
        window.location.href = "login.html";
        return;
    }

    const mainContent = document.querySelector("main");
    mainContent.style.display = "block";

    console.log("Sales dashboard page ready.");
});
