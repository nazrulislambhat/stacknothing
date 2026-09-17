import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface LeadPayload {
  formType: 'contact' | 'pricing' | 'career';
  name: string;
  email: string;
  message?: string;
  estimate?: string;
  pages?: string;
  role?: string;
  github?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: LeadPayload = await request.json();
    const { formType, name, email, message, estimate, pages, role, github } =
      body;

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email fields are required.' },
        { status: 400 },
      );
    }

    let subject = `[STACKNOTHING LEAD] New submission from ${name}`;
    let htmlContent = `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p>`;

    if (formType === 'contact') {
      subject = `[CONTACT LEAD] ${name}`;
      htmlContent += `<p><strong>Message:</strong> ${message || 'N/A'}</p>`;
    } else if (formType === 'pricing') {
      subject = `[PRICING ESTIMATE] ${name} (${estimate})`;
      htmlContent += `<p><strong>Estimated Quote:</strong> ${estimate}</p><p><strong>Target Pages:</strong> ${pages}</p><p><strong>Notes:</strong> ${message || 'N/A'}</p>`;
    } else if (formType === 'career') {
      subject = `[CAREER APPLICATION] ${role || 'General'} - ${name}`;
      htmlContent += `<p><strong>Applied Role:</strong> ${role}</p><p><strong>GitHub / Portfolio:</strong> ${github}</p><p><strong>Cover Letter:</strong> ${message || 'N/A'}</p>`;
    }

    const data = await resend.emails.send({
      from: 'StackNothing Email Dispatch <contact@stacknothing.com>',
      subject: subject,
      html: htmlContent,
      replyTo: email,
    });

    return NextResponse.json({ success: true, data });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : 'Failed to dispatch email notification.';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
