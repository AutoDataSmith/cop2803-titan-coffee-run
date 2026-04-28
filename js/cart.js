import {
    getCurrentUser,
    setRedirectAfterLogin
} from "./modules/SessionManager.js";

const CART_STORAGE_KEY = "titanCoffeeRunCart";

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    toJSON() {
        return {
            name: this.name,
            price: this.price
        };
    }

    static fromJSON(data) {
        return new Product(data.name, data.price);
    }
}

class Order {
    constructor(date, product, size, quantity) {
        this.date = date;
        this.product = product;
        this.size = size;
        this.quantity = quantity;
    }

    getLineTotal() {
        return this.product.price * this.quantity;
    }

    toJSON() {
        return {
            date: this.date,
            product: this.product.toJSON(),
            size: this.size,
            quantity: this.quantity
        };
    }

    static fromJSON(data) {
        return new Order(
            data.date,
            Product.fromJSON(data.product),
            data.size,
            data.quantity
        );
    }
}

class CartStorage {
    constructor(storageKey = CART_STORAGE_KEY) {
        this.storageKey = storageKey;
    }

    getOrders() {
        const ordersJSON = sessionStorage.getItem(this.storageKey);

        if (!ordersJSON) {
            return [];
        }

        try {
            const orderData = JSON.parse(ordersJSON);
            return orderData.map((item) => Order.fromJSON(item));
        } catch (error) {
            console.error("Unable to parse cart data:", error);
            sessionStorage.removeItem(this.storageKey);
            return [];
        }
    }

    saveOrders(orders) {
        const plainOrders = orders.map((order) => order.toJSON());
        sessionStorage.setItem(this.storageKey, JSON.stringify(plainOrders));
    }
}

const menuProducts = [
    new Product("Titan House Coffee", 3.50),
    new Product("Vanilla Latte", 4.75),
    new Product("Caramel Cappuccino", 4.50),
    new Product("Mocha Cold Brew", 5.25)
];

function formatCurrency(amount) {
    return `$${amount.toFixed(2)}`;
}

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
        const quantity = Number.parseInt(quantityInput.value, 10);

        if (Number.isNaN(quantity) || quantity < 1) {
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

function renderMenu(cartStorage) {
    const menuList = document.getElementById("menuList");
    menuList.innerHTML = "";

    menuProducts.forEach((product) => {
        menuList.appendChild(createMenuCard(product, cartStorage));
    });
}

function renderCartSummary(cartStorage) {
    const cartMessage = document.getElementById("cartMessage");
    const cartSummary = document.getElementById("cartSummary");
    const orders = cartStorage.getOrders();

    cartSummary.innerHTML = "";

    if (orders.length === 0) {
        cartMessage.textContent = "Your cart is empty.";
        return;
    }

    cartMessage.textContent = `${orders.length} item(s) currently in your cart.`;

    const table = document.createElement("table");
    table.className = "cart-list";

    const headerRow = document.createElement("tr");
    ["Item", "Size", "Quantity", "Line Total"].forEach((headingText) => {
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
        const itemCell = document.createElement("td");
        const sizeCell = document.createElement("td");
        const quantityCell = document.createElement("td");
        const priceCell = document.createElement("td");

        itemCell.textContent = order.product.name;
        sizeCell.textContent = order.size;
        quantityCell.textContent = order.quantity.toString();
        priceCell.textContent = formatCurrency(order.getLineTotal());

        row.appendChild(itemCell);
        row.appendChild(sizeCell);
        row.appendChild(quantityCell);
        row.appendChild(priceCell);

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

    console.log("Cart page ready.");
});
