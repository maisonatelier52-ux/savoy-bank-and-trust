// import nodemailer from "nodemailer";

// export async function POST(request) {
//   try {
//     const body = await request.json();
//     const { firstName, lastName, email, phone, company, country, message } = body;

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.GMAIL_USER,           // caseynolan@progresskingdom.com
//         pass: process.env.GMAIL_APP_PASSWORD,   // Gmail App Password for that account
//       },
//     });

//     await transporter.sendMail({
//       from: `"Savoy Contact Form" <${process.env.GMAIL_USER}>`,
//       to: "urbandigestnews@gmail.com",
//       subject: `New Contact Enquiry — ${firstName} ${lastName}`,
//       html: `
//         <!DOCTYPE html>
//         <html>
//         <head>
//           <meta charset="utf-8" />
//           <style>
//             * { box-sizing: border-box; }
//             body { font-family: Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 20px; }
//             .wrapper { max-width: 620px; margin: 0 auto; background: #fff; border-radius: 2px; overflow: hidden; }
//             .header { background: #001a33; padding: 32px 40px; }
//             .header h1 { color: #c9a96e; font-size: 22px; font-weight: 900; margin: 0 0 6px; text-transform: uppercase; letter-spacing: -0.02em; }
//             .header p { color: #7a98b8; font-size: 11px; margin: 0; text-transform: uppercase; letter-spacing: 0.2em; }
//             .body { padding: 32px 40px; }
//             .section-label { font-size: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.22em; color: #aaa; margin-bottom: 4px; }
//             .section-value { font-size: 15px; font-weight: bold; color: #001a33; margin-bottom: 20px; }
//             .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0 32px; }
//             .divider { border: none; border-top: 1px solid #e8edf2; margin: 20px 0; }
//             .message-box { background: #f5f8fc; border-left: 3px solid #c9a96e; padding: 16px 20px; margin-top: 4px; font-size: 13px; color: #334; line-height: 1.7; }
//             .footer { background: #001a33; padding: 20px 40px; }
//             .footer p { color: #7a98b8; font-size: 11px; margin: 0; line-height: 1.6; }
//           </style>
//         </head>
//         <body>
//           <div class="wrapper">
//             <div class="header">
//               <h1>New Contact Enquiry</h1>
//               <p>Savoy Bank &amp; Trust · Contact Form Submission</p>
//             </div>

//             <div class="body">
//               <div class="grid">
//                 <div>
//                   <div class="section-label">First Name</div>
//                   <div class="section-value">${firstName}</div>
//                 </div>
//                 <div>
//                   <div class="section-label">Last Name</div>
//                   <div class="section-value">${lastName}</div>
//                 </div>
//               </div>

//               <hr class="divider" />

//               <div class="grid">
//                 <div>
//                   <div class="section-label">Email</div>
//                   <div class="section-value">${email || '<span style="color:#aaa;font-weight:normal;font-size:13px;">Not provided</span>'}</div>
//                 </div>
//                 <div>
//                   <div class="section-label">Phone</div>
//                   <div class="section-value">${phone || '<span style="color:#aaa;font-weight:normal;font-size:13px;">Not provided</span>'}</div>
//                 </div>
//               </div>

//               <hr class="divider" />

//               <div class="grid">
//                 <div>
//                   <div class="section-label">Company</div>
//                   <div class="section-value">${company || '<span style="color:#aaa;font-weight:normal;font-size:13px;">Not provided</span>'}</div>
//                 </div>
//                 <div>
//                   <div class="section-label">Country</div>
//                   <div class="section-value">${country || '<span style="color:#aaa;font-weight:normal;font-size:13px;">Not provided</span>'}</div>
//                 </div>
//               </div>

//               <hr class="divider" />

//               <div>
//                 <div class="section-label">Message</div>
//                 <div class="message-box">${message}</div>
//               </div>
//             </div>

//             <div class="footer">
//               <p>Sent via the Savoy Bank &amp; Trust contact form. Do not reply to this email directly — contact the client using the details above.</p>
//             </div>
//           </div>
//         </body>
//         </html>
//       `,
//     });

//     return Response.json({ success: true });
//   } catch (error) {
//     console.error("Contact email error:", error);
//     return Response.json({ success: false, error: error.message }, { status: 500 });
//   }
// }

