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

## Possible Future Improvement: Income Tiers

If the credit application used income tiers instead of a single approval threshold, the logic could be structured with an if-else if chain or a separate function. For example, applicants with income from $20,000 to $39,999 could receive a $500 credit line, applicants from $40,000 to $59,999 could receive a $1,000 credit line, and higher income ranges could qualify for larger amounts.
This was not implemented in Assignment 3 because the current requirement only needs approval or rejection based on income.

## Code Review Improvements

During development, I reviewed and refined the code based on AI suggestions and testing. The following improvements were made:

1. Improved Email Validation Logic  
Originally, the code only checked if the email fields matched. I updated the logic to first check if each email field was empty before comparing them. This prevents two empty fields from incorrectly passing validation.

2. Refined Result Display Function  
The showResult function was updated to avoid applying color styling when no message is displayed. This prevented unintended styling (such as turning the validation summary table red) and improved separation between result messages and other UI elements.

3. Enhanced Validation Summary Table Styling  
Initially, entire table rows were styled with background colors. I changed this to only color the “Valid” and “Invalid” status text. This improved readability and made the table less visually overwhelming.

4. Added Validation Summary Heading  
A heading (“Validation Summary”) was added above the table to provide context for users. This improves usability and makes the interface clearer, especially when multiple validation errors are displayed.

5. Modularized Helper Functions  
Validation-related behaviors such as clearing errors, displaying results, and rendering the summary table were separated into individual functions. This improved code organization, readability, and maintainability.

## Reflection

AI was used throughout this assignment to help break down tasks, generate code examples, and explain JavaScript concepts such as event handling and validation. It was especially helpful for structuring the validation logic and understanding how to dynamically create elements like the summary table.

One key learning takeaway was how form validation works step by step, including capturing user input, checking conditions, and displaying feedback. I also gained a better understanding of organizing code into functions to avoid repetition.

I made sure to understand the code by testing each step and modifying AI suggestions as needed. This approach helped reinforce my understanding rather than relying on copy-paste solutions.

Overall, using AI as a development partner made the process more efficient while still requiring me to think critically about how the application works.