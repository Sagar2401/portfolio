import { type NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";

// Simple email logging function for development
function logEmailToConsole(data: any) {
  console.log("\n" + "=".repeat(50));
  console.log("📧 CONTACT FORM SUBMISSION");
  console.log("=".repeat(50));
  console.log("👤 Name:", `${data.firstName} ${data.lastName}`);
  console.log("📧 Email:", data.email);
  console.log("📝 Subject:", data.subject);
  console.log("💬 Message:", data.message);
  console.log("⏰ Time:", new Date().toLocaleString());
  console.log("=".repeat(50) + "\n");
}

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();

    // Validate the data using Zod schema
    const validatedData = contactFormSchema.parse(body);

    const { firstName, lastName, email, subject, message } = validatedData;
    console.log(process.env.RESEND_API_KEY);
    // Check if we have a valid Resend API key
    const hasValidApiKey =
      process.env.RESEND_API_KEY &&
      process.env.RESEND_API_KEY.startsWith("re_") &&
      process.env.RESEND_API_KEY.length > 10;

    if (!hasValidApiKey) {
      // Development mode - log to console
      logEmailToConsole(validatedData);

      return NextResponse.json({
        success: true,
        message:
          "Message received! Check the server console for details. (Development Mode)",
        mode: "development",
      });
    }

    // Try to use Resend only if we have a valid API key
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      // Test the API key first with a simple call
      console.log("Testing Resend API key...");

      const fromEmail = "onboarding@resend.dev";
      const adminEmail = process.env.ADMIN_EMAIL || "admin@example.com";

      // Prepare admin email
      const adminEmailConfig = {
        from: `Portfolio Contact <${fromEmail}>`,
        to: [adminEmail],
        subject: `New Contact Form Message: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Contact Details:</h3>
              <p><strong>Name:</strong> ${firstName} ${lastName}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Subject:</strong> ${subject}</p>
            </div>
            
            <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
              <h3 style="color: #374151; margin-top: 0;">Message:</h3>
              <p style="line-height: 1.6; color: #4b5563;">${message.replace(/\n/g, "<br>")}</p>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background-color: #eff6ff; border-radius: 8px;">
              <p style="margin: 0; color: #1e40af; font-size: 14px;">
                <strong>Reply to this email to respond directly to ${firstName}.</strong>
              </p>
            </div>
          </div>
        `,
        replyTo: email,
      };

      // Send the email
      const result = await resend.emails.send(adminEmailConfig);
      console.log("result :>> ", result);
      if (result.error) {
        console.error("Resend API Error:", result.error);

        // Fall back to console logging
        logEmailToConsole(validatedData);

        return NextResponse.json({
          success: true,
          message:
            "Message received! Email service is temporarily unavailable, but your message has been logged.",
          mode: "fallback",
        });
      }

      console.log("Email sent successfully via Resend:", result.data?.id);

      // Try to send auto-reply (optional, don't fail if this doesn't work)
      try {
        const autoReplyConfig = {
          from: `Sagar Dhandhukiya <${fromEmail}>`,
          to: [email],
          subject: `Thank you for contacting me, ${firstName}!`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #059669;">Thank You for Your Message!</h2>
              <p>Hi ${firstName},</p>
              <p>Thank you for reaching out! I've received your message about "<strong>${subject}</strong>" and I appreciate you taking the time to contact me.</p>
              <p>I'll review your message and get back to you within 24-48 hours.</p>
              <p>Best regards,<br><strong>Sagar Dhandhukiya</strong></p>
            </div>
          `,
        };

        await resend.emails.send(autoReplyConfig);
        console.log("Auto-reply sent successfully");
      } catch (autoReplyError) {
        console.log("Auto-reply failed (non-critical):", autoReplyError);
      }

      return NextResponse.json({
        success: true,
        message: "Thank you for your message! I'll get back to you soon.",
        emailId: result.data?.id,
        mode: "production",
      });
    } catch (resendError: any) {
      console.error("Resend service error:", resendError);

      // Fall back to console logging
      logEmailToConsole(validatedData);

      return NextResponse.json({
        success: true,
        message:
          "Message received! Email service encountered an issue, but your message has been logged.",
        mode: "fallback",
      });
    }
  } catch (error) {
    console.error("Contact form error:", error);

    // Handle Zod validation errors
    if (error && typeof error === "object" && "issues" in error) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check your input and try again.",
          errors: error,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
