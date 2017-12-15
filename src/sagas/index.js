import { fork, all } from 'redux-saga/effects';

import coincheckSaga from './coincheck.saga';
import notificationSaga from './notification.saga';
import websocketSaga from './websocket.saga';

function* rootSaga() {
    yield all([
        fork(coincheckSaga),
        fork(notificationSaga),
        fork(websocketSaga),
    ]);
}

export default rootSaga;
