# Sprint 3 Notes - Titan Coffee Run

## User Story

**Title:** Build the Customer Order and Checkout Flow

**As a** Titan Coffee Run customer,  
**I want to** place a coffee order through the web application,  
**So that I can** select coffee items, review my cart, and see my total before purchase.

---

## Acceptance Criteria

- A logged-in user can access an order page after login
- The order page includes a linked `js/cart.js` file
- `cart.js` includes both a `Product` class and an `Order` class
- Users can select coffee items, sizes, and quantities
- The shopping cart updates immediately when items are added
- Cart data remains available during the user's session
- A checkout page displays item names, quantities, sizes, and individual prices
- The checkout page calculates and displays the final total amount due
- Assignment 5 admin sales access continues to work correctly

---

## Feature Breakdown

### 1. Order Page Access
- Reuse the current session-based login system from Assignments 4 and 5
- Redirect regular logged-in users to a new order page after login
- Keep the order page protected so logged-out users are redirected to `login.html`
- Preserve the existing admin redirect to `sales.html`

---

### 2. Cart Script and Class Design
- Create a new `js/cart.js` file
- Add a `Product` class with:
  - product name
  - product price
- Add an `Order` class with:
  - date of order
  - product information
  - size selection
  - quantity
- Keep the class structure simple and easy to explain for class review

---

### 3. Order Page Interface
- Create a new `order.html` page
- Reuse the existing site header, navigation, and footer structure
- Add a simple coffee menu with item name, price, size selection, quantity input, and add-to-cart action
- Display a live cart summary on the same page
- Keep the interface practical and readable rather than over-designed

---

### 4. Cart Persistence and Dynamic Updates
- Use `sessionStorage` to store cart items during the active login session
- Update the cart display immediately after each item is added or changed
- Make sure the cart can be reloaded when the user returns to the page during the same session
- Keep the storage logic straightforward and consistent with the existing auth/session approach

---

### 5. Checkout Page and Totals
- Create a new `checkout.html` page
- Show all cart items clearly with:
  - item name
  - quantity
  - size
  - individual price
- Calculate the sum of all cart items
- Display the final total clearly before purchase confirmation
- Keep the checkout behavior simple since the assignment does not require real payment processing

---

### 6. Testing and Validation
- Verify regular users can log in and reach the order flow
- Verify logged-out users cannot access protected order pages directly
- Verify admin users still reach the sales dashboard
- Verify cart updates appear without refreshing the page
- Verify cart data remains during the session
- Verify checkout totals are accurate
- Record testing results in a future Assignment 6 test document

---

## Development Approach

- Build Assignment 6 on top of the completed Assignment 5 project
- Make the fewest necessary changes to existing files
- Add new pages and cart logic incrementally with small reviewable commits
- Test each milestone in Live Server before moving to the next one
- Use AI mainly for planning, requirement checks, and debugging specific issues

---

## Notes

- This assignment is additive, so existing authentication, navigation, and session helpers should be reused instead of replaced
- The project already uses ES6 modules, so new scripts should continue using `type="module"`
- The site must still be run through Live Server or another local server, not `file://`
- The assignment requires object-oriented structure, so using actual classes in `cart.js` is important for grading
- The implementation should stay at a practical class-project level and avoid unnecessary refactoring
- AI use should stay selective and documented, with the main value coming from planning, review, and debugging help rather than one-shot solution generation
