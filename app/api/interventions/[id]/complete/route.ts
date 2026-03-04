import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const STAGE_ORDER = [
  "Initial Assessment",
  "Documentation",
  "Active Onboarding",
  "Review & Approval",
  "Completion",
] as const;

export async function PATCH(
  _req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await context.params;

  const intervention = await prisma.intervention.findUnique({
    where: { id },
    include: { client: true },
  });

  if (!intervention) return NextResponse.json({ error: "Not found" }, { status: 404 });
  if (intervention.status === "completed") return NextResponse.json({ error: "Already completed" }, { status: 409 });

  const currentIndex = STAGE_ORDER.indexOf(intervention.client.stage as typeof STAGE_ORDER[number]);
  const nextStage = currentIndex >= 0 && currentIndex < STAGE_ORDER.length - 1
    ? STAGE_ORDER[currentIndex + 1]
    : intervention.client.stage;

  await prisma.$transaction([
    prisma.intervention.update({ where: { id }, data: { status: "completed" } }),
    prisma.client.update({ where: { id: intervention.clientId }, data: { stage: nextStage } }),
  ]);

  return NextResponse.json({ ok: true, nextStage });
}
