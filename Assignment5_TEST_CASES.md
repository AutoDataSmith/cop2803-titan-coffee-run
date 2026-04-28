# Assignment 5 Test Cases

## Test Case 1: Sales Link Hidden While Logged Out
Input: Open the site while not logged in
Expected: The Sales link is not visible in the navigation

## Test Case 2: Sales Link Hidden For Normal User
Input: Log in with a regular registered user account
Expected: The Sales link is not visible in the navigation

## Test Case 3: Sales Link Visible For Admin
Input: Log in with username/email `admin` and password `test123`
Expected: The Sales link is visible in the navigation

## Test Case 4: Non-Admin Redirect From Sales Page While Logged Out
Input: Navigate directly to `sales.html` while logged out
Expected: The user is redirected to `login.html`

## Test Case 5: Post-Login Redirect To Sales Page
Input: Navigate directly to `sales.html`, then log in with admin credentials
Expected: After login, the user is redirected to `sales.html`

## Test Case 6: Normal User Cannot Access Sales Page
Input: Log in with a regular registered user and try to open `sales.html`
Expected: The user is redirected to `access-denied.html`

## Test Case 7: Access Denied Page Message
Input: Reach `access-denied.html` as a logged-in non-admin user
Expected: The page explains that the sales dashboard is restricted to the administrator account
