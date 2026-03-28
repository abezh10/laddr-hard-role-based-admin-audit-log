export const auditRoute = {
  path: "/audit",
  method: "GET",
};

export function handleAudit() {
  return {
    ok: true,
    route: "audit",
    message: "Starter route for Role-Based Admin Audit Log",
  };
}
