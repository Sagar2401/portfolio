import { type NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { error } from "console";

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();

    // Validate the data using Zod schema

    // Use fallback email service

    return NextResponse.json(
      {
        success: true,
        message: "Fallback Success!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Fallback contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}
