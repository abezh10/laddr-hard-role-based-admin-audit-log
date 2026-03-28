import AuditFilters from "../components/AuditFilters";
import AuditTable from "../components/AuditTable";

export default function AuditLogPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-6 text-slate-900">
      <div className="mx-auto flex max-w-4xl flex-col gap-6">
        <header className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Build / Full-Stack</p>
          <h1 className="mt-2 text-3xl font-semibold">Role-Based Admin Audit Log</h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">Sensitive admin actions are not audited. Implement backend event recording, a frontend audit log view, and role-based visibility that does not expose unauthorized data.</p>
        </header>
      <AuditFilters />
      <AuditTable />
      </div>
    </main>
  );
}
