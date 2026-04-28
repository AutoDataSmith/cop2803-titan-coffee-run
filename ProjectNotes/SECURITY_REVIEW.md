# Security Review – Titan Coffee Run

## Overview

This project implements a client-side account management system using JavaScript, `localStorage`, and `sessionStorage`. While the application successfully demonstrates registration, login, logout, and password change workflows, it does not represent a secure production system.

This document reviews the security limitations of the current implementation and explains how a real-world system would address them.

---

## Key Security Limitations

### 1. Plain Text Password Storage

**Current Implementation**

* User passwords are stored directly in `localStorage` as plain text.
* Passwords are compared directly during login.

**Risk**

* Anyone with access to the browser can view stored passwords.
* Browser developer tools expose all stored data.
* This violates basic security practices.

**Production Solution**

* Passwords must be hashed using a strong algorithm. 
* Only the hash is stored, never the actual password.
* Password comparison is done by hashing the input and comparing hashes.

---

### 2. No Server-Side Authentication

**Current Implementation**

* All authentication logic runs in the browser.
* There is no backend verification.

**Risk**

* Users can modify JavaScript in the browser.
* Authentication logic can be bypassed.
* No protection against tampering.

**Production Solution**

* Authentication must be handled on a secure server.
* The server validates credentials and issues a session or token.
* Client-side code should never be trusted for security decisions.

---

### 3. Insecure Password Reset Approach

**Current Implementation**

* Password reset is implemented only for logged-in users.
* There is no identity verification for logged-out users.

**Risk**

* A true “forgot password” flow is not possible.
* No mechanism exists to verify user identity outside an active session.

**Production Solution**

* Use secure, time-limited reset tokens.
* Send reset links via verified email.
* Require additional verification (e.g., MFA) for sensitive operations.

---

### 4. No Protection Against Cross-Site Scripting (XSS)

**Current Implementation**

* User input is not sanitized beyond basic validation.
* Data is stored and reused directly from browser storage.

**Risk**

* Malicious scripts could access `localStorage` or `sessionStorage`.
* Stored data could be manipulated or exposed.

**Production Solution**

* Sanitize and validate all inputs on both client and server.
* Use Content Security Policy (CSP).
* Avoid directly injecting user-controlled content into the DOM.

---

### 5. Session Management Limitations

**Current Implementation**

* Uses `sessionStorage` to track the logged-in user.
* Session ends when the tab or browser closes.

**Risk**

* No expiration or timeout control.
* No protection against session hijacking.
* Session data is accessible via browser tools.

**Production Solution**

* Use secure HTTP-only cookies or token-based authentication (e.g., JWT).
* Implement session expiration and renewal.
* Protect sessions with secure flags and HTTPS.

---

### 6. No Rate Limiting or Brute Force Protection

**Current Implementation**

* Unlimited login attempts are allowed.

**Risk**

* Password guessing or brute force attacks are possible.

**Production Solution**

* Limit login attempts per user/IP.
* Add account lockout or cooldown periods.
* Implement CAPTCHA for repeated failures.

---

## Password Policy Considerations

The application includes a password strength indicator but does not enforce advanced security rules.

### Improvements for Production

* Require minimum length (e.g., 8–12 characters)
* Require a mix of uppercase, lowercase, numbers, and symbols
* Check against common password lists (e.g., “password123”)
* Prevent reuse of previous passwords (store hashed password history)

---

## Alternative Verification Methods (No Email)

As part of the design challenge, alternative password reset verification methods include:

* SMS verification codes
* Security questions (less secure, but sometimes used)
* Authenticator apps (e.g., Google Authenticator)
* Biometric verification (on supported devices)

Each method has trade-offs between security and usability.

---

## UX Implications of Password Reset Design

Different reset approaches affect usability:

* **Email reset links**

  * Familiar and widely accepted
  * Requires access to email
* **SMS codes**

  * Faster but dependent on phone access
* **Security questions**

  * Easy to use but often insecure
* **Authenticator apps**

  * Highly secure but adds complexity

This project uses a logged-in password change flow to balance simplicity and security within a client-side environment.

---

## Why This Approach Is Acceptable for the Assignment

This project intentionally uses client-side storage because:

* the assignment focuses on JavaScript concepts
* no backend or database is required
* it allows demonstration of account workflows

The implementation shows understanding of:

* validation logic
* modular design
* session handling
* UX patterns for authentication

---

## Conclusion

The Titan Coffee Run account system demonstrates functional account management using browser storage. However, it is not secure for real-world use due to:

* plain text password storage
* lack of server-side validation
* limited session protection

In a production system, all authentication and sensitive operations must be handled securely on the server using encryption, hashing, and verified identity workflows.

This project provides a strong conceptual foundation while clearly illustrating the limitations of client-side-only security.
