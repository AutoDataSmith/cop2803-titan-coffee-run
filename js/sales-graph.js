const salesData = [
    { quarter: "Jan-Mar", amount: 2005.00, color: "#6f4e37" },
    { quarter: "Apr-Jun", amount: 1471.31, color: "#a2673f" },
    { quarter: "Jul-Sep", amount: 892.86, color: "#d4a373" },
    { quarter: "Oct-Dec", amount: 531.60, color: "#588157" }
];

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

function formatSalesAmount(amount) {
    return `$${amount.toFixed(2)}`;
}

/**
 * Convert a sales amount into a proportional bar height.
 * The largest sales value becomes the tallest bar and the
 * remaining bars scale relative to that maximum.
 *
 * @param {number} amount - Sales amount for the current quarter.
 * @param {number} maxAmount - Largest sales amount in the dataset.
 * @returns {number} Height in pixels for the rendered bar.
 */
function getBarHeight(amount, maxAmount) {
    const maxBarHeight = 220;
    return (amount / maxAmount) * maxBarHeight;
}

/**
 * Build the sales chart by creating one bar group per quarter.
 * Each group includes the dollar value, the colored bar, and the quarter label.
 *
 * @returns {void}
 */
function renderSalesChart() {
    const chartContainer = document.getElementById("salesChart");

    // Find the highest sales value first so every bar can be scaled against it.
    // The spread operator (...) passes the mapped amounts into Math.max as individual values.
    const maxAmount = Math.max(...salesData.map((item) => item.amount));

    chartContainer.innerHTML = "";

    salesData.forEach((item) => {
        const barGroup = document.createElement("div");
        barGroup.className = "sales-bar-group";

        const valueLabel = document.createElement("div");
        valueLabel.className = "sales-value";
        valueLabel.textContent = formatSalesAmount(item.amount);

        const bar = document.createElement("div");
        bar.className = "sales-bar";
        bar.style.height = `${getBarHeight(item.amount, maxAmount)}px`;
        bar.style.backgroundColor = item.color;
        bar.title = formatSalesAmount(item.amount);

        const quarterLabel = document.createElement("div");
        quarterLabel.className = "sales-label";
        quarterLabel.textContent = item.quarter;

        barGroup.appendChild(valueLabel);
        barGroup.appendChild(bar);
        barGroup.appendChild(quarterLabel);

        chartContainer.appendChild(barGroup);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const currentUser = getCurrentUser();

    if (!currentUser) {
        sessionStorage.setItem("titanCoffeeRunRedirectAfterLogin", "sales.html");
        window.location.href = "login.html";
        return;
    }

    if (currentUser.isAdmin !== true) {
        window.location.href = "access-denied.html";
        return;
    }

    const mainContent = document.querySelector("main");
    mainContent.style.display = "block";
    renderSalesChart();

    console.log("Sales dashboard page ready.");
});
