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
    const response = await fetch(`${supabaseUrl}/rest/v1/onboarding`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': anonKey,
        'Authorization': `Bearer ${serviceKey}`,
        'Prefer': 'return=minimal',
      },
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
