const CART_STORAGE_KEY = "titanCoffeeRunCart";

/**
 * Represents one coffee product on the menu.
 */
export class Product {
    /**
     * @param {string} name - Coffee product name.
     * @param {number} price - Base price for one item.
     */
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    /**
     * Return the JSON-safe version of this object.
     * @returns {{name: string, price: number}}
     */
    toJSON() {
        return {
            name: this.name,
            price: this.price
        };
    }

    /**
     * Recreate a Product object from stored data.
     * @param {{name: string, price: number}} data - Stored product data.
     * @returns {Product}
     */
    static fromJSON(data) {
        return new Product(data.name, data.price);
    }
}

/**
 * Represents one cart item/order line.
 */
export class Order {
    /**
     * @param {string} date - Date the item was added to the order.
     * @param {Product} product - Selected coffee product.
     * @param {string} size - Selected size: small, medium, or large.
     * @param {number} quantity - Number of items ordered.
     */
    constructor(date, product, size, quantity) {
        this.date = date;
        this.product = product;
        this.size = size;
        this.quantity = quantity;
    }

    /**
     * Calculate the total for this cart line.
     * @returns {number}
     */
    getLineTotal() {
        return this.product.price * this.quantity;
    }

    /**
     * Return the JSON-safe version of this object.
     * @returns {{date: string, product: Object, size: string, quantity: number}}
     */
    toJSON() {
        return {
            date: this.date,
            product: this.product.toJSON(),
            size: this.size,
            quantity: this.quantity
        };
    }

    /**
     * Recreate an Order object from stored cart data.
     * @param {{date: string, product: Object, size: string, quantity: number}} data - Stored order data.
     * @returns {Order}
     */
    static fromJSON(data) {
        return new Order(
            data.date,
            Product.fromJSON(data.product),
            data.size,
            data.quantity
        );
    }
}

/**
 * Handles cart saving and loading.
 * I am keeping this separate because later assignments may use an API instead of sessionStorage.
 *
 * Storage pattern:
 * class instance -> plain storage object -> JSON string
 * JSON string -> plain storage object -> class instance
 */
export class CartStorage {
    /**
     * @param {string} storageKey - sessionStorage key for the cart.
     */
    constructor(storageKey = CART_STORAGE_KEY) {
        this.storageKey = storageKey;
    }

    /**
     * Get all cart orders from sessionStorage.
     * @returns {Order[]}
     */
    getOrders() {
        const ordersJSON = sessionStorage.getItem(this.storageKey);

        if (!ordersJSON) {
            return [];
        }

        try {
            const orderData = JSON.parse(ordersJSON);
            // JSON gives back plain objects, so rebuild them as Order objects.
            return orderData.map((item) => Order.fromJSON(item));
        } catch (error) {
            console.error("Unable to parse cart data:", error);
            sessionStorage.removeItem(this.storageKey);
            return [];
        }
    }

    /**
     * Save the current cart orders to sessionStorage.
     * @param {Order[]} orders - Current cart orders.
     * @returns {void}
     */
    saveOrders(orders) {
        // Convert Order instances to plain objects before saving.
        const plainOrders = orders.map((order) => order.toJSON());
        sessionStorage.setItem(this.storageKey, JSON.stringify(plainOrders));
    }

    /**
     * Remove one item from the cart by its position in the list.
     * @param {number} orderIndex - Index of the order to remove.
     * @returns {void}
     */
    removeOrder(orderIndex) {
        const orders = this.getOrders();
        orders.splice(orderIndex, 1);
        this.saveOrders(orders);
    }
}

/**
 * Format a number as a dollar amount.
 * @param {number} amount - Amount to format.
 * @returns {string}
 */
export function formatCurrency(amount) {
    return `$${amount.toFixed(2)}`;
}
