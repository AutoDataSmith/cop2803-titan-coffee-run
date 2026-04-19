# Sprint 2 Notes – Titan Coffee Run

## User Story

**Title:** Create a Titan Coffee Run Account

**As a** new Titan Coffee Run customer,  
**I want to** create a secure account with modern user experience patterns,  
**So that I can** safely order coffee and manage my preferences.

---

## Acceptance Criteria

- The user can register with email validation and password strength requirements  
- The user receives real-time feedback during form input  
- The user can log in with session persistence  
- The user can reset their password  
- Code follows modern JavaScript (ES6+) standards and best practices  

---

## Feature Breakdown

### 1. Registration System
- Create a registration page with required fields:
  - First Name
  - Last Name
  - Email
  - Password
  - Confirm Password
  - Terms & Conditions checkbox  
- Implement real-time validation:
  - Email format validation  
  - Password strength indicator  
  - Password match confirmation  
- Disable Register button until all inputs are valid  
- Prevent duplicate account creation using stored user data  

---

### 2. JavaScript Architecture
- Use modular JavaScript structure (ES6 modules)  
- Create a `FormValidator` class to handle validation logic  
- Create a `User` class to represent user data  
- Create a `StorageManager` class to handle localStorage interactions  
- Keep logic separated and reusable  

---

### 3. Login System
- Create a login page  
- Validate user credentials against stored users  
- Implement session persistence using sessionStorage  
- Allow redirect to intended page after login (if applicable)  

---

### 4. Password Reset
- Create a password reset page  
- Allow user to update password after verifying account  
- Enforce password validation rules during reset  
- Update stored user data  

---

### 5. Data Storage Strategy
- Store registered users in localStorage  
- Store active session data in sessionStorage  
- Ensure data is structured consistently using the User class  

---

### 6. Testing and Edge Cases
- Validate edge cases such as:
  - Invalid email formats (e.g., "test@")  
  - Empty or whitespace-only passwords  
  - Duplicate email registration attempts  
  - Incorrect login credentials  
- Document all test cases in `TEST_CASES.md`  

---

### 7. Documentation Requirements
- Create the following supporting files:
  - `TEST_CASES.md`
  - `STORAGE_ARCHITECTURE.md`
  - `SECURITY_REVIEW.md`
  - `README.md`
- Document AI usage, design decisions, and security considerations  

---

## Development Approach

- Build features incrementally with small, testable steps  
- Validate functionality after each change  
- Keep code modular and readable  
- Use AI as a support tool, but review and understand all generated code  

---

## Notes

- This project uses client-side storage, so security is limited compared to real-world applications  
- Focus is on structure, validation, and user experience rather than production-level security  
- Code should remain clean, well-organized, and easy to maintain  