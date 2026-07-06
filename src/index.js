import express from 'express';
import bot from './bot.js';
import { config } from './config.js';

const app = express();

app.use(express.json());

// Webhook endpoint for Vercel or local webhook testing
app.post('/api/webhook', async (req, res) => {
  try {
    await bot.handleUpdate(req.body);
    res.status(200).send('OK');
  } catch (error) {
    console.error('Webhook processing error:', error);
    res.status(500).send('Error');
  }
});

app.get('/', (req, res) => {
  res.send('Doctor AI Bot Server is running!');
});

const PORT = config.PORT || 3000;

// Start the server
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  
  // Choose between Webhook and Long Polling
  if (config.WEBHOOK_URL) {
    console.log(`Bot is configured to use Webhook: ${config.WEBHOOK_URL}`);
    try {
      const webhookUrl = `${config.WEBHOOK_URL}/api/webhook`;
      await bot.telegram.setWebhook(webhookUrl);
      console.log(`Webhook successfully set to: ${webhookUrl}`);
      
      await bot.telegram.setChatMenuButton({
        menuButton: {
          type: 'web_app',
          text: '👉 DOCTOR AI',
          web_app: { url: config.WEBAPP_URL }
        }
      });
      console.log('Menu button set for webhook mode.');
    } catch (err) {
      console.error('Failed to set webhook or menu button in webhook mode:', err);
    }
  } else {
    try {
      await bot.launch();
      console.log('Bot started in polling mode.');
      
      await bot.telegram.setChatMenuButton({
        menuButton: {
          type: 'web_app',
          text: '👉 DOCTOR AI',
          web_app: { url: config.WEBAPP_URL }
        }
      });
      console.log('Menu button set for polling mode.');
    } catch (err) {
      console.error('Failed to start bot in polling mode:', err);
    }
  }
});

// Enable graceful stop Safely (prevents crashes when bot is not in polling mode)
process.once('SIGINT', () => {
  try {
    bot.stop('SIGINT');
  } catch (e) {
    console.log('Safe SIGINT shutdown completed.');
  }
});
process.once('SIGTERM', () => {
  try {
    bot.stop('SIGTERM');
  } catch (e) {
    console.log('Safe SIGTERM shutdown completed.');
  }
});

