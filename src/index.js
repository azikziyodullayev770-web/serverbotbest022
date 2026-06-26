import express from 'express';
import bot from './bot.js';
import { config } from './config.js';

const app = express();

app.use(express.json());

// Webhook endpoint for local testing or secondary use
app.post('/api/webhook', async (req, res) => {
  try {
    await bot.handleUpdate(req.body);
    res.status(200).send('OK');
  } catch (error) {
    console.error('Webhook incident:', error);
    res.status(500).send('Error');
  }
});

app.get('/', (req, res) => {
  res.send('Doctor AI Bot Server is running!');
});

const PORT = config.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
