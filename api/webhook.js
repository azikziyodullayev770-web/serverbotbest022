import { Telegraf } from 'telegraf';
import { Markup } from 'telegraf';

const bot = new Telegraf(process.env.BOT_TOKEN);

const WEBAPP_URL = process.env.WEBAPP_URL || 'https://webappurologdoctor.vercel.app/uz';

bot.start(async (ctx) => {
  try {
    const message = `👨‍⚕️ Assalomu alaykum! (Yangi versiya)

Men Doctor Urolog Firdavs AI yordamchisiman.

📋 To'liq maslahat olish uchun pastdagi "Doctor AI" tugmasini bosing.

🤖 AI sizga bir necha savollar beradi va yakunda malakali urolog shifokor bilan bog'lanish imkoniyatini taqdim etadi.

👇 Boshlash uchun quyidagi tugmani bosing!`;

    await ctx.reply(message, Markup.inlineKeyboard([
      Markup.button.webApp('👉 DOCTOR AI', WEBAPP_URL)
    ]));
  } catch (error) {
    console.error('Start command error:', error);
  }
});

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      await bot.handleUpdate(req.body);
      res.status(200).send('OK');
    } else {
      res.status(200).send('Doctor AI Bot is active.');
    }
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(500).send('Internal Server Error');
  }
}
