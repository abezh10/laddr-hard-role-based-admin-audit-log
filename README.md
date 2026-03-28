# Role-Based Admin Audit Log

- Category: Build
- Topic: Full-Stack
- Difficulty: Hard

## Overview
This sample repository is set up for a hard build exercise in the full-stack track. The starter code is intentionally lightweight: it gives Sandpack something meaningful to render or inspect, but it still leaves the real evaluation work in place so a candidate has to implement the missing feature end to end.

## Exercise Summary
Sensitive admin actions are not audited. Implement backend event recording, a frontend audit log view, and role-based visibility that does not expose unauthorized data.

## Starter State
The current scaffold keeps the requested folder layout intact and includes small task-adjacent starter implementations. Frontend files render simple placeholder UI, while routes, services, hooks, utilities, and data files expose minimal sample data or placeholder behavior without solving the exercise for the learner.

## Repo Files
- `client/src/components/AuditFilters.tsx`
- `client/src/components/AuditTable.tsx`
- `client/src/pages/AuditLogPage.tsx`
- `package.json`
- `server/routes/admin.ts`
- `server/routes/audit.ts`
- `server/services/auditService.ts`

## Likely Change Areas
- `client/src/components`
- `client/src/pages`
- `server/routes`
- `server/services`

## Sandbox Notes
These files are intentionally small and preview-friendly. They should render a lightweight surface where that makes sense, while still leaving the real build, debug, refactor, security, or migration work undone.
