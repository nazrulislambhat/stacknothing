import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const targetUrl: string | null = searchParams.get('url');

  if (!targetUrl) {
    return NextResponse.json(
      { error: 'Missing target URL parameter.' },
      { status: 400 },
    );
  }

  // Self-audit interception check
  try {
    const parsed = new URL(
      targetUrl.includes('://') ? targetUrl : `https://${targetUrl}`,
    );
    const hostname = parsed.hostname.toLowerCase();
    if (
      hostname === 'stacknothing.com' ||
      hostname.endsWith('.stacknothing.com') ||
      hostname === 'localhost'
    ) {
      return NextResponse.json({
        success: true,
        score: 100,
        metrics: {
          lcp: '0.4s [PERFECTION]',
          fid: '12ms [INSTANT]',
          cls: '0.00 [LOCKED]',
        },
        easterEgg:
          'Nice try! StackNothing infrastructure is already running at 100% Core Web Vitals efficiency via Next.js 16 Edge deployment. Audit an external competitor instead.',
      });
    }
  } catch {
    return NextResponse.json(
      { error: 'Invalid URL format provided.' },
      { status: 400 },
    );
  }

  try {
    const apiKey = process.env.GOOGLE_PAGESPEED_API_KEY || '';
    const psiEndpoint = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
      targetUrl,
    )}&strategy=mobile${apiKey ? `&key=${apiKey}` : ''}`;

    // Pass explicit headers with a valid Referer to bypass empty referer blocks
    const res = await fetch(psiEndpoint, {
      headers: {
        'User-Agent': 'StackNothing-Audit-Engine/1.0',
        Accept: 'application/json',
        Referer: 'https://stacknothing.com',
      },
    });

    const data = await res.json();

    if (!res.ok || data.error) {
      const errorMessage =
        data?.error?.message ||
        'Failed to fetch performance telemetry from Google PSI API.';
      return NextResponse.json(
        { error: errorMessage },
        { status: res.status || 400 },
      );
    }

    const lighthouse = data?.lighthouseResult;
    const categories = lighthouse?.categories;
    const audits = lighthouse?.audits;

    const performanceScore = categories?.performance?.score
      ? Math.round(categories.performance.score * 100)
      : 0;

    const lcp = audits?.['largest-contentful-paint']?.displayValue || 'N/A';
    const fid =
      audits?.['max-potential-fid']?.displayValue ||
      audits?.['interactive']?.displayValue ||
      'N/A';
    const cls = audits?.['cumulative-layout-shift']?.displayValue || 'N/A';

    return NextResponse.json({
      success: true,
      score: performanceScore,
      metrics: { lcp, fid, cls },
    });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Server audit execution failed.';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
