interface EmailTemplateProps {
  title: string;
  badge: string;
  dataFields: { label: string; value: string }[];
  message?: string;
}

export function generateBrutalistEmailHtml({
  title,
  badge,
  dataFields,
  message,
}: EmailTemplateProps): string {
  const fieldsHtml = dataFields
    .map(
      (field) => `
        <tr>
          <td style="padding: 10px 14px; border: 2px solid #000000; background-color: #f4f4f5; font-weight: bold; width: 35%; text-transform: uppercase; font-size: 11px;">
            ${field.label}
          </td>
          <td style="padding: 10px 14px; border: 2px solid #000000; background-color: #ffffff; font-size: 12px; font-weight: normal;">
            ${field.value}
          </td>
        </tr>
      `,
    )
    .join('');

  const messageHtml = message
    ? `
      <div style="border: 2px solid #000000; background-color: #fafafa; padding: 16px; margin-bottom: 24px;">
        <div style="font-size: 10px; font-weight: bold; color: #1f01b9; text-transform: uppercase; margin-bottom: 8px;">
          // SPECIFICATION / BRIEF:
        </div>
        <div style="font-size: 12px; line-height: 1.5; white-space: pre-wrap; color: #27272a;">
          ${message}
        </div>
      </div>
    `
    : '';

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>StackNothing LLC // Transmission</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #f0f0f0; font-family: 'Courier New', Courier, monospace; color: #000000;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f0f0f0; padding: 40px 20px;">
        <tr>
          <td align="center">
            <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border: 3px solid #000000; box-shadow: 6px 6px 0px #000000; text-align: left;">
              
              <tr>
                <td style="background-color: #1f01b9; padding: 20px 24px; border-bottom: 3px solid #000000;">
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                    <tr>
                      <td style="font-size: 14px; font-weight: 900; color: #ffffff; text-transform: uppercase; letter-spacing: 1px;">
                        [STACKNOTHING TRANSMISSION]
                      </td>
                      <td align="right" style="font-size: 10px; font-weight: bold; color: #b2d12e; text-transform: uppercase;">
                        ${badge}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <tr>
                <td style="padding: 30px 24px 20px 24px;">
                  <h1 style="margin: 0 0 10px 0; font-size: 22px; font-weight: 900; text-transform: uppercase; letter-spacing: -0.5px; color: #000000;">
                    ${title}
                  </h1>
                  <p style="margin: 0 0 20px 0; font-size: 12px; color: #52525b; text-transform: uppercase;">
                    Incoming lead dispatch verified via Edge infrastructure.
                  </p>

                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse; margin-bottom: 24px;">
                    ${fieldsHtml}
                  </table>

                  ${messageHtml}
                </td>
              </tr>

              <tr>
                <td style="background-color: #000000; padding: 16px 24px; text-align: center;">
                  <p style="margin: 0; font-size: 10px; color: #b2d12e; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">
                    STACKNOTHING LLC // SYSTEM DISPATCH ENGINE
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}
