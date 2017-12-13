import { WebClient } from '@slack/client';

import { SLACK_CONFIG } from 'config';

var web = new WebClient(SLACK_CONFIG.ACCESS_TOKEN);
web.chat.postMessage(SLACK_CONFIG.CHANNEL_NAME, 'Hello there', function(err, res) {
  if (err) {
    console.log('Error:', err);
  } else {
    console.log('Message sent: ', res);
  }
});
