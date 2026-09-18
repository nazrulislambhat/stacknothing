import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiter map: IP -> timestamp
const rateLimitMap = new Map<string, number>();

interface LeadPayload {
  formType: 'contact' | 'pricing' | 'career';
  name: string;
  email: string;
  phone?: string; // Added phone field
  message?: string;
  estimate?: string;
  pages?: string;
  role?: string;
  github?: string;
  botField?: string; // Honeypot field
}

export async function POST(request: NextRequest) {
  try {
    // 1. Rate Limiting Check (1 submission per IP per 30 seconds)
    const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
    const now = Date.now();
    const lastSubmission = rateLimitMap.get(ip) || 0;

    if (now - lastSubmission < 30000) {
      return NextResponse.json(
        {
          error:
            'Rate limit exceeded. Please wait 30 seconds before submitting again.',
        },
        { status: 429 },
      );
    }

    const body: LeadPayload = await request.json();
    const {
      formType,
      name,
      email,
      phone,
      message,
      estimate,
      pages,
      role,
      github,
      botField,
    } = body;

    // 2. Honeypot Anti-Spam Check
    // If the hidden botField has any value, it's a bot filling out invisible fields.
    if (botField) {
      // Silently pretend it succeeded so bots don't adapt
      return NextResponse.json({ success: true });
    }

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email fields are required.' },
        { status: 400 },
      );
    }

    // Update rate limit timestamp on success
    rateLimitMap.set(ip, now);

    let subject = `[STACKNOTHING LEAD] New submission from ${name}`;
    let htmlContent = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
    `;

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
      to: ['stacknothing@gmail.com'],
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
