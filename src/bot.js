import { Telegraf } from 'telegraf';
import { config } from './config.js';
import { startCommand } from './commands/start.js';

const bot = new Telegraf(config.BOT_TOKEN);

bot.start(startCommand);

export default bot;
