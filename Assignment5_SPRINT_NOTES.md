# Sprint 3 Notes - Titan Coffee Run

## User Story

**Title:** Build an Interactive Sales Dashboard

**As a** Titan Coffee Run owner,  
**I want to** view sales trends through an interactive dashboard,  
**So that I can** review quarterly sales performance in a visual format.

---

## Acceptance Criteria

- Admin login redirects to the sales visualization page
- Sales link is only visible when an admin user is logged in
- Admin credentials work as required for the assignment
- The sales dashboard displays all four quarters of sales data
- The bar graph scales values proportionally
- Each quarter uses a different color
- The graph includes labels and sales values
- Bars animate on initial load
- Reset button returns the graph to zero smoothly
- Styling remains consistent with the existing site

---

## Feature Breakdown

### 1. Admin Access Control
- Reuse the current session-based login approach from Assignment 4
- Add a simple admin check for the required assignment credentials
- Protect the sales page so non-admin users are redirected to login
- Keep the sales navigation link hidden unless the admin is logged in

---

### 2. Sales Dashboard Page
- Create a new `sales.html` page
- Reuse the same header, navigation, main content area, and footer style
- Add a section for the graph and a reset button
- Keep the layout simple and readable

---

### 3. Interactive Bar Graph
- Use JavaScript DOM manipulation to build the graph
- Use plain HTML, CSS, and JavaScript instead of Canvas or SVG so the chart stays easier to read, debug, and explain in a class project
- Display quarterly sales values for:
  - Jan-Mar
  - Apr-Jun
  - Jul-Sep
  - Oct-Dec
- Scale bars relative to the highest sales value
- Show labels and exact values clearly
- Use different colors for each bar

---

### 4. Animation and Events
- Animate bars from zero to full height when the page loads
- Add hover behavior to make values easier to inspect
- Add reset button functionality to animate bars back to zero
- After testing, refine the visual behavior so values appear after the bar animation completes and the button can switch to a reload action after reset
- Keep the event handling straightforward and easy to debug

---

### 5. Testing and Validation
- Verify admin login behavior
- Verify non-admin users cannot access the sales page
- Verify the sales link appears only for admin
- Verify bar heights match the provided data
- Verify reset and hover behaviors work correctly
- Record testing results in `Assignment5_TEST_CASES.md`

---

## Development Approach

- Build Assignment 5 on top of the completed Assignment 4 project
- Make the smallest practical changes needed to support the new feature
- Use a step-by-step workflow with regular commits after each working milestone
- Test each change in Live Server before moving to the next step
- Use AI mainly for planning, debugging, and reviewing small code changes

---

## Notes

- This assignment is additive, so the existing authentication and navigation structure should be reused instead of replaced
- A full refactor may be considered later, but the first goal is to complete the required dashboard cleanly and correctly
- The implementation should stay at a practical class-project level and avoid unnecessary complexity
- The chart approach uses standard HTML elements styled with CSS transitions because that method matched the current project structure and required less setup than drawing with Canvas
