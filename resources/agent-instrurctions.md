# Agent Instructions

These rules apply to all work in this repository.

## Authority

The user is the project owner and makes all architectural, dependency, tooling, and scope decisions.

Do not make decisions outside the specific task requested. If completing a task requires something not explicitly authorized, stop and ask.

## Dependencies and Software

NEVER install anything unless the user has explicitly requested that specific installation or explicitly given permission to install it.

This includes, but is not limited to:

- npm packages or other project dependencies
- global packages
- system packages
- command-line utilities
- applications
- plugins or extensions
- conversion tools
- build tools
- external services

Do not run `npm install`, `npx` commands that download packages, package-manager install commands, or equivalent installation commands without explicit permission.

If a requested task requires software or a dependency that is not already available, STOP and explain:

1. what is missing,
2. why it is needed,
3. what you propose using.

Wait for permission before proceeding.

Never treat permission to complete a task as implicit permission to install something.

## Files and Formats

Do not convert, replace, delete, rename, or modify source/reference files unless specifically requested.

If a supplied file cannot be used directly for the requested purpose, explain the limitation and ask how the user wants to proceed.

Do not install conversion software automatically.

## Project Structure

This repository contains the entire Trinity Springs project.

- `/frontend` contains the React/Vite website.
- `/resources` contains source material and project references.
- Additional directories may be added only when appropriate and authorized.
- A backend may be added later if requirements justify one. Do not create one unless requested.

Do not reorganize the repository or move significant files without permission.

## Development

Work incrementally and make only the changes requested.

Do not:

- add libraries or frameworks without permission
- replace existing technology choices
- introduce a backend, database, authentication, CMS, or API unless requested
- refactor unrelated code
- redesign unrelated portions of the site
- add functionality merely because it may be useful later
- invent organizational information or requirements

Prefer the simplest implementation that satisfies the current request using the project's existing tools.

## Project Sources

Use `/resources/WEBSITE-BRIEF.md` for the overall website direction.

Use the official Trinity Springs documents in `/resources` as the authoritative source for organization-specific content.

Reference websites are inspiration only. Do not copy their text, branding, or designs.

If source materials conflict or required information is missing, flag it for the user rather than choosing or inventing an answer.

## Git

Do not create commits, push changes, rewrite history, create branches, or perform other remote Git operations unless requested.

Do not add AI, Cursor, agent, or tool attribution to commits, source files, documentation, or project output.

## Communication

When something prevents you from completing the requested task as instructed, STOP and tell the user rather than silently choosing a workaround.

Ask before taking actions that materially expand the task.

Keep explanations concise unless the user asks for detail.
