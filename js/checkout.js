import {
    getCurrentUser,
    setRedirectAfterLogin
} from "./modules/SessionManager.js";

import {
    CartStorage,
    formatCurrency,
    getCartStorageKey
} from "./modules/CartStorage.js";

/**
 * Build one table cell using textContent so cart data is displayed safely.
 * @param {string} text - Text to place in the table cell.
 * @returns {HTMLTableCellElement}
 */
function createTableCell(text) {
    const cell = document.createElement("td");
    cell.textContent = text;
    return cell;
}

/**
 * Display the user's cart on the checkout page.
 * @param {CartStorage} cartStorage - Cart storage helper.
 * @returns {void}
 */
function renderCheckout(cartStorage) {
    const checkoutMessage = document.getElementById("checkoutMessage");
    const checkoutSummary = document.getElementById("checkoutSummary");
    const orders = cartStorage.getOrders();

    checkoutSummary.innerHTML = "";

    if (orders.length === 0) {
        checkoutMessage.textContent = "Your cart is empty. Please return to the order page to add coffee.";
        return;
    }

    checkoutMessage.textContent = "Please review your items before completing your order.";

    const table = document.createElement("table");
    table.className = "cart-list";

    const headerRow = document.createElement("tr");
    ["Item", "Size", "Quantity", "Item Price", "Line Total"].forEach((headingText) => {
        const heading = document.createElement("th");
        heading.textContent = headingText;
        headerRow.appendChild(heading);
    });

    const thead = document.createElement("thead");
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    let orderTotal = 0;

    orders.forEach((order) => {
        const row = document.createElement("tr");
        const lineTotal = order.getLineTotal();

        row.appendChild(createTableCell(order.product.name));
        row.appendChild(createTableCell(order.size));
        row.appendChild(createTableCell(order.quantity.toString()));
        row.appendChild(createTableCell(formatCurrency(order.product.price)));
        row.appendChild(createTableCell(formatCurrency(lineTotal)));

        tbody.appendChild(row);
        orderTotal += lineTotal;
    });

    table.appendChild(tbody);
    checkoutSummary.appendChild(table);

    const total = document.createElement("p");
    total.className = "cart-total checkout-total";
    total.textContent = `Final total amount due: ${formatCurrency(orderTotal)}`;
    checkoutSummary.appendChild(total);

    // Question for later: should this page eventually clear the cart after a confirmation?
    // For Assignment 6, I am stopping at review and total because payment processing is not required.
}

document.addEventListener("DOMContentLoaded", () => {
    const currentUser = getCurrentUser();

    if (!currentUser) {
        setRedirectAfterLogin("checkout.html");
        window.location.href = "login.html";
        return;
    }

    const mainContent = document.querySelector("main");
    const cartStorage = new CartStorage(getCartStorageKey(currentUser));

    mainContent.style.display = "block";
    renderCheckout(cartStorage);

    console.log("Checkout page ready.");
});
