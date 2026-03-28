export const adminRoute = {
  path: "/admin",
  method: "GET",
};

export function handleAdmin() {
  return {
    ok: true,
    route: "admin",
    message: "Starter route for Role-Based Admin Audit Log",
  };
}
