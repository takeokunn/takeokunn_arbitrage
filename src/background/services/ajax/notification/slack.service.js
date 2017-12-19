import slack from 'slack';

import { SLACK_CONFIG } from 'background_config/';

export const postMessage = payload => {
    return slack.chat.postMessage({
        token: SLACK_CONFIG.ACCESS_TOKEN,
        channel: SLACK_CONFIG.CHANNEL_NAME,
        text: payload.text
    });
}
