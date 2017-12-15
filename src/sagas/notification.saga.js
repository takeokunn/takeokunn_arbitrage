import { put, fork, take, call, all, select } from 'redux-saga/effects';

import { notification } from 'actions/';
import { ajax, mongo } from 'services/';
import { NOTIFICATION } from 'constants/action_type.constant';

function* handlePostTweet() {
    while(true) {
        const action = yield take(NOTIFICATION.POST_TWEET_REQUEST);
        const tweet = yield call(ajax.twitter.postTweet, action.payload);
        console.log(tweet);
        yield put(notification.postTweet.success());
        yield put(notification.storeNotificationLog(true, 'twitter', 'Success post twitter message.'));
    }
}

function* handlePostSlack() {
    while(true) {
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
    while (true) {
        const action = yield take(NOTIFICATION.STORE_NOTIFICATION_LOG);
        const log = yield call(mongo.storeNotificationLog, action.payload);
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
