# Assignment 7 AI Interaction Log

## Summary

This log records how AI was used during Assignment 7. I am using it as a planning, review, and documentation partner while keeping the implementation choices practical for the COP2803 course level.

## Major Interactions

### Assignment Review and Planning

AI helped me read through the Assignment 7 instructions and compare them to my completed Assignment 6 project. This helped me see that the new requirement is mainly about adding JSON Server and retrieving order data through a REST API.

### Scope Control

AI helped identify that the existing Assignment 6 cart and checkout flow already works with `sessionStorage`. Since Assignment 7 asks for REST API data retrieval but does not clearly require replacing the live cart storage, the planned approach is to add an API-backed order display instead of rewriting the completed cart flow.

### Backend Planning and Setup

AI helped plan a JSON Server backend folder named `titan-run-backend` inside the existing project repository. This keeps the mock REST API separate from the frontend files while still allowing Git to track both parts of the assignment together.

### Frontend Integration Planning

AI helped plan a small frontend module that will use `fetch()` to request order data from `http://localhost:3000/orders`, parse the JSON response, and display the returned order data on the page.

### Error Handling

AI helped identify the need to test the frontend while JSON Server is stopped. The planned frontend behavior is to display a clear error message when the server cannot be reached or returns an error.

### Testing and Documentation

AI helped create the Assignment 7 test checklist before coding starts. This should make it easier to test the backend, the frontend API display, failed-server behavior, and Assignment 6 regression areas.

## AI Use Reflection

For Assignment 7, I am using AI selectively instead of asking it to generate everything at once. The most useful AI help so far has been:

- Interpreting the assignment requirements
- Comparing the new REST API requirement to the existing cart/order code
- Identifying likely grading risks
- Planning small, reviewable commits
- Drafting testing and documentation files

I installed the backend dependencies, verified the JSON Server endpoint, and moved the frontend files into a `titan-run-frontend` folder so the repository now contains separate frontend and backend project folders. I still need to complete the final Live Server browser verification before submission.
