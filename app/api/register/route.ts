import { type NextRequest, NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    // Prepare data for Supabase
    const registrationData = {
      team_name: formData.teamName,
      team_size: Number.parseInt(formData.teamSize),
      city: formData.city,
      project_idea: formData.projectIdea,
      tech_stack: formData.techStack,
      member_1_name: formData.member1Name,
      member_1_email: formData.member1Email,
      member_1_phone: formData.member1Phone,
      member_1_institution: formData.member1Institution,
      member_2_name: formData.member2Name || null,
      member_2_email: formData.member2Email || null,
      member_2_phone: formData.member2Phone || null,
      member_2_institution: formData.member2Institution || null,
      member_3_name: formData.member3Name || null,
      member_3_email: formData.member3Email || null,
      member_3_phone: formData.member3Phone || null,
      member_3_institution: formData.member3Institution || null,
      member_4_name: formData.member4Name || null,
      member_4_email: formData.member4Email || null,
      member_4_phone: formData.member4Phone || null,
      member_4_institution: formData.member4Institution || null,
      created_at: new Date().toISOString(),
    }

    // Insert data into Supabase using admin client (server-side only)
    const { data, error } = await supabaseAdmin.from("registrations").insert([registrationData]).select()

    if (error) {
      console.error("Supabase error:", error)
      return NextResponse.json({ error: "Failed to register team" }, { status: 500 })
    }

    // Get current registration count
    const { count } = await supabaseAdmin.from("registrations").select("*", { count: "exact", head: true })

    return NextResponse.json({
      success: true,
      data,
      registrationCount: count || 0,
    })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ error: "Failed to register team" }, { status: 500 })
  }
}
