export default function AuditTable() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Starter Component</p>
        <h2 className="mt-2 text-xl font-semibold text-slate-900">Audit Table</h2>
      </div>
      <div className="overflow-hidden rounded-xl border border-slate-200">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 text-left text-slate-600">
            <tr>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
            <tr>
              <td className="px-4 py-3">Starter row</td>
              <td className="px-4 py-3">Visible</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
