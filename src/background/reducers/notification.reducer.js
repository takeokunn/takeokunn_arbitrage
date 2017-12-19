import { NOTIFICATION }  from 'background_constants/action_type.constant';

const initialNotificationState = {
    isTwitterFetching: false,
    isSlackFetching: false
};

const postTwitter = (state, action) => {
    switch (action.type) {
    case NOTIFICATION.POST_TWEET_REQUEST:
        return { ...state, isTwitterFetching: true };
    case NOTIFICATION.POST_TWEET_SUCCESS:
        return { ...state, isTwitterFetching: false };
    case NOTIFICATION.POST_TWEET_FAILURE:
        return { ...state, isTwitterFetching: false };
    }
};

const postSlack = (state, action) => {
    switch (action.type) {
    case NOTIFICATION.POST_SLACK_REQUEST:
        return { ...state, isSlackFetching: true };
    case NOTIFICATION.POST_SLACK_SUCCESS:
        return { ...state, isSlackFetching: false };
    case NOTIFICATION.POST_SLACK_FAILURE:
        return { ...state, isSlackFetching: false };
    }
};

const notification = (state = initialNotificationState, action) => {
    switch (action.type) {
    // post twitter
    case NOTIFICATION.POST_TWEET_REQUEST:
    case NOTIFICATION.POST_TWEET_SUCCESS:
    case NOTIFICATION.POST_TWEET_FAILURE:
        return postTwitter(state, action);
    // post slack
    case NOTIFICATION.POST_SLACK_REQUEST:
    case NOTIFICATION.POST_SLACK_SUCCESS:
    case NOTIFICATION.POST_SLACK_FAILURE:
        return postSlack(state, action);
    // store notification_log
    case NOTIFICATION.STORE_NOTIFICATION_LOG:
        return { ...state };
    default:
        return { ...state };
    }
};

export default notification;
