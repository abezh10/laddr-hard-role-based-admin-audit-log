export default function AuditFilters() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Starter Component</p>
        <h2 className="mt-2 text-xl font-semibold text-slate-900">Audit Filters</h2>
      </div>
      <div className="flex flex-wrap gap-2 text-sm">
        <button className="rounded-full bg-slate-900 px-3 py-1.5 text-white" type="button">All</button>
        <button className="rounded-full border border-slate-300 px-3 py-1.5 text-slate-700" type="button">Focused</button>
        <button className="rounded-full border border-slate-300 px-3 py-1.5 text-slate-700" type="button">Recent</button>
      </div>
    </section>
  );
}
