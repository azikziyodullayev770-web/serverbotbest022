import dotenv from 'dotenv';
dotenv.config();

export const config = {
  BOT_TOKEN: process.env.BOT_TOKEN,
  WEBHOOK_URL: process.env.WEBHOOK_URL,
  PORT: process.env.PORT || 3000
};
