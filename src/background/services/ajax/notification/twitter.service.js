import Twitter from 'twit';

import { TWITTER_CONFIG } from 'background_config';

const twitter = new Twitter({
    consumer_key: TWITTER_CONFIG.CONSUMER_KEY,
    consumer_secret: TWITTER_CONFIG.CONSUMER_SECRET,
    access_token: TWITTER_CONFIG.ACCESS_TOKEN,
    access_token_secret: TWITTER_CONFIG.ACCESS_TOKEN_SECRET
})

export const post = payload => {
    return twitter.post('statuses/update', { status: payload.text })
        .then(res => res)
        .catch(err => err);
}
