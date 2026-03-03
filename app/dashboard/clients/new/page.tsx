export default function NewClientPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-2xl font-bold text-[#0f172a]">New Client</h1>
      <div className="rounded-xl bg-white p-8 shadow-sm space-y-5">
        {[
          { label: "Full Name", placeholder: "e.g. John Smith" },
          { label: "Email Address", placeholder: "john@example.com" },
          { label: "Employer", placeholder: "Company name" },
          { label: "Phone Number", placeholder: "+44 7700 000000" },
        ].map((f) => (
          <div key={f.label}>
            <label className="block text-sm font-medium text-[#0f172a] mb-1">{f.label}</label>
            <input placeholder={f.placeholder} className="w-full rounded-lg border border-[#e2e8f0] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3b82f6]" />
          </div>
        ))}
        <div>
          <label className="block text-sm font-medium text-[#0f172a] mb-1">Initial Stage</label>
          <select className="w-full rounded-lg border border-[#e2e8f0] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3b82f6]">
            <option>Initial Assessment</option>
            <option>Documentation</option>
            <option>Active Onboarding</option>
          </select>
        </div>
        <button className="rounded-lg bg-[#3b82f6] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#2563eb]">
          Create Client
        </button>
      </div>
    </div>
  );
}
