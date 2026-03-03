import { Users } from "lucide-react";
import Link from "next/link";

const clients = [
  { name: "Acme Corp",        employer: "Tech Industries",  stage: "Active Onboarding", status: "On Track" },
  { name: "Bright Solutions", employer: "Finance Group",    stage: "Documentation",     status: "At Risk" },
  { name: "Crestwood Ltd",    employer: "Healthcare Plus",  stage: "Review & Approval", status: "On Track" },
  { name: "Delta Partners",   employer: "Legal Associates", stage: "Initial Assessment",status: "Pending" },
  { name: "Echo Industries",  employer: "Manufacturing Co", stage: "Completion",        status: "Complete" },
  { name: "Falcon Ltd",       employer: "Retail Group",     stage: "Active Onboarding", status: "On Track" },
  { name: "Global Ventures",  employer: "Consulting Firm",  stage: "Documentation",     status: "At Risk" },
];

const statusColor: Record<string, string> = {
  "On Track": "bg-green-100 text-green-700",
  "At Risk":  "bg-red-100 text-red-700",
  "Pending":  "bg-orange-100 text-orange-700",
  "Complete": "bg-blue-100 text-blue-700",
};

export default function ClientsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#0f172a]">All Clients</h1>
        <Link href="/dashboard/clients/new" className="flex items-center gap-2 rounded-lg bg-[#3b82f6] px-4 py-2 text-sm font-medium text-white hover:bg-[#2563eb]">
          <Users size={16} /> New Client
        </Link>
      </div>
      <div className="rounded-xl bg-white shadow-sm overflow-hidden">
        <div className="border-b border-[#f1f5f9] px-6 py-4">
          <input placeholder="Search clients…" className="rounded-lg border border-[#e2e8f0] px-3 py-2 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]" />
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#f1f5f9] text-left text-[#64748b]">
              <th className="px-6 py-3 font-medium">Client Name</th>
              <th className="px-6 py-3 font-medium">Employer</th>
              <th className="px-6 py-3 font-medium">Stage</th>
              <th className="px-6 py-3 font-medium">Status</th>
              <th className="px-6 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((c) => (
              <tr key={c.name} className="border-b border-[#f8fafc] last:border-0 hover:bg-[#f8fafc]">
                <td className="px-6 py-4 font-medium text-[#0f172a]">{c.name}</td>
                <td className="px-6 py-4 text-[#64748b]">{c.employer}</td>
                <td className="px-6 py-4 text-[#64748b]">{c.stage}</td>
                <td className="px-6 py-4">
                  <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${statusColor[c.status]}`}>{c.status}</span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-xs font-medium text-[#3b82f6] hover:underline">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
