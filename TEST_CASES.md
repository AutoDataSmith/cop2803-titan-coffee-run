# Test Cases – Titan Coffee Run Credit Application

## Test Case 1: Valid Application (Income > 20000)
Input: All fields valid, income = 25000  
Expected: Success message displayed  
Result: Pass

## Test Case 2: Valid Application (Income < 20000)
Input: All fields valid, income = 15000  
Expected: Rejection message displayed  
Result: Pass

## Test Case 3: Empty First Name
Input: First name left blank  
Expected: "This field is required" error  
Result: Pass

## Test Case 4: Email Mismatch
Input: Different email and confirm email  
Expected: "This entry must equal the first entry"  
Result: Pass

## Test Case 5: Invalid ZIP Code
Input: ZIP = 123  
Expected: "ZIP code must be 5 digits"  
Result: Pass

## Test Case 6: Invalid SSN
Input: SSN = 12  
Expected: "SSN must be exactly 4 digits"  
Result: Pass

## Test Case 7: Negative Income
Input: Income = -50  
Expected: "Income must be a positive number"  
Result: Pass

## Test Case 8: Consent Not Checked
Input: Checkbox not selected  
Expected: "You must agree before applying"  
Result: Pass