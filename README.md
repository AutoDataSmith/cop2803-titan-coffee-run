# Titan Coffee Run – Account Management System

## Overview

This project is a client-side JavaScript application developed for SPC COP2803. It simulates a basic account management system for the Titan Coffee Run website.

The application includes user registration, login, logout, session handling, and password management using browser storage.

---

## Features

### Registration

* Create a new user account
* Real-time validation for all input fields
* Duplicate email detection
* Password strength feedback
* Password confirmation matching

### Login

* Authenticate users using stored credentials
* Error handling for invalid email or password
* Session storage for logged-in users
* Automatic redirect after successful login

### Logout

* Clears session storage
* Redirects user to login page
* Updates navigation state across pages

### Password Management

* Logged-in users can change their password
* Password strength and match validation
* Updates both localStorage and sessionStorage

### Navigation State

* Login, Logout, and Change Password links update dynamically
* Authenticated users see only relevant navigation options

### Forgot Password (Informational)

* Explains how password reset works in real-world systems
* Describes secure verification methods
* Provides guidance for this project’s limitations

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6 Modules)
* Browser Storage APIs:

  * localStorage
  * sessionStorage

---

## Storage Design

* **localStorage**

  * Stores all registered users
  * Persists across browser sessions

* **sessionStorage**

  * Stores the currently logged-in user
  * Cleared on logout or browser close

---

## Project Structure

```text
index.html
apply.html
register.html
login.html
reset-password.html
forgot-password.html

css/
  style.css

js/
  banner-slider.js
  login.js
  reset-password.js
  auth-ui.js
  modules/
    FormValidator.js
    StorageManager.js
    User.js
```

---

## Design Decisions

### Client-Side Storage

The project uses browser storage instead of a backend. This simplifies development while still demonstrating core account management concepts.

### Logged-In Password Reset

A traditional password reset requires email verification and backend support. Since this project is client-side only, password changes are limited to authenticated users.

### Modular JavaScript

Logic is separated into reusable modules:

* validation logic
* storage management
* user model

This improves readability and maintainability.

### Real-Time Validation

Form inputs provide immediate feedback using helper messages, improving usability and reducing invalid submissions.

---

## Security Considerations

This application is not intended for production use. Limitations include:

* passwords stored in plain text
* no server-side validation
* no secure authentication tokens
* no email-based password reset

A real-world system would use:

* hashed passwords
* secure backend authentication
* token-based password reset flows
* protected session management

---

## AI-Assisted Development

AI was used to:

* generate and refine validation logic
* improve code structure and modular design
* explore password security concepts
* design user-friendly authentication flows

### Key Insights

* Client-side validation improves UX but is not secure on its own
* Password reset requires secure identity verification
* Storing password history should use hashed values, not plain text
* Different reset methods (email, SMS, MFA) impact usability and security differently

---

## Conclusion

This project demonstrates a complete client-side account management workflow using modern JavaScript techniques. While simplified for learning purposes, it reflects key concepts used in real-world web applications, including validation, session handling, and modular design.
