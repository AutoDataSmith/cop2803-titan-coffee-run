# Assignment 7 AI Interaction Log

## Summary

This log records how AI was used during Assignment 7. I used AI as a planning and review resource while keeping the final project decisions and testing work my responsibility.

## Major Interactions

### Assignment Review and Planning

I used AI to review the Assignment 7 instructions and compare them to my completed Assignment 6 project. This helped me focus on the main requirement: adding JSON Server and retrieving order data through a REST API.

### Scope Control

I reviewed the existing Assignment 6 cart and checkout flow and decided to leave the active cart in `sessionStorage`. Assignment 7 asks for REST API data retrieval, but it does not clearly require replacing the completed cart storage. For that reason, I added an API-backed order display instead of rewriting the cart flow.

### Backend Planning and Setup

I created a JSON Server backend folder named `titan-run-backend` inside the existing project repository. This keeps the mock REST API separate from the frontend files while still allowing Git to track both parts of the assignment together.

### Frontend Integration Planning

I added a small frontend module that uses `fetch()` to request order data from `http://localhost:3000/orders`, parse the JSON response, and display the returned order data on the page.

### Error Handling

I included a test case for the frontend when JSON Server is stopped. The frontend displays a clear error message when the server cannot be reached or returns an error.

### Testing and Documentation

I created the Assignment 7 test checklist before coding so I could test the backend, the frontend API display, failed-server behavior, and Assignment 6 regression areas in an organized way.

## AI Use Reflection

For Assignment 7, I used AI selectively instead of asking it to generate everything at once. The most useful AI support was:

- Interpreting the assignment requirements
- Comparing the new REST API requirement to the existing cart/order code
- Identifying likely grading risks
- Planning small, reviewable commits
- Drafting testing and documentation files

I installed the backend dependencies, verified the JSON Server endpoint, and moved the frontend files into a `titan-run-frontend` folder so the repository now contains separate frontend and backend project folders.
