import { env } from 'cloudflare:workers';
import { readContent } from './cms';

type LeadNotice = {
  name: string;
  phone: string;
  interest: string;
  details: string;
  source: string;
  createdAt: string;
};

type MailEnv = {
  RESEND_API_KEY?: string;
  RESEND_FROM_EMAIL?: string;
};

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    char =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
      }[char]!)
  );
}

export async function notifyNewLead(lead: LeadNotice) {
  const mail = env as unknown as MailEnv;

  // Kiểm tra cấu hình email
  if (!mail.RESEND_API_KEY || !mail.RESEND_FROM_EMAIL) {
    console.error('EMAIL: missing configuration');
    return false;
  }

  const { data } = await readContent();

  const recipient =
    data.settings.notificationEmail || data.settings.email;

  if (!recipient) {
    console.error('EMAIL: missing recipient email');
    return false;
  }

  const rows = [
    ['Khách hàng', lead.name],
    ['Điện thoại', lead.phone],
    ['Nhu cầu', lead.interest],
    ['Thông tin', lead.details],
    ['Nguồn', lead.source],
    [
      'Thời gian',
      new Date(lead.createdAt).toLocaleString('vi-VN', {
        timeZone: 'Asia/Ho_Chi_Minh',
      }),
    ],
  ];

  const payload = {
    from: mail.RESEND_FROM_EMAIL,
    to: [recipient],
    subject: `[Khách hàng mới] ${lead.interest} - ${lead.name}`,
    html: `
      <div style="font-family:Arial,sans-serif;color:#102940">
        <h2 style="color:#0068d7">
          Ford Mỹ Đình có khách hàng mới
        </h2>

        <table
          cellpadding="8"
          cellspacing="0"
          style="border-collapse:collapse;width:100%;max-width:680px"
        >
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <td style="border:1px solid #dce5ee;font-weight:bold;width:130px">
                    ${escapeHtml(label)}
                  </td>
                  <td style="border:1px solid #dce5ee">
                    ${escapeHtml(value)}
                  </td>
                </tr>
              `
            )
            .join('')}
        </table>

        <p>
          Thông tin đã được lưu tại trang quản trị.
        </p>
      </div>
    `,
  };

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${mail.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error(
        'EMAIL: Resend request failed:',
        response.status,
        response.statusText
      );

      return false;
    }

    console.log('EMAIL: sent successfully');

    return true;
  } catch (error) {
    console.error('EMAIL: Resend fetch error:', String(error));

    return false;
  }
}