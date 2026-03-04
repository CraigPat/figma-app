import { prisma } from "@/lib/prisma";
import InterventionsTable from "./InterventionsTable";

export default async function InterventionsPage() {
  const now = new Date();

  const interventions = await prisma.intervention.findMany({
    where: {
      status: "pending",
      OR: [
        { deferredUntil: null },
        { deferredUntil: { lte: now } },
      ],
    },
    include: { client: true },
    orderBy: { dueAt: "asc" },
  });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#0f172a]">Interventions Due</h1>
      <InterventionsTable interventions={interventions} />
    </div>
  );
}
