import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const DEFER_OFFSETS: Record<string, number> = {
  "2hr":  2  * 60 * 60 * 1000,
  "4hr":  4  * 60 * 60 * 1000,
  "1d":   1  * 24 * 60 * 60 * 1000,
  "2d":   2  * 24 * 60 * 60 * 1000,
  "3d":   3  * 24 * 60 * 60 * 1000,
  "5d":   5  * 24 * 60 * 60 * 1000,
  "7d":   7  * 24 * 60 * 60 * 1000,
  "10d":  10 * 24 * 60 * 60 * 1000,
  "14d":  14 * 24 * 60 * 60 * 1000,
};

export async function PATCH(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await context.params;
  const { deferOption } = await req.json() as { deferOption: string };

  const offset = DEFER_OFFSETS[deferOption];
  if (!offset) return NextResponse.json({ error: "Invalid deferOption" }, { status: 400 });

  const deferredUntil = new Date(Date.now() + offset);

  await prisma.intervention.update({
    where: { id },
    data: { deferredUntil },
  });

  return NextResponse.json({ ok: true, deferredUntil });
}
