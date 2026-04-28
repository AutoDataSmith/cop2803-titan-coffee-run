
# Issues found that could use a refinement or a refatcoring pass:


1) The email address in Resister.html does not say in green "OK!" or "All Good" on a successful validation
2) Need to get rid of the extra span for error messaging. No need for 2
3) When the registratyion page is complete, we shoudl either....
    - Log the user in directly at that point to a Successs / Account page with a "Congratulations, your account is created" 
    OR...
    - Redirect to the Login Page with a message that states - "Congratulations, your account is created"


4) The register page is still visible for a logged in user. No need to see that is logged in
5) Instead of hiding "Change Password" on the Change-Password.html page, maybe add styling to the NAV that is is the "active" page and do this for all other pages



