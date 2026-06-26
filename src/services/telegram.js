import axios from 'axios';
import { config } from '../config.js';

export const setWebhook = async (url) => {
  try {
    const response = await axios.get(`https://api.telegram.org/bot${config.BOT_TOKEN}/setWebhook?url=${url}`);
    return response.data;
  } catch (error) {
    console.error('Set webhook error:', error);
    throw error;
  }
};
