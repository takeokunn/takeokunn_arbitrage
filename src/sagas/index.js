import { fork, all } from 'redux-saga/effects';

import bitflyerSaga from './bitflyer.saga';
import coincheckSaga from './coincheck.saga';
import notificationSaga from './notification.saga';
import streamSaga from './stream.saga';

function* rootSaga() {
    yield all([
        fork(bitflyerSaga),
        fork(coincheckSaga),
        fork(notificationSaga),
        fork(streamSaga),
    ]);
}

export default rootSaga;
