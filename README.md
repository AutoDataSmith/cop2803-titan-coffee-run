# Titan Coffee Run - Account Management, Sales Dashboard, Order Flow, and REST API

## Overview

This project is a client-side JavaScript application developed for SPC COP2803. It simulates a basic account management system for the Titan Coffee Run website and includes an administrator-only sales dashboard plus a customer coffee order flow.

The application includes user registration, login, logout, session handling, password management, an interactive quarterly sales visualization, and a session-based cart and checkout review page using browser storage and ES6 modules. Assignment 7 adds a JSON Server backend folder so order data can also be retrieved through a local REST API.

---

## Features

### Registration

* Create a new user account
* Real-time validation for all input fields
* Duplicate email detection
* Password strength feedback
* Password confirmation matching

### Login

* Authenticate users using stored credentials
* Error handling for invalid email or password
* Session storage for logged-in users
* Automatic redirect after successful login
* Regular users are directed to the order flow
* Supports the Assignment 5 administrator login for the sales dashboard

### Logout

* Clears the current logged-in user session
* Redirects user to login page
* Updates navigation state across pages
* Cart items remain in sessionStorage for the same user during the same browser session

### Password Management

* Logged-in users can change their password
* Password strength and match validation
* Updates both localStorage and sessionStorage

### Navigation State

* Login, Logout, Change Password, Sales, and Order links update dynamically
* Authenticated users see only relevant navigation options
* The Sales link appears only for the administrator account
* The Order link appears for logged-in users

### Sales Dashboard

* Admin-only access to the sales page
* Quarterly sales chart built with HTML, CSS, and JavaScript
* Animated bar graph with four quarters of data
* Reset and reload chart behavior
* Hover emphasis for sales values

### Order and Checkout Flow

* Logged-in users can access the coffee order page
* Coffee menu items are created with a `Product` class
* Cart entries are created with an `Order` class containing date, product, size, and quantity
* Users can select size and quantity before adding items to the cart
* Cart display updates immediately when items are added or removed
* Cart data persists during the browser session using user-specific `sessionStorage` keys
* Checkout page displays item name, size, quantity, item price, line total, and final total
* Checkout is disabled from the order page when the cart is empty

### Assignment 7 REST API Work

* Adds a separate JSON Server backend folder inside this repository
* Backend endpoint returns order data from `http://localhost:3000/orders`
* Frontend uses the Fetch API to retrieve order data on the admin sales dashboard
* Frontend error handling displays a message if JSON Server is unavailable
* Existing Assignment 6 cart and checkout behavior should remain in place

### Access Control

* Logged-out users are redirected to login for protected pages
* Non-admin logged-in users are redirected to an access denied page
* Direct access to order and checkout pages requires login

### Forgot Password (Informational)

* Explains how password reset works in real-world systems
* Describes secure verification methods
* Provides guidance for this project's limitations

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6 Modules)
* Browser Storage APIs:
  * localStorage
  * sessionStorage
* JSON Server for Assignment 7 REST API data retrieval

---

## Running Assignment 7

Start the backend from the `titan-run-backend` folder:

```text
npm install
npm start
```

If PowerShell blocks `npm.ps1`, use:

```text
npm.cmd install
npm.cmd start
```

Then verify the REST endpoint:

```text
http://localhost:3000/orders
```

Run the frontend from the `titan-run-frontend` folder with Live Server or another local server. Do not open the HTML files with `file://` because this project uses ES6 modules.

To view the admin dashboard and backend order display, log in with:

```text
Username: admin
Password: test123
```

---

## Storage Design

* **localStorage**
  * Stores all registered users
  * Persists across browser sessions

* **sessionStorage**
  * Stores the currently logged-in user
  * Stores the redirect target after login for protected pages
  * Stores the current shopping cart during the browser session with a user-specific cart key
  * Current user data is cleared on logout
  * Cart data remains until the browser session ends or that user's cart is changed

---

## Project Structure

```text
titan-run-frontend/
  index.html
  apply.html
  register.html
  login.html
  change-password.html
  forgot-password.html
  sales.html
  access-denied.html
  order.html
  checkout.html
  css/
    style.css
  img/
    banner-1.png
    banner-2.png
    banner-3.png
  js/
    auth-ui.js
    banner-slider.js
    login.js
    change-password.js
    orders-api.js
    sales-graph.js
    cart.js
    checkout.js
    modules/
      CartStorage.js
      FormValidator.js
      SessionManager.js
      StorageManager.js
      User.js

titan-run-backend/
  package.json
  package-lock.json
  db.json
```

