# Test Cases – Titan Coffee Run Credit Application

## Assignment 3 Test Cases – Application

### Test Case 1: Valid Application (Income > 20000)
Input: All fields valid, income = 25000  
Expected: Success message displayed  
Result: Pass

### Test Case 2: Valid Application (Income < 20000)
Input: All fields valid, income = 15000  
Expected: Rejection message displayed  
Result: Pass

### Test Case 3: Empty First Name
Input: First name left blank  
Expected: "This field is required" error  
Result: Pass

### Test Case 4: Email Mismatch
Input: Different email and confirm email  
Expected: "This entry must equal the first entry"  
Result: Pass

### Test Case 5: Invalid ZIP Code
Input: ZIP = 123  
Expected: "ZIP code must be 5 digits"  
Result: Pass

### Test Case 6: Invalid SSN
Input: SSN = 12  
Expected: "SSN must be exactly 4 digits"  
Result: Pass

### Test Case 7: Negative Income
Input: Income = -50  
Expected: "Income must be a positive number"  
Result: Pass

### Test Case 8: Consent Not Checked
Input: Checkbox not selected  
Expected: "You must agree before applying"  
Result: Pass

## Assignment 4 Test Cases – Account Management

### Test Case 9: Valid Registration
Input: First name = Ken, Last name = Smith, email = ken@test.com, password = 123456KWS, confirm password = 123456KWS, terms checked  
Expected: User is registered successfully and stored in localStorage  
Result: Pass

### Test Case 10: Duplicate Registration Attempt
Input: Register again with email = ken@test.com  
Expected: Message indicates the email is already registered and user is not added again  
Result: Pass

### Test Case 11: Invalid Email Format
Input: Email = test@  
Expected: Helper message indicates the email format is invalid and Register remains disabled  
Result: Pass

### Test Case 12: First Name Too Short
Input: First name = K  
Expected: Helper message requests at least 2 characters and Register remains disabled  
Result: Pass

### Test Case 13: Last Name Too Short
Input: Last name = S  
Expected: Helper message requests at least 2 characters and Register remains disabled  
Result: Pass

### Test Case 14: Weak Password Feedback
Input: Password = 123  
Expected: Password strength helper displays Weak password  
Result: Pass

### Test Case 15: Password Mismatch
Input: Password = 123456KWS, Confirm Password = Pass9999  
Expected: Helper message indicates passwords do not match and Register remains disabled  
Result: Pass

### Test Case 16: Terms Checkbox Not Selected
Input: All fields valid except terms checkbox unchecked  
Expected: Terms helper message appears and Register remains disabled  
Result: Pass

### Test Case 17: Successful Login
Input: Email = ken@test.com, Password = 123456KWS  
Expected: Login success message appears, sessionStorage is updated, and user is redirected to the home page  
Result: Pass

### Test Case 18: Login With Unknown Email
Input: Email = unknown@test.com, Password = 123456KWS  
Expected: Message indicates no account was found with that email address  
Result: Pass

### Test Case 19: Login With Incorrect Password
Input: Email = ken@test.com, Password = WrongPass1  
Expected: Message indicates the password is incorrect  
Result: Pass

### Test Case 20: Logout Behavior
Input: Click Logout while logged in  
Expected: Current user is removed from sessionStorage and user is redirected to login page  
Result: Pass

### Test Case 21: Logged-In User Accesses Login Page
Input: Navigate to login.html while already logged in  
Expected: User is redirected away from login page  
Result: Pass

### Test Case 22: Auth Navigation Visibility
Input: View navigation while logged out and while logged in  
Expected: Login is shown only when logged out; Logout and Change Password are shown only when logged in  
Result: Pass

### Test Case 23: Reset Password While Logged In
Input: Enter a new valid password and matching confirmation on reset-password.html  
Expected: Password is updated in localStorage and sessionStorage, and success message is shown  
Result: Pass

### Test Case 24: Reset Password With Mismatched Confirmation
Input: New password and confirm password do not match  
Expected: Helper message indicates passwords must match and password is not updated  
Result: Pass

### Test Case 25: Reset Password Page Access While Logged Out
Input: Navigate to reset-password.html while not logged in  
Expected: User is redirected to login.html  
Result: Pass

### Test Case 26: Forgot Password Information Page
Input: Click “Forgot your password?” from the login page  
Expected: Informational page loads explaining secure real-world reset workflows and directs the user to log in for password changes in this project  
Result: Pass