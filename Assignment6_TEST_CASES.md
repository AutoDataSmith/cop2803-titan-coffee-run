# Assignment 6 Test Cases - Titan Coffee Run

## Order Page Baseline Tests

Date tested: May 6, 2026  
Tester: Glenn  
Browser/server: Live Server

| Test ID | Test Description | Expected Result | Actual Result | Status |
| --- | --- | --- | --- | --- |
| A6-01 | Log in as a regular user and check navigation | Order link displays in the navigation | Order link displayed after login | Passed |
| A6-02 | Click the Order navigation link while logged in | User is taken to `order.html` | Order page loaded correctly | Passed |
| A6-03 | Log out and check navigation | Order link is hidden when logged out | Order link no longer displayed | Passed |
| A6-04 | Access `order.html` directly while logged out | User is redirected to `login.html` | User was properly redirected to login page | Passed |
| A6-05 | Log in after being redirected from `order.html` | User returns to the order page after login | User was redirected to order page | Passed |
| A6-06 | Add multiple items to the cart | Items display immediately in Current Cart | Four items displayed in the cart | Passed |
| A6-07 | Review cart layout after adding several items | Cart remains readable and usable | Item names wrapped in the second column, but UX was not broken | Passed |
| A6-08 | Click Return Home from `order.html` | User lands on `index.html` | User landed on home page correctly | Passed |
| A6-09 | Return to Order page after adding items | Cart remains available during the session | Current Cart persisted after navigating back to order page | Passed |

## Additional Order Tests To Run

| Test ID | Test Description | Expected Result | Status |
| --- | --- | --- | --- |
| A6-10 | Refresh `order.html` after adding cart items | Cart items still display during the same session | Passed |
| A6-11 | Try adding an item with quantity `0`, a negative number, or `.5` | Invalid item is not added to the cart | Passed |
| A6-20 | Try adding an item with quantity `1.5` | Invalid item should not be added to the cart | Passed after fix |
| A6-12 | Add different sizes for the same product | Cart displays the selected size for each entry | Passed |
| A6-13 | Remove one item from Current Cart | Selected item is removed and cart total updates | Passed |
| A6-14 | Click Proceed to Checkout while logged in | User is taken to `checkout.html` | Passed |
| A6-15 | Access `checkout.html` directly while logged out | User is redirected to `login.html` | Passed |
| A6-16 | Log in as admin and confirm Assignment 5 behavior | Admin still redirects to `sales.html` and can access sales dashboard | Passed |
| A6-17 | Check browser console on `order.html` and `checkout.html` | No unexpected JavaScript errors appear | Passed |
| A6-18 | Click Back to Order from `checkout.html` | User returns to `order.html` | Passed |
| A6-19 | Remove all items from Current Cart | Cart returns to empty state without UI errors | Passed |
| A6-21 | View `checkout.html` with cart items saved | Checkout displays item name, size, quantity, item price, line total, and final total | Passed |
| A6-22 | View `checkout.html` with an empty cart | Checkout displays an empty-cart message | Passed |
| A6-23 | View order page with an empty cart | Proceed to Checkout is disabled | Passed |
| A6-24 | Add an item after cart was empty | Proceed to Checkout becomes available | Passed |
| A6-25 | Remove all cart items | Proceed to Checkout becomes disabled again | Passed |
| A6-26 | Log in after being redirected from checkout | Regular user lands on `order.html` instead of `checkout.html` | Passed |
| A6-27 | Log out and log back in after adding items | Cart items still persist during the browser session | Passed |

## Notes

- The Current Cart panel may be slightly narrow when several items are added.
- This is not currently blocking functionality, but it can be considered for polish after checkout is complete.
- Cart items intentionally remain in `sessionStorage` after logout for this class project.
