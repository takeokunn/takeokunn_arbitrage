import slack from 'slack';
import { SLACK_CONFIG } from 'config';

export const postMessage = text => {
    return slack.chat.postMessage({
        token: SLACK_CONFIG.ACCESS_TOKEN,
        channel: SLACK_CONFIG.CHANNEL_NAME,
        text: text
    });
}
