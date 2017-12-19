import { put, fork, take, all } from 'redux-saga/effects';

import { ajax } from 'background_services/';
import { BITFLYER } from 'background_constants/action_type.constant';

function* handlePostSendChildOrder() {
    for (;;) {
        yield take(BITFLYER.POST_SEND_CHILD_ORDER_REQUEST);
        yield put(ajax.bitflyer.postSendChildOrder);
    }
}

function* handlePostCancelChildOrder() {
    for (;;) {
        yield take(BITFLYER.POST_CANCEL_CHILD_ORDER_REQUEST);
        yield put(ajax.bitflyer.postCancelChildOrder);
    }
}

function* handleGetChildOrders() {
    for (;;) {
        yield take(BITFLYER.GET_CHILD_ORDERS_REQUEST);
        yield put(ajax.bitflyer.getChildOrders);
    }
}

function* handleGetExecutions() {
    for (;;) {
        yield take(BITFLYER.GET_EXECUTIONS_REQUEST);
        yield put(ajax.bitflyer.getExecutions);
    }
}

function* handleGetBalance() {
    for (;;) {
        yield take(BITFLYER.GET_BALANCE_REQUEST);
        yield put(ajax.bitflyer.getBalance);
    }
}

function* handleGetBoard() {
    for (;;) {
        yield take(BITFLYER.GET_BOARD_REQUEST);
        yield put(ajax.bitflyer.getBoard);
    }
}

function* bitflyerSaga() {
    yield all([
        fork(handlePostSendChildOrder),
        fork(handlePostCancelChildOrder),
        fork(handleGetChildOrders),
        fork(handleGetExecutions),
        fork(handleGetBalance),
        fork(handleGetBoard)
    ]);
}

export default bitflyerSaga;
