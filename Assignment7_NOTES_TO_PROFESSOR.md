# Assignment 7 Notes to Professor

## Assignment 7 Scope

Assignment 7 adds a local mock backend using JSON Server and updates the Titan Coffee Run frontend so it can retrieve order data through a REST API endpoint.

The completed Assignment 6 project already had a working customer order/cart/checkout flow using `sessionStorage`. For Assignment 7, I am keeping that flow in place and adding API-based order retrieval as an additional feature. This avoids rewriting the working cart behavior unless the assignment specifically requires it.

The project is organized with separate frontend and backend folders inside one Git repository:

- `titan-run-frontend`
- `titan-run-backend`

## Backend Setup

The backend has been added as a separate folder named `titan-run-backend` inside the same project repository. This keeps the frontend and backend together for Git tracking while still separating the mock REST API files from the frontend files.

It includes:

- `package.json`
- `package-lock.json`
- `db.json`
- JSON Server as a dependency

After running `npm install` inside the backend folder, it will also include `node_modules`.

The order endpoint will be:

```text
http://localhost:3000/orders
```

The `db.json` file includes at least five order records with unique values for `id`, `date`, and product details.

## Planned Frontend Update

The frontend will use the Fetch API to retrieve order data from JSON Server. The fetched data will be displayed on the page after it is successfully returned from the backend.

The frontend will also include error handling so a user-friendly message appears if JSON Server is not running or the request fails.

In this project, the API-backed order data is displayed on the administrator sales dashboard. This keeps the existing customer order/cart/checkout flow from Assignment 6 intact while still demonstrating REST API data retrieval for Assignment 7.

## AI Use Summary

AI was used to help review the Assignment 7 requirements, compare them to the existing Assignment 6 order/cart implementation, identify grading risks, and plan a small REST API integration.

I used AI mainly for:

- Requirement review
- Implementation planning
- Scope control
- Testing checklist creation
- Documentation drafting

I still made the project decisions, will run the local backend and frontend myself, and will test the final behavior in the browser.

## Testing Plan

Testing will include:

- Verifying JSON Server starts successfully
- Opening `http://localhost:3000/orders` directly in the browser
- Confirming at least five orders exist in `db.json`
- Confirming the frontend displays the backend order data
- Stopping JSON Server to confirm error handling works
- Adding another order to `db.json` and confirming the frontend updates
- Retesting key Assignment 6 cart and checkout behavior

## Submission Note

The final submission should include both the `titan-run-frontend` project and the `titan-run-backend` project. If `node_modules` is excluded from the backend folder, the grader should run:

```text
npm install
```

inside the `titan-run-backend` folder before starting JSON Server. The backend can then be started with:

```text
npm start
```

On my Windows PowerShell setup, I used `npm.cmd install` and `npm.cmd start` because the `npm.ps1` script was blocked by execution policy.
