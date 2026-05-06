
# Issues found that could use a refinement or a refactoring pass:


1) The email address in register.html does not say in green "OK!" or "All Good" on a successful validation
2) Need to get rid of the extra span for error messaging. No need for 2
3) When the registration page is complete, we should either....
    - Log the user in directly at that point to a Success / Account page with a "Congratulations, your account is created" 
    OR...
    - Redirect to the Login Page with a message that states - "Congratulations, your account is created"


4) FIXED ~~~The register page is still visible for a logged in user. No need to see that is logged in~~~
5) Instead of hiding "Change Password" on the Change-Password.html page, maybe add styling to the NAV that is is the "active" page and do this for all other pages

6) Assignment 6 cart currently adds a duplicate row when the same product and size are added more than once.
   Possible future options:
    - Increase the quantity on the existing cart item
    OR...
    - Show a message that the item is already in the cart

7) Assignment 6 currently uses the same product price for all sizes.
   In a real ordering system, medium and large sizes would probably cost more.
   This is not required for the assignment, but could be improved later.

8) Consider renaming StorageManager.js to something more specific like UserStorage.js.
   The project now has separate user storage and cart/order storage, so clearer naming may help later.
   This is deferred because renaming it now could risk the existing login, registration, and password flows.

9) Storage-related file names are becoming confusing as the project grows.
   StorageManager.js uses localStorage for registered users.
   SessionManager.js uses sessionStorage for login and redirect state.
   CartStorage.js uses sessionStorage for cart/order data.
   A future cleanup could organize these into a clearer storage folder and naming pattern.

10) The Current Cart panel may be slightly narrow when several items are added. Might need a style pass to make it look better
