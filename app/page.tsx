import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/dashboard");

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f0f4f8]">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-[#0f172a]">Halo</h1>
        <p className="mt-2 text-[#64748b]">Internal operations platform</p>
        <div className="mt-6 flex justify-center gap-3">
          <Link className="rounded-lg bg-[#3b82f6] px-5 py-2.5 text-sm font-medium text-white" href="/signin">
            Sign in
          </Link>
          <Link className="rounded-lg border border-[#e2e8f0] bg-white px-5 py-2.5 text-sm font-medium text-[#0f172a]" href="/register">
            Register
          </Link>
        </div>
      </div>
    </main>
  );
}
