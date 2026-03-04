import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.intervention.deleteMany();
  await prisma.client.deleteMany();

  const acme      = await prisma.client.create({ data: { name: "Acme Corp",        employer: "Tech Industries",  stage: "Active Onboarding"   } });
  const bright    = await prisma.client.create({ data: { name: "Bright Solutions", employer: "Finance Group",    stage: "Documentation"        } });
  const crestwood = await prisma.client.create({ data: { name: "Crestwood Ltd",    employer: "Healthcare Plus",  stage: "Review & Approval"    } });
  const delta     = await prisma.client.create({ data: { name: "Delta Partners",   employer: "Legal Associates", stage: "Initial Assessment"   } });
  const echo      = await prisma.client.create({ data: { name: "Echo Industries",  employer: "Manufacturing Co", stage: "Completion"            } });
  const falcon    = await prisma.client.create({ data: { name: "Falcon Ltd",       employer: "Retail Group",     stage: "Active Onboarding"    } });

  const now      = new Date();
  const today    = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59);
  const tomorrow = new Date(today); tomorrow.setDate(today.getDate() + 1);
  const fri      = new Date(today); fri.setDate(today.getDate() + 3);
  const mon      = new Date(today); mon.setDate(today.getDate() + 6);

  await prisma.intervention.createMany({
    data: [
      { clientId: acme.id,      type: "Document Review",     priority: "HIGH",   assignedTo: "Sarah M.", dueAt: today,    status: "pending" },
      { clientId: bright.id,    type: "Stage Check",         priority: "HIGH",   assignedTo: "James T.", dueAt: today,    status: "pending" },
      { clientId: crestwood.id, type: "Follow-up Call",      priority: "MEDIUM", assignedTo: "Sarah M.", dueAt: tomorrow, status: "pending" },
      { clientId: delta.id,     type: "Invoice Dispute",     priority: "MEDIUM", assignedTo: "Lee R.",   dueAt: tomorrow, status: "pending" },
      { clientId: echo.id,      type: "Compliance Review",   priority: "LOW",    assignedTo: "James T.", dueAt: fri,      status: "pending" },
      { clientId: falcon.id,    type: "Renewal Discussion",  priority: "LOW",    assignedTo: "Lee R.",   dueAt: mon,      status: "pending" },
    ],
  });

  console.log("Seeded 6 clients and 6 interventions.");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
