const steps = [
  { n: 1, title: "Initial Invoice Sent",       desc: "Invoice issued and delivered to client",          status: "complete" },
  { n: 2, title: "Payment Reminder (7 days)",  desc: "Automated reminder sent 7 days before due date",  status: "complete" },
  { n: 3, title: "Overdue Notice",             desc: "Formal overdue notice issued",                    status: "active" },
  { n: 4, title: "Phone Follow-up",            desc: "Direct call to accounts contact",                 status: "pending" },
  { n: 5, title: "Final Demand Letter",        desc: "Formal letter before legal action",               status: "pending" },
  { n: 6, title: "Legal / Debt Recovery",      desc: "Refer to debt recovery team if unresolved",       status: "pending" },
];

const clients = [
  { name: "Acme Corp",      amount: "£1,200", step: 3, days: 14 },
  { name: "Falcon Ltd",     amount: "£750",   step: 3, days: 8  },
];

const statusStyle: Record<string, string> = {
  complete: "bg-green-500 text-white",
  active:   "bg-[#3b82f6] text-white",
  pending:  "bg-[#f1f5f9] text-[#94a3b8]",
};

export default function CreditControlPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#0f172a]">Credit Control</h1>
      <div className="grid grid-cols-2 gap-6">
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-5 font-semibold text-[#0f172a]">Recovery Workflow</h2>
          <div className="space-y-4">
            {steps.map((s) => (
              <div key={s.n} className="flex gap-4">
                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${statusStyle[s.status]}`}>{s.n}</div>
                <div>
                  <p className={`font-medium text-sm ${s.status === "pending" ? "text-[#94a3b8]" : "text-[#0f172a]"}`}>{s.title}</p>
                  <p className="text-xs text-[#64748b]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-5 font-semibold text-[#0f172a]">Active Cases</h2>
          <div className="space-y-4">
            {clients.map((c) => (
              <div key={c.name} className="rounded-lg border border-[#e2e8f0] p-4">
                <div className="flex justify-between">
                  <p className="font-medium text-[#0f172a]">{c.name}</p>
                  <p className="font-semibold text-[#ef4444]">{c.amount}</p>
                </div>
                <p className="mt-1 text-xs text-[#64748b]">Step {c.step} • {c.days} days overdue</p>
                <button className="mt-3 rounded-lg bg-[#3b82f6] px-3 py-1.5 text-xs font-medium text-white">Log Contact</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
