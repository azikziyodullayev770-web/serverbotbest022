import dotenv from 'dotenv';
dotenv.config();

export const config = {
  BOT_TOKEN: process.env.BOT_TOKEN,
  WEBHOOK_URL: process.env.WEBHOOK_URL,
  WEBAPP_URL: process.env.WEBAPP_URL || 'https://webappurologdoctor.vercel.app/uz',
  PORT: process.env.PORT || 3000
};