import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, company, country, message } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // ── Real-time received date ──────────────────────────────────────────
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "";
    let receivedLine = "";
    try {
      if (ip && ip !== "127.0.0.1" && ip !== "::1") {
        const geo = await fetch(
          `http://ip-api.com/json/${ip}?fields=timezone,city,country`
        ).then((r) => r.json());
        if (geo && geo.timezone) {
          const now = new Date();
          const datePart = new Intl.DateTimeFormat("en-GB", {
            timeZone: geo.timezone,
            day: "numeric",
            month: "long",
            year: "numeric",
          }).format(now);
          const timePart = new Intl.DateTimeFormat("en-GB", {
            timeZone: geo.timezone,
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          }).format(now);
          const tzName =
            new Intl.DateTimeFormat("en-US", {
              timeZone: geo.timezone,
              timeZoneName: "short",
            })
              .formatToParts(now)
              .find((p) => p.type === "timeZoneName")?.value || "";
          receivedLine = `${datePart}, ${timePart} ${tzName}`;
        }
      }
    } catch (_) {}
    if (!receivedLine) {
      const now = new Date();
      receivedLine = now.toUTCString().replace("GMT", "UTC");
    }
    // ────────────────────────────────────────────────────────────────────

    const logoUrl = `${
      process.env.NEXT_PUBLIC_BASE_URL || "https://savoy-bank.vercel.app"
    }/savoy-logo.png`;

    // ── Field row helper ─────────────────────────────────────────────────
    const fieldRow = (label, value, isLink = false, href = "") => `
      <tr>
        <td style="padding:0 0 22px 0;">
          <p style="
            margin:0 0 5px 0;
            font-family:'Helvetica Neue',Arial,sans-serif;
            font-size:10px;
            font-weight:700;
            letter-spacing:0.2em;
            text-transform:uppercase;
            color:#8a9bb0;
          ">${label}</p>
          ${
            isLink && href
              ? `<a href="${href}" style="
                  font-family:Georgia,'Times New Roman',serif;
                  font-size:17px;
                  font-weight:400;
                  color:#c9a96e;
                  text-decoration:none;
                  letter-spacing:0.01em;
                ">${value}</a>`
              : `<p style="
                  margin:0;
                  font-family:Georgia,'Times New Roman',serif;
                  font-size:17px;
                  font-weight:400;
                  color:#1a1a1a;
                  letter-spacing:0.01em;
                ">${
                  value ||
                  '<span style="font-family:Arial,sans-serif;font-size:13px;color:#ccc;">—</span>'
                }</p>`
          }
        </td>
      </tr>
      <tr>
        <td style="padding:0 0 22px 0;">
          <div style="height:1px;background:#e8e0d4;"></div>
        </td>
      </tr>`;
    // ────────────────────────────────────────────────────────────────────

    await transporter.sendMail({
      from: `"SAVOY Bank & Trust" <${process.env.GMAIL_USER}>`,
      to: "urbandigestnews@gmail.com",
      subject: `Contact Enquiry From — ${firstName} ${lastName}`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
</head>
<body style="margin:0;padding:0;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0"
    style="padding:48px 16px;">
    <tr>
      <td align="center">

        <!-- CARD -->

            <table width="580" cellpadding="0" cellspacing="0" border="0"
            style="max-width:580px;width:100%;background:rgb(3,22,41);border:1px solid rgb(3,22,41);border-radius:1px;overflow:hidden;">
          <!-- HEADER: rgb(3,22,41) + logo -->
          <tr>
            <td align="center"
              style="background:rgb(3,22,41);padding:20px 48px 18px;">
              <img src="${logoUrl}"
                alt="Savoy Bank &amp; Trust"
                width="150"
                style="display:block;max-width:150px;height:auto;"/>
            </td>
          </tr>

          <!-- GOLD RULE -->
          <tr>
            <td style="height:1px;background:#c9a96e;font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="background:#ffffff;padding:44px 48px 4px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">

                ${fieldRow("Full Name", `${firstName} ${lastName}`)}
                ${fieldRow(
                  "Email Address",
                  email || "",
                  !!email,
                  `mailto:${email}`
                )}
                ${fieldRow(
                  "Phone Number",
                  phone || "",
                  !!phone,
                  `tel:${phone}`
                )}
                ${company ? fieldRow("Company", company) : ""}
                ${country ? fieldRow("Country", country) : ""}

                <!-- ENQUIRY BOX -->
                <tr>
                  <td style="padding:0 0 22px 0;">
                    <p style="
                      margin:0 0 10px 0;
                      font-family:'Helvetica Neue',Arial,sans-serif;
                      font-size:10px;
                      font-weight:700;
                      letter-spacing:0.2em;
                      text-transform:uppercase;
                      color:#8a9bb0;
                    ">Enquiry</p>
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="
                          background:#f5f0e8;
                          border-left:3px solid #c9a96e;
                          padding:18px 22px;
                        ">
                          <p style="
                            margin:0;
                            font-family:Georgia,'Times New Roman',serif;
                            font-size:15px;
                            font-weight:400;
                            color:#2a1f0a;
                            line-height:1.8;
                            letter-spacing:0.01em;
                          ">${message}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 22px 0;">
                    <div style="height:1px;background:#e8e0d4;"></div>
                  </td>
                </tr>

                <!-- CONSENT -->
                <tr>
                  <td style="padding:0 0 48px 0;">
                    <p style="
                      margin:0 0 5px 0;
                      font-family:'Helvetica Neue',Arial,sans-serif;
                      font-size:10px;
                      font-weight:700;
                      letter-spacing:0.2em;
                      text-transform:uppercase;
                      color:#8a9bb0;
                    ">Consent Confirmed</p>
                    <p style="
                      margin:0;
                      font-family:Georgia,'Times New Roman',serif;
                      font-size:16px;
                      font-weight:400;
                      color:#1a1a1a;
                      letter-spacing:0.01em;
                    ">Professional Client / Market Counterparty &ndash; Confirmed &#10003;</p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- GOLD RULE -->
          <tr>
            <td style="height:1px;background:#c9a96e;font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td align="center"
              style="background:#f9f7f3;padding:26px 48px 28px;">
              <p style="
                margin:0 0 7px 0;
                font-family:Georgia,'Times New Roman',serif;
                font-size:13px;
                font-weight:400;
                color:#2a2218;
                letter-spacing:0.05em;
                text-align:center;
              ">Received ${receivedLine} &nbsp;&middot;&nbsp; Savoy Bank &amp; Trust</p>
              <p style="
                margin:0;
                font-family:'Helvetica Neue',Arial,sans-serif;
                font-size:10px;
                font-weight:400;
                letter-spacing:0.14em;
                text-transform:uppercase;
                color:#b0a090;
                text-align:center;
                line-height:1.7;
              ">Sent via the contact form &nbsp;&middot;&nbsp; Do not reply &mdash; contact the client directly.</p>
            </td>
          </tr>

        </table>
        <!-- /CARD -->

      </td>
    </tr>
  </table>

</body>
</html>`,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact email error:", error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}