import {
    getCurrentUser,
    setRedirectAfterLogin
} from "./modules/SessionManager.js";

import {
    CartStorage,
    Order,
    Product,
    formatCurrency
} from "./modules/CartStorage.js";

// Product and Order are defined in the shared cart module, then re-exported here
// because Assignment 6 specifically names cart.js as the cart script.
export {
    CartStorage,
    Order,
    Product,
    formatCurrency
};

const menuProducts = [
    new Product("Titan House Coffee", 3.50),
    new Product("Vanilla Latte", 4.75),
    new Product("Caramel Cappuccino", 4.50),
    new Product("Mocha Cold Brew", 5.25)
];

/**
 * Create one menu card with size, quantity, and add-to-cart controls.
 * @param {Product} product - Product to display.
 * @param {CartStorage} cartStorage - Cart storage helper.
 * @returns {HTMLElement}
 */
function createMenuCard(product, cartStorage) {
    const card = document.createElement("article");
    card.className = "menu-item-card";

    const title = document.createElement("h4");
    title.textContent = product.name;

    const price = document.createElement("p");
    price.className = "menu-item-price";
    price.textContent = formatCurrency(product.price);

    const controls = document.createElement("div");
    controls.className = "menu-item-controls";

    const sizeRow = document.createElement("div");
    sizeRow.className = "form-row";

    const sizeLabel = document.createElement("label");
    sizeLabel.textContent = "Size";

    const sizeSelect = document.createElement("select");
    ["Small", "Medium", "Large"].forEach((size) => {
        const option = document.createElement("option");
        option.value = size.toLowerCase();
        option.textContent = size;
        sizeSelect.appendChild(option);
    });

    sizeRow.appendChild(sizeLabel);
    sizeRow.appendChild(sizeSelect);

    const quantityRow = document.createElement("div");
    quantityRow.className = "form-row";

    const quantityLabel = document.createElement("label");
    quantityLabel.textContent = "Quantity";

    const quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.min = "1";
    quantityInput.value = "1";

    quantityRow.appendChild(quantityLabel);
    quantityRow.appendChild(quantityInput);

    const buttonRow = document.createElement("div");
    buttonRow.className = "button-row";

    const addButton = document.createElement("button");
    addButton.type = "button";
    addButton.textContent = "Add to Cart";

    addButton.addEventListener("click", () => {
        const quantity = Number(quantityInput.value);

        if (!Number.isInteger(quantity) || quantity < 1) {
            quantityInput.value = "1";
            return;
        }

        const order = new Order(
            new Date().toLocaleDateString(),
            product,
            sizeSelect.value,
            quantity
        );

        const orders = cartStorage.getOrders();
        orders.push(order);
        cartStorage.saveOrders(orders);
        renderCartSummary(cartStorage);
    });

    buttonRow.appendChild(addButton);

    controls.appendChild(sizeRow);
    controls.appendChild(quantityRow);
    controls.appendChild(buttonRow);

    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(controls);

    return card;
}

/**
 * Display all coffee products on the order page.
 * @param {CartStorage} cartStorage - Cart storage helper.
 * @returns {void}
 */
function renderMenu(cartStorage) {
    const menuList = document.getElementById("menuList");
    menuList.innerHTML = "";

    menuProducts.forEach((product) => {
        menuList.appendChild(createMenuCard(product, cartStorage));
    });
}

/**
 * Display the current cart and total on the order page.
 * @param {CartStorage} cartStorage - Cart storage helper.
 * @returns {void}
 */
function renderCartSummary(cartStorage) {
    const cartMessage = document.getElementById("cartMessage");
    const cartSummary = document.getElementById("cartSummary");
    const checkoutLink = document.getElementById("checkoutLink");
    const orders = cartStorage.getOrders();

    cartSummary.innerHTML = "";

    if (orders.length === 0) {
        cartMessage.textContent = "Your cart is empty.";
        checkoutLink.classList.add("disabled-link");
        checkoutLink.setAttribute("aria-disabled", "true");
        checkoutLink.tabIndex = -1;
        return;
    }

    checkoutLink.classList.remove("disabled-link");
    checkoutLink.setAttribute("aria-disabled", "false");
    checkoutLink.tabIndex = 0;
    cartMessage.textContent = `${orders.length} item(s) currently in your cart.`;

    const table = document.createElement("table");
    table.className = "cart-list";

    const headerRow = document.createElement("tr");
    ["Item", "Size", "Quantity", "Line Total", "Action"].forEach((headingText) => {
        const heading = document.createElement("th");
        heading.textContent = headingText;
        headerRow.appendChild(heading);
    });

    const thead = document.createElement("thead");
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    let orderTotal = 0;

    orders.forEach((order, index) => {
        const row = document.createElement("tr");
        const itemCell = document.createElement("td");
        const sizeCell = document.createElement("td");
        const quantityCell = document.createElement("td");
        const priceCell = document.createElement("td");
        const actionCell = document.createElement("td");
        const removeButton = document.createElement("button");

        itemCell.textContent = order.product.name;
        sizeCell.textContent = order.size;
        quantityCell.textContent = order.quantity.toString();
        priceCell.textContent = formatCurrency(order.getLineTotal());
        removeButton.type = "button";
        removeButton.className = "remove-cart-button";
        removeButton.textContent = "Remove";

        removeButton.addEventListener("click", () => {
            cartStorage.removeOrder(index);
            renderCartSummary(cartStorage);
        });

        row.appendChild(itemCell);
        row.appendChild(sizeCell);
        row.appendChild(quantityCell);
        row.appendChild(priceCell);
        actionCell.appendChild(removeButton);
        row.appendChild(actionCell);

        tbody.appendChild(row);
        orderTotal += order.getLineTotal();
    });

    table.appendChild(tbody);
    cartSummary.appendChild(table);

    const total = document.createElement("p");
    total.className = "cart-total";
    total.textContent = `Current total: ${formatCurrency(orderTotal)}`;
    cartSummary.appendChild(total);
}

document.addEventListener("DOMContentLoaded", () => {
    const currentUser = getCurrentUser();

    if (!currentUser) {
        setRedirectAfterLogin("order.html");
        window.location.href = "login.html";
        return;
    }

    const mainContent = document.querySelector("main");
    const cartStorage = new CartStorage();

    mainContent.style.display = "block";
    renderMenu(cartStorage);
    renderCartSummary(cartStorage);

    const checkoutLink = document.getElementById("checkoutLink");
    checkoutLink.addEventListener("click", (event) => {
        if (checkoutLink.getAttribute("aria-disabled") === "true") {
            event.preventDefault();
        }
    });

    console.log("Cart page ready.");
});
