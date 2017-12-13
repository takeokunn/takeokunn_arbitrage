import Twitter from 'twitter';

import { TWITTER_CONFIG } from 'config';

const client = new Twitter({
    consumer_key: TWITTER_CONFIG.API_KEY,
    consumer_secret: TWITTER_CONFIG.API_KEY_SECRET,
    access_token_key: TWITTER_CONFIG.ACCESS_TOKEN,
    access_token_secret: TWITTER_CONFIG.ACCESS_TOKEN_SECRET
});

export const postTweet = payload => client.post('statuses/update', { status: payload.text });
