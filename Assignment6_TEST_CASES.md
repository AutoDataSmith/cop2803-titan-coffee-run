# Assignment 6 Test Cases - Titan Coffee Run

## Order Page Baseline Tests

Date tested: May 6, 2026  
Tester: Ken Smith  
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
| A6-10 | Refresh `order.html` after adding cart items | Cart items still display during the same session | Not tested yet |
| A6-11 | Try adding an item with quantity `0` or a blank quantity | Quantity resets to `1` and invalid item is not added | Not tested yet |
| A6-12 | Add different sizes for the same product | Cart displays the selected size for each entry | Not tested yet |
| A6-13 | Log in as admin and confirm Assignment 5 behavior | Admin still redirects to `sales.html` and can access sales dashboard | Not tested yet |
| A6-14 | Check browser console on `order.html` | No unexpected JavaScript errors appear | Not tested yet |

## Notes

- The Current Cart panel may be slightly narrow when several items are added.
- This is not currently blocking functionality, but it can be considered for polish after checkout is complete.
