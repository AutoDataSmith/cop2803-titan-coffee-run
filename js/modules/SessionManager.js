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
