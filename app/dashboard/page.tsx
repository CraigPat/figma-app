import StatCard from "@/app/components/StatCard";
import { Activity, AlertCircle, GitBranch, FileText } from "lucide-react";

const interventions = [
  { client: "Acme Corp",        type: "Document Review",   due: "Today",    priority: "High" },
  { client: "Bright Solutions", type: "Stage Check",       due: "Today",    priority: "High" },
  { client: "Crestwood Ltd",    type: "Follow-up Call",    due: "Tomorrow", priority: "Medium" },
  { client: "Delta Partners",   type: "Invoice Dispute",   due: "Tomorrow", priority: "Medium" },
  { client: "Echo Industries",  type: "Compliance Review", due: "Fri",      priority: "Low" },
];

const stages = [
  { name: "Initial Assessment",  count: 4,  pct: 22 },
  { name: "Documentation",       count: 6,  pct: 33 },
  { name: "Active Onboarding",   count: 5,  pct: 28 },
  { name: "Review & Approval",   count: 2,  pct: 11 },
  { name: "Completion",          count: 1,  pct: 6  },
];

const priorityColor: Record<string, string> = {
  High:   "bg-red-100 text-red-700",
  Medium: "bg-orange-100 text-orange-700",
  Low:    "bg-green-100 text-green-700",
};

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#0f172a]">Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <StatCard label="Active Onboardings"    value={18} color="blue"   Icon={Activity} />
        <StatCard label="Interventions Due Today" value={3} color="red"   Icon={AlertCircle} />
        <StatCard label="Stage Gates Pending"   value={7}  color="orange" Icon={GitBranch} />
        <StatCard label="Invoices Overdue"      value={2}  color="purple" Icon={FileText} />
      </div>

      {/* Announcement */}
      <div className="rounded-xl bg-[#3b82f6] px-6 py-4 text-white">
        <p className="font-semibold">Team Update</p>
        <p className="mt-1 text-sm text-blue-100">Q2 compliance review due by end of month. Please ensure all client stage gates are up to date.</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Intervention Queue */}
        <div className="col-span-2 rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 font-semibold text-[#0f172a]">Intervention Queue</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#f1f5f9] text-left text-[#64748b]">
                <th className="pb-2 font-medium">Client</th>
                <th className="pb-2 font-medium">Type</th>
                <th className="pb-2 font-medium">Due</th>
                <th className="pb-2 font-medium">Priority</th>
                <th className="pb-2 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {interventions.map((r) => (
                <tr key={r.client} className="border-b border-[#f8fafc] last:border-0">
                  <td className="py-3 font-medium text-[#0f172a]">{r.client}</td>
                  <td className="py-3 text-[#64748b]">{r.type}</td>
                  <td className="py-3 text-[#64748b]">{r.due}</td>
                  <td className="py-3">
                    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${priorityColor[r.priority]}`}>
                      {r.priority}
                    </span>
                  </td>
                  <td className="py-3">
                    <button className="rounded-lg bg-[#f1f5f9] px-3 py-1 text-xs font-medium text-[#3b82f6] hover:bg-[#e0e7ff]">
                      Review
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Stage Progress */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 font-semibold text-[#0f172a]">Stage Progress</h2>
          <div className="space-y-4">
            {stages.map((s) => (
              <div key={s.name}>
                <div className="mb-1 flex justify-between text-xs">
                  <span className="text-[#64748b]">{s.name}</span>
                  <span className="font-medium text-[#0f172a]">{s.count} clients</span>
                </div>
                <div className="h-2 w-full rounded-full bg-[#f1f5f9]">
                  <div className="h-2 rounded-full bg-[#3b82f6]" style={{ width: `${s.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
