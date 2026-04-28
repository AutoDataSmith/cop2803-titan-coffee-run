
# AI Interaction Log

## Entry 1
**Tool Used:** n/a
**What I Decided or Changed:** I moved from ChatGPT’s web interface to the Codex desktop app for Assignment 5 because the project had grown into a larger multi-file codebase. The browser workflow became harder to manage, occasionally lagged, and the AI context felt less consistent across long, separate chat sessions. Codex was a better fit because it works directly with the local project files and supported a more organized step-by-step workflow.

## Entry 2
**Tool Used:**  Codex Desktop
**Task:** Planned Assignment 5 integration with existing Assignment 4 project
**What AI Helped With:** Reviewed the current project structure, authentication flow, and Assignment 5 requirements; suggested a minimal-change implementation plan.
**What I Decided or Changed:** I chose to keep the existing project structure and avoid a full refactor before building the new sales dashboard feature.
**What I Learned:** For larger multi-file assignments, a desktop workspace-based AI tool can be easier to manage than multiple browser chat sessions.

## Entry 3
**Tool Used:** Codex Desktop
**Task:** Refined the admin access design for Assignment 5
**What AI Helped With:** Reviewed the temporary admin check and discussed whether admin access should be tied to the email value or handled more explicitly in session data.
**What I Decided or Changed:** I suggested changing the logic to use an `isAdmin` flag in the session object instead of checking whether the username or email matched `"admin"`. This keeps identity and permissions separate and makes the code easier to explain.
**What I Learned:** Even in a small class project, it is better to represent permissions with a dedicated property than to overload a login field for authorization decisions.

