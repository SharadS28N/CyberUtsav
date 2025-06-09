import { type NextRequest, NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"

export async function GET(request: NextRequest) {
  try {
    // Get current registration count using admin client (server-side only)
    const { count, error } = await supabaseAdmin.from("registrations").select("*", { count: "exact", head: true })

    if (error) {
      console.error("Supabase error:", error)
      return NextResponse.json({ error: "Failed to get registration stats" }, { status: 500 })
    }

    const registered = count || 0
    const spotsLeft = Math.max(150 - registered, 0)

    return NextResponse.json({
      registered,
      spotsLeft,
      total: 150,
    })
  } catch (error) {
    console.error("Registration stats error:", error)
    return NextResponse.json({ error: "Failed to get registration stats" }, { status: 500 })
  }
}
