import { fork, all } from 'redux-saga/effects';

import notificationSaga from './notification.saga';

function* rootSaga() {
    yield all([
        fork(notificationSaga)
    ]);
}

export default rootSaga;