After running `npm install` in `titan-run-backend`, the backend will also include `node_modules`.

---

## Design Decisions

### Client-Side Storage

The project uses browser storage instead of a backend. This simplifies development while still demonstrating core account management concepts.

### Sales Visualization Approach

The sales dashboard uses regular HTML elements styled with CSS transitions instead of Canvas or SVG. This approach matched the existing project structure better and kept the graph easier to debug, style, and explain for this class project.

### Cart Storage Approach

The order cart uses `sessionStorage` so items remain available during the user's browser session. Cart keys include the logged-in user's email so one user's cart does not appear for another user. The cart logic is kept in a small storage helper module so the data source can be changed more easily in a later assignment.

### Assignment 7 API Approach

Assignment 7 introduces a local JSON Server backend for REST API practice. The approach is additive: keep the working Assignment 6 cart and checkout flow in `sessionStorage`, then add an API-backed order display on the admin sales dashboard that retrieves order records from `http://localhost:3000/orders`.

This keeps the project aligned with the assignment goal of practicing client-server communication without unnecessarily rewriting the completed cart flow.

### Checkout Scope

The checkout page is a review page for this assignment. It displays the cart details and final total, but it does not process payment because real checkout processing would require backend support.

### Logged-In Password Reset

A traditional password reset requires email verification and backend support. Since this project is client-side only, password changes are limited to authenticated users.

### Modular JavaScript

Logic is separated into reusable modules:

* validation logic
* persistent storage management
* session management
* user model
* cart/order storage

This improves readability and maintainability.

### Real-Time Validation

Form inputs provide immediate feedback using helper messages, improving usability and reducing invalid submissions.

---

## Security Considerations

This application is not intended for production use. Limitations include:

* passwords stored in plain text
* no server-side validation
* no secure authentication tokens
* no email-based password reset
* client-side admin access rules
* cart and checkout data stored in browser session storage only

A real-world system would use:

* hashed passwords
* secure backend authentication
* token-based password reset flows
* protected session management
* server-side authorization checks

---

## AI-Assisted Development

AI was used to:

* generate and refine validation logic
* improve code structure and modular design
* explore password security concepts
* design user-friendly authentication flows
* review and refine the sales dashboard flow and interaction design
* plan and review the Assignment 6 order and checkout flow
* debug cart edge cases found during browser testing
* plan the Assignment 7 JSON Server and REST API integration
* draft Assignment 7 testing and documentation files

### Key Insights

* Client-side validation improves UX but is not secure on its own
* Password reset requires secure identity verification
* Storing password history should use hashed values, not plain text
* Different reset methods (email, SMS, MFA) impact usability and security differently
* Simple DOM elements plus CSS transitions can satisfy animation requirements without needing a graphics API
* Building the order flow in small tested steps made the checkout feature easier to debug
* Adding REST API retrieval as a focused feature is safer than rewriting working cart code without a clear requirement

---

## AI Usage Reflection

### AI Tools Used

I used ChatGPT earlier in the project and moved to Codex Desktop during Assignment 5 for a more manageable multi-file workflow.

### Estimated AI Contribution

I estimate that about 30% of this project was AI-assisted and 70% was my own work.

AI helped most with:

* explaining validation and storage concepts
* suggesting code structure
* reviewing logic and edge cases
* improving documentation language

I still made implementation decisions, tested the code, adjusted the logic, and corrected issues during development.

### Biggest Aha! Moment

My biggest aha! moment was realizing that AI is most useful when I ask for explanations, edge cases, and code review feedback instead of just asking it to write code. It worked better as a development partner than as a replacement for understanding the assignment.

### One Thing AI Could Not Help Me With

AI could not fully replace testing the project in my own browser and checking how all the files worked together in my actual app. I still had to debug integration issues, verify the user experience, and make sure the final behavior matched the assignment requirements.

## Conclusion

This project demonstrates a complete client-side account management workflow plus an administrator-only sales dashboard using modern JavaScript techniques. While simplified for learning purposes, it reflects key concepts used in real-world web applications, including validation, session handling, protected routes, modular design, and interactive UI behavior.
The Assignment 6 order flow adds object-oriented cart items, session-based cart persistence, dynamic DOM updates, and checkout total calculation.
Assignment 7 adds the next step toward a real client-server application by planning a JSON Server backend and REST API order-data retrieval.
