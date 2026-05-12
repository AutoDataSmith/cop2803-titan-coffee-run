# Assignment 7 Test Cases - Titan Coffee Run

## REST API and Frontend Tests

Date tested: May 12, 2026<br>
Tester: Ken Smith<br>
Frontend server: Live Server from `titan-run-frontend`<br>
Backend server: JSON Server on `http://localhost:3000`

| Test ID | Test Description | Expected Result | Actual Result | Status |
| --- | --- | --- | --- | --- |
| A7-01 | Start JSON Server from the backend folder | JSON Server starts without errors and watches `db.json` | JSON Server started with `npm start` after running `npm install` | Passed |
| A7-02 | Open `http://localhost:3000/orders` in the browser | Browser displays JSON order data | Endpoint returned order JSON from the backend | Passed |
| A7-03 | Confirm `db.json` contains at least five orders | At least five properly formatted orders are present | `db.json` contains five order records | Passed |
| A7-04 | Open the frontend through Live Server | Frontend loads without using `file://` | Live Server launched the site correctly | Passed |
| A7-05 | View the page that displays backend order data | API order data appears on the frontend page | Backend order table rendered correctly on `sales.html` | Passed |
| A7-06 | Check browser console after loading API orders | No unexpected JavaScript errors appear | No errors appeared in the Chrome console | Passed |
| A7-07 | Stop JSON Server and refresh the frontend page | Frontend displays a clear error message | Frontend displayed: "Order data could not be loaded. Start JSON Server and refresh this page." | Passed |
| A7-08 | Add a new order to `db.json` and refresh the frontend | New order appears in the frontend display | Sixth order appeared after refreshing the Sales page | Passed |

## Assignment 6 Regression Tests

| Test ID | Test Description | Expected Result | Actual Result | Status |
| --- | --- | --- | --- | --- |
| A7-09 | Log in as a regular user | User is redirected to the order flow | Regular user login and redirect worked correctly | Passed |
| A7-10 | Add an item to the cart | Cart updates immediately | Cart updated after adding an item | Passed |
| A7-11 | Remove an item from the cart | Item is removed and total updates | Item was removed and cart total updated | Passed |
| A7-12 | Proceed to checkout with cart items | Checkout displays item details and final total | Checkout displayed item details and final total | Passed |
| A7-13 | Log in as the admin user | Admin can still access the sales dashboard | Admin login and sales dashboard access worked correctly | Passed |

## Notes

- The frontend must be opened from the `titan-run-frontend` folder through Live Server or another local server because the project uses ES6 modules.
- JSON Server must be running for the successful API retrieval tests.
- For the error handling test, JSON Server should be stopped on purpose.
- The Assignment 6 sessionStorage cart should continue working after the Assignment 7 REST API display is added.
- JavaScript syntax was checked before final browser testing.
