import { NOTIFICATION }  from 'constants/action_type.constant';

const initialNotificationState = {
    isTwitterFetching: false
};

const notification = (state = initialNotificationState, action) => {
    switch (action.type) {
    // get self
    case NOTIFICATION.POST_TWEET_REQUEST:
        return { ...state, isTwitterFetching: true };
    case NOTIFICATION.POST_TWEET_SUCCESS:
        return { ...state, isTwitterFetching: false };
    case NOTIFICATION.POST_TWEET_FAILURE:
        return { ...state, isTwitterFetching: false };
    // default
    default:
        return { ...state };
    }
};

export default notification;
