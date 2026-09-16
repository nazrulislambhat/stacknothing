import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const targetUrl = searchParams.get('url');

  if (!targetUrl) {
    return NextResponse.json(
      { error: 'Missing target URL parameter.' },
      { status: 400 },
    );
  }

  try {
    const psiEndpoint = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(targetUrl)}&strategy=mobile`;
    const res = await fetch(psiEndpoint);

    if (!res.ok) {
      throw new Error(
        'Failed to fetch performance telemetry from Google PSI API.',
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Server audit execution failed.' },
      { status: 500 },
    );
  }
}
