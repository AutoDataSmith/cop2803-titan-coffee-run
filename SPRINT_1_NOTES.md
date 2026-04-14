# Sprint 1 Notes – Titan Coffee Run

## Agile Methodology
Agile is a software development approach that focuses on building projects in small, manageable pieces. Instead of completing everything at once, developers work in short cycles, allowing for testing, feedback, and improvements throughout the process.

## Sprint
A sprint is a short development cycle in Agile, usually lasting one to two weeks. During a sprint, a specific set of tasks or features is completed, tested, and reviewed before moving on to the next set of work.

## User Story
A user story describes a feature from the perspective of the user. It explains what the user wants to do and why. For this assignment, the user story is applying for a credit line so a customer can place orders.

## Acceptance Criteria
Acceptance criteria define the conditions that must be met for a feature to be considered complete. These include things like being able to submit the form, receiving validation feedback, and getting a qualification result.

## Breaking Work into Tasks
Breaking a user story into smaller tasks makes development easier to manage. It allows developers to focus on one piece at a time, test each part, and track progress more effectively. This also reduces errors and improves code quality.


## User Story Analysis

### Sprint 1 User Story Title: Apply for a Titan Coffee Run credit line

**As a** potential customer, **I want to** apply for a Titan Coffee Run credit line **so I can** place orders for coffee.

### Acceptance Criteria

- The user can access the application form from the homepage.
- The user can enter information into all required fields.
- The user is notified if any fields are missing or incorrect.
- The user is notified if the email fields do not match.
- The user receives a message if they qualify for a credit line.
- The user receives a message if they do not qualify for a credit line.

### Technical Task Breakdown

1. Add a navigation link to access the credit application page.
2. Create the application form with all required input fields.
3. Capture user input from the form using JavaScript.
4. Validate that all required fields are filled out correctly.
5. Check that email fields match and required fields are not empty.
6. Validate specific formats (ZIP code, SSN, income).
7. Display error messages next to invalid fields.
8. Prevent form submission if validation fails.
9. Determine credit qualification based on income.
10. Display a success message if the user qualifies.
11. Display a rejection message if the user does not qualify.
12. Show a validation summary table with results.
13. Add reset functionality to clear the form and messages.