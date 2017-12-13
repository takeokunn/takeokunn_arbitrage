import Twitter from 'twitter';

import { TWITTER_CONFIG } from 'config';

var client = new Twitter({
    consumer_key: TWITTER_CONFIG.API_KEY,
    consumer_secret: TWITTER_CONFIG.API_KEY_SECRET,
    access_token_key: TWITTER_CONFIG.ACCESS_TOKEN,
    access_token_secret: TWITTER_CONFIG.ACCESS_TOKEN_SECRET
});

client.post('statuses/update', {status: 'Test Post'},  function(error, tweet, response) {
  if(error) throw error;
  console.log(tweet);  // Tweet body.
  console.log(response);  // Raw response object.
});
