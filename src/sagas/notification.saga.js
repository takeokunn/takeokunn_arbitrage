import { put, fork, take, call, all, select } from 'redux-saga/effects';

import { notification } from 'actions/';
import { ajax } from 'services/';
import { NOTIFICATION } from 'constants/action_type.constant';

function* handlePostTweet() {
    while(true) {
        const action = yield take(NOTIFICATION.POST_TWEET_REQUEST);
        const response = yield call(ajax.twitter.postTweet, action.payload);
        console.log(response);
        // switch (response.code) {
        // case 200:
        //     yield put(auth.login.success(response.data.token));
        //     break;
        // default:
        //     yield put(auth.login.failure());
        //     break;
        // }
    }
}

function* notificationSaga() {
    yield all([
        fork(handlePostTweet)
    ]);
}

export default notificationSaga;
