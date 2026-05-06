
# Issues found that could use a refinement or a refactoring pass:


1) The email address in register.html does not say in green "OK!" or "All Good" on a successful validation
2) Need to get rid of the extra span for error messaging. No need for 2
3) When the registration page is complete, we should either....
    - Log the user in directly at that point to a Success / Account page with a "Congratulations, your account is created" 
    OR...
    - Redirect to the Login Page with a message that states - "Congratulations, your account is created"


4) The register page is still visible for a logged in user. No need to see that is logged in
5) Instead of hiding "Change Password" on the Change-Password.html page, maybe add styling to the NAV that is is the "active" page and do this for all other pages

6) Assignment 6 cart currently adds a duplicate row when the same product and size are added more than once.
   Possible future options:
    - Increase the quantity on the existing cart item
    OR...
    - Show a message that the item is already in the cart

7) Assignment 6 currently uses the same product price for all sizes.
   In a real ordering system, medium and large sizes would probably cost more.
   This is not required for the assignment, but could be improved later.



