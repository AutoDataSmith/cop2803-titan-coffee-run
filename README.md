# Titan Coffee Run - Account Management and Sales Dashboard

## Overview

This project is a client-side JavaScript application developed for SPC COP2803. It simulates a basic account management system for the Titan Coffee Run website and includes an administrator-only sales dashboard.

The application includes user registration, login, logout, session handling, password management, and an interactive quarterly sales visualization using browser storage and ES6 modules.

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
* Supports the Assignment 5 administrator login for the sales dashboard

### Logout

* Clears session storage
* Redirects user to login page
* Updates navigation state across pages

### Password Management

* Logged-in users can change their password
* Password strength and match validation
* Updates both localStorage and sessionStorage

### Navigation State

* Login, Logout, Change Password, and Sales links update dynamically
* Authenticated users see only relevant navigation options
* The Sales link appears only for the administrator account

### Sales Dashboard

* Admin-only access to the sales page
* Quarterly sales chart built with HTML, CSS, and JavaScript
* Animated bar graph with four quarters of data
* Reset and reload chart behavior
* Hover emphasis for sales values

### Access Control

* Logged-out users are redirected to login for protected pages
* Non-admin logged-in users are redirected to an access denied page

### Forgot Password (Informational)

* Explains how password reset works in real-world systems
* Describes secure verification methods
* Provides guidance for this project's limitations

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
  * Stores the redirect target after login for protected pages
  * Cleared on logout or browser close

---

## Project Structure

```text
index.html
apply.html
register.html
login.html
change-password.html
forgot-password.html
sales.html
access-denied.html

css/
  style.css

js/
  auth-ui.js
  banner-slider.js
  login.js
  change-password.js
  sales-graph.js
  modules/
    FormValidator.js
    SessionManager.js
    StorageManager.js
    User.js
```

---

## Design Decisions

### Client-Side Storage

The project uses browser storage instead of a backend. This simplifies development while still demonstrating core account management concepts.

### Sales Visualization Approach

The sales dashboard uses regular HTML elements styled with CSS transitions instead of Canvas or SVG. This approach matched the existing project structure better and kept the graph easier to debug, style, and explain for this class project.

### Logged-In Password Reset

A traditional password reset requires email verification and backend support. Since this project is client-side only, password changes are limited to authenticated users.

### Modular JavaScript

Logic is separated into reusable modules:

* validation logic
* persistent storage management
* session management
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
* client-side admin access rules

A real-world system would use:

* hashed passwords
* secure backend authentication
* token-based password reset flows
* protected session management
* server-side authorization checks

---

## AI-Assisted Development

AI was used to:

* generate and refine validation logic
* improve code structure and modular design
* explore password security concepts
* design user-friendly authentication flows
* review and refine the sales dashboard flow and interaction design

### Key Insights

* Client-side validation improves UX but is not secure on its own
* Password reset requires secure identity verification
* Storing password history should use hashed values, not plain text
* Different reset methods (email, SMS, MFA) impact usability and security differently
* Simple DOM elements plus CSS transitions can satisfy animation requirements without needing a graphics API

---

## AI Usage Reflection

### AI Tools Used

I used ChatGPT earlier in the project and moved to Codex Desktop during Assignment 5 for a more manageable multi-file workflow.

### Estimated AI Contribution

I estimate that about 30% of this project was AI-assisted and 70% was my own work.

AI helped most with:

* explaining validation and storage concepts
* suggesting code structure
* reviewing logic and edge cases
* improving documentation language

I still made implementation decisions, tested the code, adjusted the logic, and corrected issues during development.

### Biggest Aha! Moment

My biggest aha! moment was realizing that AI is most useful when I ask for explanations, edge cases, and code review feedback instead of just asking it to write code. It worked better as a development partner than as a replacement for understanding the assignment.

### One Thing AI Could Not Help Me With

AI could not fully replace testing the project in my own browser and checking how all the files worked together in my actual app. I still had to debug integration issues, verify the user experience, and make sure the final behavior matched the assignment requirements.

## Conclusion

This project demonstrates a complete client-side account management workflow plus an administrator-only sales dashboard using modern JavaScript techniques. While simplified for learning purposes, it reflects key concepts used in real-world web applications, including validation, session handling, protected routes, modular design, and interactive UI behavior.
