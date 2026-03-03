const arrangements = [
  { client: "Acme Corp",        type: "Debt Management",  start: "Jan 2024", end: "Jan 2026", value: "£1,200/mo", status: "Active" },
  { client: "Bright Solutions", type: "IVA",              start: "Mar 2024", end: "Mar 2029", value: "£850/mo",  status: "Active" },
  { client: "Crestwood Ltd",    type: "DRO",              start: "Jun 2024", end: "Jun 2025", value: "N/A",      status: "Pending" },
  { client: "Delta Partners",   type: "Debt Management",  start: "Sep 2024", end: "Sep 2027", value: "£600/mo",  status: "Active" },
  { client: "Echo Industries",  type: "Bankruptcy",       start: "Dec 2023", end: "Dec 2024", value: "N/A",      status: "Complete" },
];

const statusColor: Record<string, string> = {
  Active:   "bg-green-100 text-green-700",
  Pending:  "bg-orange-100 text-orange-700",
  Complete: "bg-blue-100 text-blue-700",
};

export default function ArrangementsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#0f172a]">All Arrangements</h1>
      <div className="rounded-xl bg-white shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#f1f5f9] text-left text-[#64748b]">
              <th className="px-6 py-3 font-medium">Client</th>
              <th className="px-6 py-3 font-medium">Type</th>
              <th className="px-6 py-3 font-medium">Start Date</th>
              <th className="px-6 py-3 font-medium">End Date</th>
              <th className="px-6 py-3 font-medium">Value</th>
              <th className="px-6 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {arrangements.map((r) => (
              <tr key={r.client} className="border-b border-[#f8fafc] last:border-0 hover:bg-[#f8fafc]">
                <td className="px-6 py-4 font-medium text-[#0f172a]">{r.client}</td>
                <td className="px-6 py-4 text-[#64748b]">{r.type}</td>
                <td className="px-6 py-4 text-[#64748b]">{r.start}</td>
                <td className="px-6 py-4 text-[#64748b]">{r.end}</td>
                <td className="px-6 py-4 text-[#0f172a]">{r.value}</td>
                <td className="px-6 py-4"><span className={`rounded-full px-2 py-0.5 text-xs font-medium ${statusColor[r.status]}`}>{r.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
