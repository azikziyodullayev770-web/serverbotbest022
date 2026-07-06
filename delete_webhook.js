import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const token = process.env.BOT_TOKEN;

async function deleteWebhook() {
    console.log('Deleting webhook...');
    try {
        const response = await axios.get(`https://api.telegram.org/bot${token}/deleteWebhook`);
        if (response.data.ok) {
            console.log('✅ Webhook deleted! Bot is now ready for local polling.');
        } else {
            console.error('❌ Failed to delete webhook:', response.data);
        }
    } catch (error) {
        console.error('❌ error:', error.message);
    }
}

deleteWebhook();
