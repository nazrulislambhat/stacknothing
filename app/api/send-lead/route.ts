import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { generateBrutalistEmailHtml } from '@/lib/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);
const rateLimitMap = new Map<string, number>();

interface LeadPayload {
  formType: 'contact' | 'pricing' | 'career';
  name: string;
  email: string;
  phone?: string;
  message?: string;
  estimate?: string;
  pages?: string;
  role?: string;
  github?: string;
  botField?: string;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
    const now = Date.now();
    const lastSubmission = rateLimitMap.get(ip) || 0;

    if (now - lastSubmission < 30000) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please wait 30 seconds.' },
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

    if (botField) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required.' },
        { status: 400 },
      );
    }

    rateLimitMap.set(ip, now);

    let subject = `[STACKNOTHING LEAD] New submission from ${name}`;
    let badge = 'GENERAL LEAD';
    let title = `New Inquiry: ${name}`;
    const dataFields = [
      { label: 'Sender Name', value: name },
      { label: 'Work Email', value: email },
      { label: 'Phone Number', value: phone || 'N/A' },
    ];

    if (formType === 'contact') {
      subject = `[CONTACT LEAD] ${name}`;
      badge = 'CONTACT INQUIRY';
      title = `Direct Line Inquiry`;
    } else if (formType === 'pricing') {
      subject = `[PRICING ESTIMATE] ${name} (${estimate})`;
      badge = 'PRICING INTAKE';
      title = `Plan Selection: ${estimate}`;
      dataFields.push({ label: 'Target Configuration', value: pages || 'N/A' });
    } else if (formType === 'career') {
      subject = `[CAREER APPLICATION] ${role || 'General'} - ${name}`;
      badge = 'TALENT APPLICATION';
      title = `Candidate Application: ${role}`;
      dataFields.push(
        { label: 'Applied Role', value: role || 'N/A' },
        { label: 'GitHub / Portfolio', value: github || 'N/A' },
      );
    }

    const htmlContent = generateBrutalistEmailHtml({
      title,
      badge,
      dataFields,
      message,
    });

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
      error instanceof Error ? error.message : 'Failed to dispatch email.';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
