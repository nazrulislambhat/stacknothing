import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'STACKNOTHING.LLC';
    const subtitle =
      searchParams.get('subtitle') ||
      'High-Performance Agency & Product Ecosystem';

    return new ImageResponse(
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#000000',
          color: '#ffffff',
          padding: '60px',
          fontFamily: 'monospace',
          border: '8px solid #ffffff',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              backgroundColor: '#1f01b9',
              padding: '10px 20px',
              color: '#ffffff',
            }}
          >
            [STACKNOTHING.LLC]
          </div>
          <div
            style={{ fontSize: '20px', color: '#b2d12e', fontWeight: 'bold' }}
          >
            NEXT.JS 16
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 900,
              textTransform: 'uppercase',
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: '24px',
              opacity: 0.8,
              margin: 0,
              maxWidth: '900px',
            }}
          >
            {subtitle}
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            fontSize: '18px',
            opacity: 0.6,
            borderTop: '2px solid rgba(255,255,255,0.2)',
            paddingTop: '20px',
          }}
        >
          <span>stacknothing.com</span>
          <span>EDGES // TURBOPACK // TAILWIND V4</span>
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e: any) {
    return new Response(`Failed to generate image`, { status: 500 });
  }
}
