export const starterauditServiceItems = [
  { id: "starter-1", label: "Sample audit service record", status: "draft" },
  { id: "starter-2", label: "Another audit service record", status: "ready" },
];

export async function loadauditServicePreview() {
  return Promise.resolve(starterauditServiceItems);
}

export async function saveauditServicePreview() {
  return Promise.resolve({
    ok: false,
    message: "The audit service workflow is intentionally unfinished in Role-Based Admin Audit Log.",
  });
}
