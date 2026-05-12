const ORDERS_API_URL = "http://localhost:3000/orders";

function formatCurrency(amount) {
    return `$${Number(amount).toFixed(2)}`;
}

function createCell(text) {
    const cell = document.createElement("td");
    cell.textContent = text;
    return cell;
}

function createHeaderCell(text) {
    const cell = document.createElement("th");
    cell.textContent = text;
    return cell;
}

function createOrdersTable(orders) {
    const table = document.createElement("table");
    table.className = "cart-list";

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    ["Order ID", "Date", "Product", "Size", "Quantity", "Price", "Line Total"].forEach((heading) => {
        headerRow.appendChild(createHeaderCell(heading));
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    orders.forEach((order) => {
        const product = order.product || {};
        const price = Number(product.price) || 0;
        const quantity = Number(product.quantity) || 0;
        const lineTotal = price * quantity;
        const row = document.createElement("tr");

        row.appendChild(createCell(order.id?.toString() || "N/A"));
        row.appendChild(createCell(order.date || "N/A"));
        row.appendChild(createCell(product.name || "N/A"));
        row.appendChild(createCell(product.size || "N/A"));
        row.appendChild(createCell(quantity.toString()));
        row.appendChild(createCell(formatCurrency(price)));
        row.appendChild(createCell(formatCurrency(lineTotal)));

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    return table;
}

async function getOrders() {
    const response = await fetch(ORDERS_API_URL);

    if (!response.ok) {
        throw new Error(`Orders request failed with status ${response.status}`);
    }

    return response.json();
}

export async function loadBackendOrders() {
    const message = document.getElementById("ordersApiMessage");
    const display = document.getElementById("ordersApiDisplay");

    if (!message || !display) {
        return;
    }

    message.className = "helper-message";
    message.textContent = "Loading backend order data...";
    display.replaceChildren();

    try {
        const orders = await getOrders();

        if (!Array.isArray(orders) || orders.length === 0) {
            message.textContent = "No backend orders were found.";
            return;
        }

        message.classList.add("valid");
        message.textContent = `${orders.length} backend order(s) loaded from JSON Server.`;
        display.replaceChildren(createOrdersTable(orders));
    } catch (error) {
        console.error("Unable to load backend orders:", error);
        message.classList.add("error");
        message.textContent = "Order data could not be loaded. Start JSON Server and refresh this page.";
    }
}
