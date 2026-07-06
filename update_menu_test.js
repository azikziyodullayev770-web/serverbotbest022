import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';
dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);
const webappUrl = 'https://webappurologdoctor.vercel.app/uz';

async function updateMenu() {
  try {
    console.log('Updating menu button with new text...');
    await bot.telegram.setChatMenuButton({
      menuButton: {
        type: 'web_app',
        text: '👉 DOCTOR AI',
        web_app: { url: webappUrl }
      }
    });

    console.log('Menu button updated successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error updating menu button:', error);
    process.exit(1);
  }
}

updateMenu();
