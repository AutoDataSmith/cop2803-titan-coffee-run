/**
 * Read and parse the current session user from sessionStorage.
 *
 * @returns {Object|null} Parsed current user object or null if no valid session exists.
 */
export function getCurrentUser() {
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

/**
 * Save the current session user to sessionStorage.
 *
 * @param {Object} user - User data to store for the active session.
 * @returns {void}
 */
export function setCurrentUser(user) {
    sessionStorage.setItem("titanCoffeeRunCurrentUser", JSON.stringify(user));
}

/**
 * Remove the current session user from sessionStorage.
 *
 * @returns {void}
 */
export function clearCurrentUser() {
    sessionStorage.removeItem("titanCoffeeRunCurrentUser");
}

/**
 * Save the page a user should return to after logging in.
 *
 * @param {string} path - Relative page path to store.
 * @returns {void}
 */
export function setRedirectAfterLogin(path) {
    sessionStorage.setItem("titanCoffeeRunRedirectAfterLogin", path);
}

/**
 * Get the saved redirect target after login.
 *
 * @returns {string|null} Stored path or null if none exists.
 */
export function getRedirectAfterLogin() {
    return sessionStorage.getItem("titanCoffeeRunRedirectAfterLogin");
}

/**
 * Remove any saved redirect target from sessionStorage.
 *
 * @returns {void}
 */
export function clearRedirectAfterLogin() {
    sessionStorage.removeItem("titanCoffeeRunRedirectAfterLogin");
}
