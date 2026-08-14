import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    console.warn("RECAPTCHA_SECRET_KEY is not set.");
    return false;
  }

  try {
    const params = new URLSearchParams();
    params.append("secret", secretKey);
    params.append("response", token);

    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error("Error verifying reCAPTCHA token:", error);
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, subject, message, botcheck, recaptchaToken } = body;

    // Honeypot spam check: if hidden honeypot field is filled, silently return success to spambots
    if (botcheck && botcheck.trim() !== "") {
      console.warn("Spambot submission blocked via honeypot field.");
      return NextResponse.json({ success: true });
    }

    // Verify reCAPTCHA token
    if (!recaptchaToken || typeof recaptchaToken !== "string" || recaptchaToken.trim() === "") {
      return NextResponse.json(
        { success: false, error: "Security check failed. Please complete the reCAPTCHA verification." },
        { status: 400 }
      );
    }

    const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
    if (!isRecaptchaValid) {
      return NextResponse.json(
        { success: false, error: "reCAPTCHA validation failed. Please try verifying the reCAPTCHA again." },
        { status: 400 }
      );
    }

    // Input validation
    if (!name || typeof name !== "string" || name.trim() === "") {
      return NextResponse.json(
        { success: false, error: "Full Name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || email.trim() === "") {
      return NextResponse.json(
        { success: false, error: "Email Address is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== "string" || subject.trim() === "") {
      return NextResponse.json(
        { success: false, error: "Subject is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim() === "") {
      return NextResponse.json(
        { success: false, error: "Message content is required." },
        { status: 400 }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { success: false, error: "Message exceeds maximum length of 5000 characters." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey || apiKey === "re_your_api_key_here") {
      console.error("Resend API key is missing or not configured.");
      return NextResponse.json(
        { 
          success: false, 
          error: "Email service is not configured yet. Please email kamran.akmal.sec@gmail.com directly." 
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || "kamran.akmal.sec@gmail.com";

    const { error } = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: [recipientEmail],
      replyTo: email.trim(),
      subject: `[Portfolio Inquiry] ${subject.trim()}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #ffffff;">
          <h2 style="color: #c08552; border-bottom: 2px solid #c08552; padding-bottom: 10px; margin-top: 0;">New Portfolio Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 120px; color: #444;">From:</td>
              <td style="padding: 8px 0; color: #222;">${escapeHtml(name.trim())}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #444;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email.trim())}" style="color: #c08552; text-decoration: none;">${escapeHtml(email.trim())}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #444;">Company:</td>
              <td style="padding: 8px 0; color: #222;">${company ? escapeHtml(company.trim()) : "<em>Not specified</em>"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #444;">Subject:</td>
              <td style="padding: 8px 0; color: #222;">${escapeHtml(subject.trim())}</td>
            </tr>
          </table>
          <div style="padding: 16px; background-color: #f8f9fa; border-left: 4px solid #c08552; border-radius: 4px;">
            <h4 style="margin: 0 0 10px 0; color: #333;">Message:</h4>
            <p style="white-space: pre-wrap; margin: 0; color: #444; line-height: 1.6;">${escapeHtml(message.trim())}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0 16px 0;" />
          <p style="font-size: 12px; color: #888; margin: 0; text-align: center;">Sent securely via your portfolio contact API route.</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { success: false, error: error.message || "Failed to send email message." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error("Unexpected error in contact API route:", err);
    return NextResponse.json(
      { success: false, error: "An unexpected server error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
