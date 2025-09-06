import { type NextRequest, NextResponse } from "next/server"
import { contactFormSchema } from "@/lib/validations"
import { sendFallbackEmail } from "@/lib/email-fallback"

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json()

    // Validate the data using Zod schema
    const validatedData = contactFormSchema.parse(body)

    // Use fallback email service
    const result = await sendFallbackEmail(validatedData)

    return NextResponse.json(result)
  } catch (error) {
    console.error("Fallback contact form error:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      { status: 500 },
    )
  }
}
