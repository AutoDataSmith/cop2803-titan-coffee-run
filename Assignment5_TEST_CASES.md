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

## Test Case 8: Sales Chart Displays Four Quarters
Input: Log in as admin and open `sales.html`
Expected: The chart displays four bars labeled Jan-Mar, Apr-Jun, Jul-Sep, and Oct-Dec

## Test Case 9: Sales Bar Heights Are Proportional
Input: Log in as admin and open `sales.html`
Expected: The Jan-Mar bar is the tallest, followed by Apr-Jun, then Jul-Sep, then Oct-Dec

## Test Case 10: Sales Values Appear After Load Animation
Input: Log in as admin and open `sales.html`
Expected: Bars animate upward first, then the sales values appear after the animation finishes

## Test Case 11: Hover Emphasizes Sales Value
Input: Move the mouse over a sales bar group on `sales.html`
Expected: The visible sales value for that bar becomes bold on hover

## Test Case 12: Reset Chart Button Shrinks Bars
Input: Click `Reset Chart` on `sales.html`
Expected: All bars smoothly shrink back to zero and the button text changes to `Reload Chart`

## Test Case 13: Reload Chart Restores Bars
Input: After resetting the chart, click `Reload Chart`
Expected: All bars animate back to their original heights and the button text changes back to `Reset Chart`

## Test Case 14: Sales Page Matches Site Styling
Input: Open `sales.html`
Expected: Header, navigation, form-section layout, colors, and footer are visually consistent with the rest of the site

## Test Case 15: Sales Page Works On Narrow Screen
Input: Open `sales.html` and reduce the browser width
Expected: The chart layout stacks cleanly and remains readable without overlapping text
