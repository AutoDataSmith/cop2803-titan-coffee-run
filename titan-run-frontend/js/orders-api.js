const ORDERS_API_URL = "http://localhost:3000/orders";

// Format order prices as dollar amounts.   
// Future cleanup: this could be shared with the other cart/checkout currency helpers.
function formatCurrency(amount) {
    return `$${Number(amount).toFixed(2)}`;
}

// Future cleanup: these table cell helpers could be shared with other pages that build tables.
// Create one regular table cell.
function createCell(text) {
    const cell = document.createElement("td");
    cell.textContent = text;
    return cell;
}

// Create one table heading cell.
function createHeaderCell(text) {
    const cell = document.createElement("th");
    cell.textContent = text;
    return cell;
}

// Build the backend orders table from the JSON Server data.
function createOrdersTable(orders) {
    const table = document.createElement("table");
    table.className = "cart-list";

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    // This builds the header using an array of header names
    ["Order ID", "Date", "Product", "Size", "Quantity", "Price", "Line Total"].forEach((heading) => {
        headerRow.appendChild(createHeaderCell(heading));
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    orders.forEach((order) => {
        // Use fallback values so one incomplete record does not break the whole table.
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

// Request order records from the local backend server.
async function getOrders() {
    const response = await fetch(ORDERS_API_URL);

    if (!response.ok) {
        throw new Error(`Orders request failed with status ${response.status}`); // Let loadBackendOrders() deal with the error message.
    }

    return response.json();
}

// Load the backend orders and display either the table or an error message.
export async function loadBackendOrders() {
    const message = document.getElementById("ordersApiMessage");
    const display = document.getElementById("ordersApiDisplay");

    // If the page does not include the API display elements, there is nothing to render.
    if (!message || !display) {
        return;
    }

    message.className = "helper-message";
    message.textContent = "Loading backend order data...";
    display.replaceChildren();   // Clear any previous order display before loading new data

    try {
        const orders = await getOrders();  // This makes the actual fetch to order using the JSON Server.

        if (!Array.isArray(orders) || orders.length === 0) {
            message.textContent = "No backend orders were found.";
            return;
        }

        message.classList.add("valid");
        message.textContent = `${orders.length} backend order(s) loaded from JSON Server.`;
       
        const ordersTable = createOrdersTable(orders);
        display.replaceChildren(ordersTable); // Replace the loading area with the orders table.

    } catch (error) {
        console.error("Unable to load backend orders:", error);
        message.classList.add("error");
        message.textContent = "Order data could not be loaded. Start JSON Server and refresh this page.";
    }
}
