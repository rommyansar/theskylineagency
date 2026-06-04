'use server';

interface OnboardingData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  details: string;
}

export async function submitOnboarding(data: OnboardingData) {
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const anonKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !serviceKey || !anonKey) {
    console.error('Missing Supabase Environment Variables');
    return { success: false, error: 'Database configuration missing.' };
  }
  // 1. Save to Supabase (using standard REST API)
  try {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'apikey': serviceKey,
      'Prefer': 'return=minimal',
    };

    // If it's a legacy JWT key (starts with ey), we also need the Authorization header
    if (serviceKey.startsWith('ey')) {
      headers['Authorization'] = `Bearer ${serviceKey}`;
    }

    const response = await fetch(`${supabaseUrl}/rest/v1/onboarding`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        company: data.company,
        project_type: data.projectType,
        budget: data.budget,
        details: data.details,
      }),
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Supabase Error (${response.status}): ${errorText}`);
    }
  } catch (error: any) {
    console.error('Failed to submit to Supabase:', error);
    return { success: false, error: error.message || 'Failed to save submission.' };
  }

  // 2. Optional Telegram Notification
  const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
  const telegramChatId = process.env.TELEGRAM_CHAT_ID;

  if (telegramToken && telegramChatId) {
    try {
      const text = `🚀 *New Client Onboarding Request*

👤 *Name:* ${data.name}
📧 *Email:* ${data.email}
🏢 *Company:* ${data.company || 'N/A'}
🛠️ *Service:* ${data.projectType}
💰 *Budget:* ${data.budget}
📝 *Details:* ${data.details || 'No description provided.'}
`;

      await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: text,
          parse_mode: 'Markdown',
        }),
      });
    } catch (telegramError) {
      console.error('Failed to send Telegram notification:', telegramError);
      // We don't fail the user submission if notifications fail
    }
  }

  return { success: true };
}

interface PricingLeadData {
  planName: string;
  planPrice: string;
  name: string;
  email: string;
  phone?: string;
  requirements?: string;
}

export async function submitPricingLead(data: PricingLeadData) {
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceKey) {
    console.error('Missing Supabase Environment Variables');
    return { success: false, error: 'Database configuration missing.' };
  }

  // 1. Save to Supabase (using standard REST API onboarding table)
  try {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'apikey': serviceKey,
      'Prefer': 'return=minimal',
    };

    if (serviceKey.startsWith('ey')) {
      headers['Authorization'] = `Bearer ${serviceKey}`;
    }

    const response = await fetch(`${supabaseUrl}/rest/v1/onboarding`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        company: data.phone ? `Phone: ${data.phone}` : 'N/A',
        project_type: `Pricing Lead: ${data.planName}`,
        budget: data.planPrice,
        details: data.requirements || 'No custom requirements.',
      }),
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Supabase Error (${response.status}): ${errorText}`);
    }
  } catch (error: any) {
    console.error('Failed to submit to Supabase:', error);
    return { success: false, error: error.message || 'Failed to save lead.' };
  }

  // 2. Telegram Notification
  const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
  const telegramChatId = process.env.TELEGRAM_CHAT_ID;

  if (telegramToken && telegramChatId) {
    try {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });
      const parts = formatter.formatToParts(new Date());
      const year = parts.find(p => p.type === 'year')?.value;
      const month = parts.find(p => p.type === 'month')?.value;
      const day = parts.find(p => p.type === 'day')?.value;
      const hour = parts.find(p => p.type === 'hour')?.value;
      const minute = parts.find(p => p.type === 'minute')?.value;
      const timeStr = `${year}-${month}-${day} ${hour}:${minute}`;

      const text = `🚀 *New Pricing Lead*

💰 *Plan:* ${data.planName} (${data.planPrice})
👤 *Name:* ${data.name}
📧 *Email:* ${data.email}
📱 *Phone:* ${data.phone || 'N/A'}
📝 *Requirements:* ${data.requirements || 'N/A'}
🕒 *Time:* ${timeStr}
`;

      const tgRes = await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: text,
          parse_mode: 'Markdown',
        }),
      });
      if (!tgRes.ok) {
        const tgErr = await tgRes.text();
        console.error('Telegram Send Error:', tgErr);
      }
    } catch (telegramError) {
      console.error('Failed to send Telegram notification:', telegramError);
    }
  }

  return { success: true };
}
