document.addEventListener("DOMContentLoaded", () => {
    const loginLink = document.getElementById("loginLink");
    const logoutLink = document.getElementById("logoutLink");

    function updateAuthUI() {
        const currentUser = sessionStorage.getItem("titanCoffeeRunCurrentUser");

        if (loginLink) {
            loginLink.style.display = currentUser ? "none" : "inline";
        }

        if (logoutLink) {
            logoutLink.style.display = currentUser ? "inline" : "none";
        }
    }

    if (logoutLink) {
        logoutLink.addEventListener("click", (event) => {
            event.preventDefault();
            sessionStorage.removeItem("titanCoffeeRunCurrentUser");
            updateAuthUI();
        });
    }

    updateAuthUI();
});