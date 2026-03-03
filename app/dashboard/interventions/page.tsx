const items = [
  { client: "Acme Corp",        type: "Document Review",   due: "Today",     priority: "High",   assigned: "Sarah M." },
  { client: "Bright Solutions", type: "Stage Check",       due: "Today",     priority: "High",   assigned: "James T." },
  { client: "Crestwood Ltd",    type: "Follow-up Call",    due: "Tomorrow",  priority: "Medium", assigned: "Sarah M." },
  { client: "Delta Partners",   type: "Invoice Dispute",   due: "Tomorrow",  priority: "Medium", assigned: "Lee R." },
  { client: "Echo Industries",  type: "Compliance Review", due: "Fri 7 Mar", priority: "Low",    assigned: "James T." },
  { client: "Falcon Ltd",       type: "Renewal Discussion",due: "Mon 10 Mar",priority: "Low",    assigned: "Lee R." },
];

const priorityColor: Record<string, string> = {
  High:   "bg-red-100 text-red-700",
  Medium: "bg-orange-100 text-orange-700",
  Low:    "bg-green-100 text-green-700",
};

export default function InterventionsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#0f172a]">Interventions Due</h1>
      <div className="rounded-xl bg-white shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#f1f5f9] text-left text-[#64748b]">
              <th className="px-6 py-3 font-medium">Client</th>
              <th className="px-6 py-3 font-medium">Type</th>
              <th className="px-6 py-3 font-medium">Due</th>
              <th className="px-6 py-3 font-medium">Priority</th>
              <th className="px-6 py-3 font-medium">Assigned</th>
              <th className="px-6 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((r) => (
              <tr key={r.client + r.type} className="border-b border-[#f8fafc] last:border-0 hover:bg-[#f8fafc]">
                <td className="px-6 py-4 font-medium text-[#0f172a]">{r.client}</td>
                <td className="px-6 py-4 text-[#64748b]">{r.type}</td>
                <td className="px-6 py-4 text-[#64748b]">{r.due}</td>
                <td className="px-6 py-4"><span className={`rounded-full px-2 py-0.5 text-xs font-medium ${priorityColor[r.priority]}`}>{r.priority}</span></td>
                <td className="px-6 py-4 text-[#64748b]">{r.assigned}</td>
                <td className="px-6 py-4 flex gap-2">
                  <button className="rounded-lg bg-[#3b82f6] px-3 py-1 text-xs font-medium text-white">Complete</button>
                  <button className="rounded-lg border border-[#e2e8f0] px-3 py-1 text-xs font-medium text-[#64748b]">Defer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
