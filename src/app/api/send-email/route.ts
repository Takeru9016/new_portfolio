import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, service, message } = await req.json();

    const data = await resend.emails.send({
      from: "Project Enquiry <onboarding@resend.dev>",
      to: "youthfox046@gmail.com",
      reply_to: email,
      subject: `Project Enquiry from ${firstName} ${lastName}`,
      html: `
        <h1>Project Enquiry</h1>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully", data },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    if (error instanceof Error) {
      return NextResponse.json(
        { message: "Failed to send email", error: error.message },
        { status: 500 },
      );
    } else {
      return NextResponse.json(
        { message: "Failed to send email", error: "Unknown error" },
        { status: 500 },
      );
    }
  }
}
