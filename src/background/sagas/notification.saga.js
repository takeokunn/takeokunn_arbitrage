import { put, fork, take, call, all } from 'redux-saga/effects';

import { notification } from 'background_actions/';
import { ajax, mongo } from 'background_services/';
import { NOTIFICATION } from 'background_constants/action_type.constant';

function* handlePostTweet() {
    for (;;) {
        const action = yield take(NOTIFICATION.POST_TWEET_REQUEST);
        const tweet = yield call(ajax.twitter.post, action.payload);
        if (!tweet.data.hasOwnProperty('errors')) {
            yield put(notification.postTweet.success());
            yield put(notification.storeNotificationLog(true, 'twitter', 'Success post twitter message.'));
        } else {
            yield put(notification.postTweet.failure());
            yield put(notification.storeNotificationLog(false, 'twitter', 'Failure post twitter message.'));
        }
    }
}

function* handlePostSlack() {
    for (;;) {
        const action = yield take(NOTIFICATION.POST_SLACK_REQUEST);
        const message = yield call(ajax.slack.postMessage, action.payload);
        if (message.ok) {
            yield put(notification.postSlack.success());
            yield put(notification.storeNotificationLog(true, 'slack', 'Success post slack message.'));
        } else {
            yield put(notification.postSlack.failure());
            yield put(notification.storeNotificationLog(false, 'slack', 'Failure post slack message.'));
        }
    }
}

function* handleStoreNotificationLog() {
    for (;;) {
        const action = yield take(NOTIFICATION.STORE_NOTIFICATION_LOG);
        yield call(mongo.storeNotificationLog, action.payload);
    }
}

function* notificationSaga() {
    yield all([
        fork(handlePostTweet),
        fork(handlePostSlack),
        fork(handleStoreNotificationLog)
    ]);
}

export default notificationSaga;
