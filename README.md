# Role-Based Admin Audit Log

- Category: Build / Full-Stack
- Difficulty: Hard

## Contains
- `client/src/pages/AuditLogPage.tsx`
- `client/src/components/AuditTable.tsx`
- `client/src/components/AuditFilters.tsx`
- `server/routes/audit.ts`
- `server/routes/admin.ts`
- `server/services/auditService.ts`
- `package.json`

## Prompt
Sensitive admin actions are not audited. Implement backend event recording, a frontend audit log view, and role-based visibility that does not expose unauthorized data.

## Likely Change Dirs
- `client/src/pages`
- `client/src/components`
- `server/routes`
- `server/services`
