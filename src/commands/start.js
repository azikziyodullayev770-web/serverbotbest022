import { Markup } from 'telegraf';
import { config } from '../config.js';

export const startCommand = async (ctx) => {
  try {
    const message = `👨‍⚕️ Assalomu alaykum! (Yangi versiya)

Men Doctor Urolog Firdavs AI yordamchisiman.

📋 To'liq maslahat olish uchun pastdagi "Doctor AI" tugmasini bosing.

🤖 AI sizga bir necha savollar beradi va yakunda malakali urolog shifokor bilan bog'lanish imkoniyatini taqdim etadi.

👇 Boshlash uchun quyidagi tugmani bosing!`;

    await ctx.reply(message, Markup.inlineKeyboard([
      Markup.button.webApp('👉 DOCTOR AI', config.WEBAPP_URL)
    ]));
  } catch (error) {
    console.error('Start command error:', error);
  }
};