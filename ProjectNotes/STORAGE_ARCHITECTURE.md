# Storage Architecture – Titan Coffee Run

## Overview

Assignment 4 uses browser storage to support account registration, login, logout, and password changes. Since this project is a client-side JavaScript application without a backend server, browser storage is used to simulate account persistence and session management.

The application uses two storage mechanisms:

* `localStorage` for registered user account data
* `sessionStorage` for the currently logged-in user session

This design keeps account data available across browser sessions while limiting the active login session to the current browser tab or window.

---

## localStorage Usage

### Purpose

`localStorage` is used to store all registered users so their account data remains available even after the browser is closed and reopened.

### Storage Key

```
titanCoffeeRunUsers
```

### Data Format

Users are stored as a JSON string representing an array of user objects.

Example structure:

```json
[
  {
    "firstName": "Ken",
    "lastName": "Smith",
    "email": "ken@test.com",
    "password": "123456KWS"
  }
]
```

### Why localStorage Was Chosen

`localStorage` was selected because:

* it persists after the browser is closed
* it is simple to use in a client-side project
* it works well for storing a small amount of structured data
* it allows account data to remain available for later login tests

### Limitations

`localStorage` is not secure for real-world credential storage because:

* data is stored in the browser and can be viewed by the user
* passwords are not protected like they would be in a real backend system
* malicious scripts could potentially access stored data if the page were vulnerable to XSS

For this assignment, `localStorage` is acceptable as a learning tool, but not as a production authentication solution.

---

## sessionStorage Usage

### Purpose

`sessionStorage` is used to store the currently logged-in user so the application can track authentication state during the active session.

### Storage Key

```
titanCoffeeRunCurrentUser
```

### Why sessionStorage Was Chosen

`sessionStorage` was selected because:

* it lasts only for the current browser tab or window
* it is appropriate for temporary session state
* it allows login/logout behavior to be tested clearly
* it automatically clears when the tab or browser session ends

### Session Behavior

When a user logs in successfully:

* the matched user object is stored in `sessionStorage`
* the UI updates to hide the Login link
* the UI updates to show Logout and Change Password links

When a user logs out:

* the current user is removed from `sessionStorage`
* the user is redirected to the login page
* protected pages such as the password-change page are no longer accessible

---

## StorageManager Class Design

The `StorageManager` class centralizes all browser storage operations related to user accounts.

### Current Methods

* `getUsers()`
  Reads the users array from `localStorage`

* `saveUsers(users)`
  Saves the updated users array back to `localStorage`

* `findUserByEmail(email)`
  Looks up a user by normalized email address

* `addUser(user)`
  Adds a new user if the email is not already registered

### Design Benefits

Using a storage manager class provides:

* separation of concerns
* reusable storage logic
* easier testing and debugging
* cleaner page-level scripts

---

## User Data Model

The project uses a `User` class to represent user account data.

### Stored Properties

* first name
* last name
* email
* password

### Serialization Approach

Before storing a user, the application converts the `User` instance into plain JSON data using `toJSON()`.

When reading users from `localStorage`, the application currently works with plain objects returned by `JSON.parse()` rather than converting them back into full `User` instances. This was a deliberate choice to keep the implementation simpler, since only the stored data values are needed for login and password update operations.

---

## Why a Cache Layer Was Not Added

A possible enhancement would be to create a caching layer that stores users in memory during the session to reduce repeated reads from `localStorage`.

This was not implemented because:

* the data set is very small
* browser storage performance is acceptable for this assignment
* adding a cache would increase code complexity
* cached data would need to stay synchronized with browser storage

For this project, simplicity and readability were prioritized over early optimization.

---

## Data Validation and Integrity

The storage architecture relies on client-side validation before writing user data:

* registration checks for duplicate email addresses
* email addresses are normalized to lowercase before storage
* login checks stored credentials against entered values
* password changes update both `localStorage` and `sessionStorage`

This helps keep stored data consistent, even though it is still client-side only.

---

## Security Considerations

This storage design is appropriate only for a classroom demonstration of account workflows. In a production system:

* passwords should be hashed, not stored in plain text
* authentication should be handled by a secure backend
* password reset should use secure, time-limited tokens
* session management should use secure cookies or token-based authentication
* all sensitive operations should be validated server-side

---

## Conclusion

The storage design for Assignment 4 uses `localStorage` for persistent account data and `sessionStorage` for the active authenticated user. This approach supports the required registration, login, logout, and password-change features while keeping the code modular and understandable.

Although the approach is not suitable for a real-world secure authentication system, it is a practical and appropriate solution for a client-side JavaScript assignment focused on learning browser storage, modular design, and account-management workflows.
