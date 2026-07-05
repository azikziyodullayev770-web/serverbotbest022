import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const token = process.env.BOT_TOKEN;
const url = process.env.WEBHOOK_URL;

async function setWebhook() {
    if (!token || !url) {
        console.error('❌ Error: BOT_TOKEN or WEBHOOK_URL is missing in .env file');
        return;
    }

    const webhookUrl = `${url}/api/webhook`;
    console.log(`Setting webhook to: ${webhookUrl}`);
    try {
        const response = await axios.get(`https://api.telegram.org/bot${token}/setWebhook?url=${webhookUrl}`);
        if (response.data.ok) {
            console.log('✅ Webhook was set successfully!');
            console.log('Response:', response.data.description);
        } else {
            console.error('❌ Failed to set webhook:', response.data);
        }
    } catch (error) {
        console.error('❌ Network error during webhook setting:', error.response ? error.response.data : error.message);
    }
}

setWebhook();
