'use server';

export async function submitDemoRequest(email: string): Promise<{ success: boolean; error?: string }> {
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  // 1. Save to Supabase (if configured)
  if (supabaseUrl && serviceKey) {
    try {
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        'apikey': serviceKey,
        'Prefer': 'return=minimal',
      };
      if (serviceKey.startsWith('ey')) {
        headers['Authorization'] = `Bearer ${serviceKey}`;
      }

      await fetch(`${supabaseUrl}/rest/v1/onboarding`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          name: 'Direct Proposal Request',
          email,
          company: 'N/A',
          project_type: 'Direct Proposal Request',
          budget: 'N/A',
          details: `Inquiry submitted via inline proposal form for ${email}`,
        }),
      });
    } catch (dbError) {
      console.error('Supabase save error (non-fatal):', dbError);
    }
  }

  // 2. Telegram Notification
  const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
  const telegramChatId = process.env.TELEGRAM_CHAT_ID;

  if (telegramToken && telegramChatId) {
    try {
      const text = `🎯 *New Proposal Request Received*
      
📧 *Email:* ${email}
⏱️ *Timestamp:* ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })}
`;

      const response = await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
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

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Telegram API Error: ${errorText}`);
      }
    } catch (error: any) {
      console.error('Failed to send Telegram notification:', error);
    }
  }

  return { success: true };
}
