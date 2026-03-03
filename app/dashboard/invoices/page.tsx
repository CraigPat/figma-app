import StatCard from "@/app/components/StatCard";
import { FileText, CheckCircle, Clock, AlertCircle } from "lucide-react";

const invoices = [
  { client: "Acme Corp",        amount: "£1,200", issued: "01 Feb", due: "01 Mar", status: "Overdue" },
  { client: "Bright Solutions", amount: "£850",   issued: "05 Feb", due: "05 Mar", status: "Pending" },
  { client: "Crestwood Ltd",    amount: "£2,400", issued: "10 Feb", due: "10 Mar", status: "Paid" },
  { client: "Delta Partners",   amount: "£600",   issued: "12 Feb", due: "12 Mar", status: "Pending" },
  { client: "Echo Industries",  amount: "£3,100", issued: "15 Feb", due: "15 Mar", status: "Paid" },
  { client: "Falcon Ltd",       amount: "£750",   issued: "20 Feb", due: "20 Mar", status: "Overdue" },
];

const statusColor: Record<string, string> = {
  Paid:    "bg-green-100 text-green-700",
  Pending: "bg-orange-100 text-orange-700",
  Overdue: "bg-red-100 text-red-700",
};

const tabs = ["All", "Pending", "Overdue", "Paid"];

export default function InvoicesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#0f172a]">Invoice Tracker</h1>

      <div className="rounded-xl bg-white p-8 text-center shadow-sm">
        <p className="text-sm text-[#64748b]">Total Outstanding</p>
        <p className="mt-1 text-5xl font-bold text-[#0f172a]">£8,900</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <StatCard label="Total Issued"  value="£24,600" color="blue"   Icon={FileText} />
        <StatCard label="Paid"          value="£15,700" color="green"  Icon={CheckCircle} />
        <StatCard label="Pending"       value="£1,450"  color="orange" Icon={Clock} />
        <StatCard label="Overdue"       value="£1,950"  color="red"    Icon={AlertCircle} />
      </div>

      <div className="rounded-xl bg-white shadow-sm overflow-hidden">
        <div className="flex gap-1 border-b border-[#f1f5f9] px-6 py-3">
          {tabs.map((t) => (
            <button key={t} className={`rounded-lg px-4 py-1.5 text-sm font-medium ${t === "All" ? "bg-[#3b82f6] text-white" : "text-[#64748b] hover:bg-[#f1f5f9]"}`}>{t}</button>
          ))}
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#f1f5f9] text-left text-[#64748b]">
              <th className="px-6 py-3 font-medium">Client</th>
              <th className="px-6 py-3 font-medium">Amount</th>
              <th className="px-6 py-3 font-medium">Issued</th>
              <th className="px-6 py-3 font-medium">Due</th>
              <th className="px-6 py-3 font-medium">Status</th>
              <th className="px-6 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((r) => (
              <tr key={r.client} className="border-b border-[#f8fafc] last:border-0 hover:bg-[#f8fafc]">
                <td className="px-6 py-4 font-medium text-[#0f172a]">{r.client}</td>
                <td className="px-6 py-4 text-[#0f172a]">{r.amount}</td>
                <td className="px-6 py-4 text-[#64748b]">{r.issued}</td>
                <td className="px-6 py-4 text-[#64748b]">{r.due}</td>
                <td className="px-6 py-4"><span className={`rounded-full px-2 py-0.5 text-xs font-medium ${statusColor[r.status]}`}>{r.status}</span></td>
                <td className="px-6 py-4"><button className="text-xs font-medium text-[#3b82f6] hover:underline">View</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
