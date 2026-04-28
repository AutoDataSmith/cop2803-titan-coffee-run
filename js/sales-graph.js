import {
    getCurrentUser,
    setRedirectAfterLogin
} from "./modules/SessionManager.js";

const salesData = [
    { quarter: "Jan-Mar", amount: 2005.00, color: "#6f4e37" },
    { quarter: "Apr-Jun", amount: 1471.31, color: "#a2673f" },
    { quarter: "Jul-Sep", amount: 892.86, color: "#d4a373" },
    { quarter: "Oct-Dec", amount: 531.60, color: "#588157" }
];

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

function animateBarsToTargetHeights() {
    const bars = document.querySelectorAll(".sales-bar");
    const valueLabels = document.querySelectorAll(".sales-value");

    bars.forEach((bar) => {
        const targetHeight = bar.dataset.targetHeight;
        bar.style.height = `${targetHeight}px`;
    });

    setTimeout(() => {
        valueLabels.forEach((valueLabel) => {
            valueLabel.classList.add("visible");
        });
    }, 900);
}

function resetBars() {
    const bars = document.querySelectorAll(".sales-bar");
    const valueLabels = document.querySelectorAll(".sales-value");

    bars.forEach((bar) => {
        bar.style.height = "0px";
    });

    valueLabels.forEach((valueLabel) => {
        valueLabel.classList.remove("visible");
    });
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
        bar.dataset.targetHeight = getBarHeight(item.amount, maxAmount).toString();
        bar.style.height = "0px";
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
        setRedirectAfterLogin("sales.html");
        window.location.href = "login.html";
        return;
    }

    if (currentUser.isAdmin !== true) {
        window.location.href = "access-denied.html";
        return;
    }

    const mainContent = document.querySelector("main");
    const resetSalesButton = document.getElementById("resetSalesButton");
    let chartIsReset = false;

    mainContent.style.display = "block";
    renderSalesChart();

    setTimeout(() => {
        animateBarsToTargetHeights();
    }, 100);

    resetSalesButton.addEventListener("click", () => {
        if (chartIsReset) {
            animateBarsToTargetHeights();
            resetSalesButton.textContent = "Reset Chart";
            chartIsReset = false;
            return;
        }

        resetBars();
        resetSalesButton.textContent = "Reload Chart";
        chartIsReset = true;
    });

    console.log("Sales dashboard page ready.");
});
