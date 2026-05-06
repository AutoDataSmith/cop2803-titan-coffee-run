# Assignment 7 Sprint Notes - Titan Coffee Run

## Sprint Goal

Add a local REST API backend with JSON Server and update the Titan Coffee Run frontend so order data can be retrieved from `http://localhost:3000/orders`.

## User Story

**Title:** Retrieve Order Data from a REST API

**As a** Titan Coffee Run administrator,  
**I want to** view order data loaded from a backend endpoint,  
**So that I can** practice using client-server communication instead of relying only on hardcoded frontend data.

---

## Acceptance Criteria

- A separate backend folder exists for JSON Server
- The backend includes a valid `db.json` file
- `db.json` contains at least five orders
- JSON Server returns order data at `http://localhost:3000/orders`
- The frontend uses asynchronous JavaScript to request order data
- The frontend parses the JSON response
- The frontend displays the returned order data
- The frontend shows a clear error message if the API request fails
- Existing Assignment 6 cart and checkout behavior continues to work

---

## Feature Breakdown

### 1. Backend Project Setup

- Create a separate `titan-run-backend` folder inside the current project repository
- Initialize the backend with `npm init -y`
- Add JSON Server as a backend dependency
- Add a `db.json` file with an `orders` array
- Include at least five total order records

---

### 2. REST Endpoint Verification

- Start JSON Server from the backend folder
- Verify `http://localhost:3000/orders` returns JSON data
- Keep JSON Server running while testing the frontend

---

### 3. Frontend API Module

- Add a small frontend JavaScript module for API order retrieval
- Use `fetch()` to request `http://localhost:3000/orders`
- Parse the response with `.json()`
- Render the returned order data using DOM methods and `textContent`
- Avoid inserting API data directly with raw `innerHTML`

---

### 4. Frontend Display

- Add an order-data section to the frontend
- Display order fields clearly:
  - order id
  - date
  - product name
  - size
  - quantity
  - price
- Keep the display simple and consistent with the existing project style

---

### 5. Error Handling

- Handle failed network requests
- Handle non-success HTTP responses
- Display a readable message when JSON Server is unavailable
- Log useful details to the console for debugging without showing technical stack details to the user

---

### 6. Regression Testing

- Confirm regular login still redirects to the order flow
- Confirm admin login still reaches the sales dashboard
- Confirm cart add/remove behavior still works
- Confirm checkout totals still calculate correctly
- Confirm the frontend still runs through Live Server and not `file://`

---

## Development Approach

- Keep Assignment 7 additive
- Avoid unnecessary refactoring of the Assignment 6 cart storage code
- Use a separate backend folder inside the current repository so Git can track the frontend and backend together
- Make small, reviewable commits
- Document testing results as features are completed
- Use AI for planning, review, and debugging while keeping implementation decisions understandable

---

## Risks and Notes

- JSON Server and Live Server cannot both use the same port
- The assignment mentions an `orders-module.js` file, but this project does not currently have one; the new API script can serve as the equivalent frontend orders module
- The existing `menuProducts` array in `cart.js` is a coffee menu, not stored order history, so it should not be removed just to satisfy the hardcoded order-array requirement
- The existing `sessionStorage` cart should stay in place unless the assignment feedback requires converting the live cart to backend storage
- The backend folder is inside this repository rather than in a second Git repository, which keeps Assignment 7 easier to manage
- Error handling must be tested by stopping JSON Server on purpose
