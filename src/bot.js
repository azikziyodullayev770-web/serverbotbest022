import { Telegraf, Scenes, session } from 'telegraf';
import { config } from './config.js';
import { startCommand } from './commands/start.js';
import { doctorAction } from './actions/doctor.js';
import { questionnaireScene } from './scenes/questionnaire.js';

const bot = new Telegraf(config.BOT_TOKEN);

const stage = new Scenes.Stage([questionnaireScene]);

bot.use(session());
bot.use(stage.middleware());

bot.start(startCommand);
bot.action('doctor_ai_start', doctorAction);

export default bot;
