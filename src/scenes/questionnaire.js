import { Scenes } from 'telegraf';

export const questionnaireScene = new Scenes.BaseScene('questionnaire');

questionnaireScene.enter(async (ctx) => {
  try {
    await ctx.reply('Assalomu alaykum! Savollarga javob berishni boshlaymiz. Iltimos, ismingizni yozing:');
  } catch (error) {
      console.error('Scene enter error:', error);
  }
});

questionnaireScene.on('text', async (ctx) => {
  try {
    const name = ctx.message.text;
    await ctx.reply(`Rahmat, ${name}! Tezyoqda Doctor Firdavs AI siz bilan bog'lanadi (Bu namuna sahna).`);
    await ctx.scene.leave();
  } catch (error) {
      console.error('Scene text error:', error);
  }
});
