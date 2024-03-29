import { NOTIFICATION } from 'background_constants/action_type.constant';

const action = (type, payload = {}) => ({ type, payload });

export const postTweet = {
    request: text => action(NOTIFICATION.POST_TWEET_REQUEST, { text }),
    success: () => action(NOTIFICATION.POST_TWEET_SUCCESS),
    failure: () => action(NOTIFICATION.POST_TWEET_FAILURE)
};

export const postSlack = {
    request: text => action(NOTIFICATION.POST_SLACK_REQUEST, { text }),
    success: () => action(NOTIFICATION.POST_SLACK_SUCCESS),
    failure: () => action(NOTIFICATION.POST_SLACK_FAILURE)
};

export const storeNotificationLog = (ok, type, text) => action(NOTIFICATION.STORE_NOTIFICATION_LOG, { ok, type, text });
