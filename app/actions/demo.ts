'use server';

export async function submitDemoRequest(email: string) {
  const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
  const telegramChatId = process.env.TELEGRAM_CHAT_ID;

  if (!telegramToken || !telegramChatId) {
    console.error('Missing Telegram Environment Variables');
    return { success: false, error: 'Telegram bot is not configured.' };
  }

  try {
    const text = `🎯 *New Demo Request Booked*
    
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
      throw new Error(`Telegram API Error: ${errorText}`);
    }

    return { success: true };
  } catch (error: any) {
    console.error('Failed to send Telegram notification:', error);
    return { success: false, error: error.message || 'Failed to send demo request.' };
  }
}
