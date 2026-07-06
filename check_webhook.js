import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const token = process.env.BOT_TOKEN;

async function checkWebhook() {
    try {
        const response = await axios.get(`https://api.telegram.org/bot${token}/getWebhookInfo`);
        console.log('Webhook info:', response.data);
    } catch (error) {
        console.error('Error fetching webhook info:', error.response ? error.response.data : error.message);
    }
}

checkWebhook();
