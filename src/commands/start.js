export const startCommand = async (ctx) => {
  try {
    const message = `👨‍⚕️ Assalomu alaykum!

Men Doctor Urolog Firdavs AI yordamchisiman.

📋 To'liq maslahat olish uchun pastdagi "Doctor AI" tugmasini bosing.

🤖 AI sizga bir necha savollar beradi va yakunda malakali urolog shifokor bilan bog'lanish imkoniyatini taqdim etadi.

👇 Boshlash uchun quyidagi tugmani bosing!`;

    await ctx.reply(message, {
      reply_markup: {
        inline_keyboard: [
          [{ text: '🤖 Doctor AI', callback_data: 'doctor_ai_start' }]
        ]
      }
    });
  } catch (error) {
    console.error('Start command error:', error);
  }
};
