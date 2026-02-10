import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  if (!session || session.user.role !== "admin") {
    redirect("/admin/login")
  }

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r p-4">
        Admin
      </aside>

      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  )
}
