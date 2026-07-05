import { Telegraf, Markup } from 'telegraf';

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(async (ctx) => {
  await ctx.reply(
    `👨‍⚕️ Assalomu alaykum!\n\nMen Doctor Urolog Firdavs AI yordamchisiman.\n\n📋 To'liq maslahat olish uchun pastdagi tugmani bosing.`,
    Markup.inlineKeyboard([
      Markup.button.webApp('👉 DOCTOR AI', process.env.WEBAPP_URL || 'https://webappurologdoctor.vercel.app/uz')
    ])
  );
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await bot.handleUpdate(req.body);
      res.status(200).json({ ok: true });
    } catch (err) {
      console.error('handleUpdate error:', err);
      res.status(200).json({ ok: false, error: err.message });
    }
  } else {
    res.status(200).send('Doctor AI Bot is active.');
  }
}
